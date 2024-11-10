import { useState, useEffect } from 'react';
import getConfig from 'next/config';
import Layout from '../components/head';
import LeftSidebar from '../components/left-sidebar';
import SearchBar from '../components/searchbar';
import RightSidebar from '../components/right-sidebar';
import Controls from '../components/controls';
import Container from '../components/container';
import MakeSuggestion from '../components/suggest-a-course';
import Bookmarks from '../components/bookmarks';
import { getCourses, searchCourses, getCoursesByCategory } from '../services/CourseService';

const { publicRuntimeConfig } = getConfig();

function HomePage() {
	const tabs = [
		{ title: 'All Courses', tag: 'all_courses' },
		{ title: 'Bookmarks', tag: 'bookmarks' },
		{ title: 'Suggest a Course', tag: 'suggest_course' },
	];

	const [state, setState] = useState({
		activeTab: { title: 'All Courses', tag: 'all_courses' },
		bookmarks: [],
		isFetching: true,
		courses: [],
		pageNumber: 0,
		limit: 10,
		sortedBy: 'ascending',
	});

	const API_URL = publicRuntimeConfig.API_URL;

	useEffect(() => {
		handleSetup();
	}, []);

	const handleSetup = async () => {
		let { pageNumber, limit } = state;

		handleSetState({
			bookmarks: JSON.parse(localStorage?.getItem('bookmarks')) || [],
		});

		await getCourses({ API_URL, pageNumber, limit })
			.then((response) => {
				let courses = [];
				if (response && response?.success) {
					courses = response?.payload || [];
				}
				handleSetState({
					courses,
					isFetching: false,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleSetState = (params) => {
		const obj = {};
		for (const property in params) {
			obj[property] = params[property];
		}
		setState({ ...state, ...obj });
	};

	const handleBookmark = (course) => {
		let bookmarks = state?.bookmarks;
		const foundIndex = bookmarks?.findIndex((bookmark) => {
			return bookmark._id === course._id;
		});
		if (foundIndex === -1) {
			bookmarks.push(course);
		} else {
			bookmarks.splice(foundIndex, 1);
		}
		localStorage?.setItem('bookmarks', JSON.stringify(bookmarks));
		handleSetState({
			bookmarks,
		});
	};

	const handleSearchRequest = async (value) => {
		let { pageNumber, limit } = state;
		handleSetState({ isFetching: true });
		await searchCourses({ API_URL, title: value, pageNumber, limit })
			.then((response) => {
				let courses = [];
				if (response && response?.success) {
					courses = response?.payload || [];
				}
				handleSetState({
					courses,
					isFetching: false,
				});
			})
			.catch((error) => {
				console.error(error);
				handleSetState({ isFetching: false, courses: [] });
			});
	};

	const changeCategory = async (categoryId) => {
		let pageNumber = 0,
			limit = 10;
		await handleSetState({ isFetching: true });
		await getCoursesByCategory({ API_URL, categoryId, pageNumber, limit })
			.then((response) => {
				let courses = [];
				if (response && response?.success) {
					courses = response?.payload || [];
				}
				handleSetState({
					courses,
					isFetching: false,
				});
			})
			.catch((error) => {
				console.error(error);
				handleSetState({ isFetching: false, courses: [] });
			});
	};

	const handleSorting = (sortedBy) => {
		let { courses } = state;
		courses = courses?.sort((a, b) => {
			const aTitle = a.title.split(' ').join('');
			const bTitle = b.title.split(' ').join('');
			let value;
			if (sortedBy === 'ascending') {
				value = aTitle > bTitle ? 1 : -1;
			} else if (sortedBy === 'descending') {
				value = bTitle > aTitle ? 1 : -1;
			}
			return value;
		});
		handleSetState({ courses, sortedBy });
	};

	const handleScrollToBottom = () => {};

	return (
		<div>
			<Layout />
			<section className="flex">
				<aside className="w-1/5">
					<LeftSidebar
						tabs={tabs}
						activeTab={state?.activeTab}
						setActiveTab={(tab) => handleSetState({ activeTab: tab })}
					/>
				</aside>
				<main className="w-4/5 bg-spec flex-column h-screen overflow-hidden">
					<SearchBar searchCourses={handleSearchRequest} />
					<Controls activeTab={state?.activeTab} sortedBy={state?.sortedBy} handleSorting={handleSorting} />
					{state.activeTab?.tag === 'all_courses' ? (
						<Container
							courses={state?.courses}
							isFetching={state?.isFetching}
							handleBookmark={handleBookmark}
							handleScrollToBottom={handleScrollToBottom}
						/>
					) : state.activeTab?.tag === 'bookmarks' ? (
						<Bookmarks
							bookmarks={state?.bookmarks}
							handleBookmark={handleBookmark}
							setActiveTab={(tab) => {
								handleSetState({ activeTab: tab });
							}}
						/>
					) : state.activeTab?.tag === 'suggest_course' ? (
						<MakeSuggestion />
					) : null}
				</main>
				<aside className="w-1/5 overflow-y-hidden">
					<RightSidebar API_URL={API_URL} changeCategory={changeCategory} />
				</aside>
			</section>
		</div>
	);
}

// export async function getServerSideProps() {
//   let pageNumber = 0;
//   let limit = 10;
//   const API_URL = "https://free-courses-backend.herokuapp.com/api";

//   let res = await fetch(
//     `${API_URL}/courses?pageNumber=${pageNumber}&limit=${limit}`
//   );

//   res = await res.json();
//   const courses = res?.payload;
//   pageNumber = courses?.length ? pageNumber + 1 : pageNumber;

//   return {
//     props: {
//       courses,
//       isFetching: false,
//       API_URL,
//       pageNumber,
//       limit,
//     },
//   };
// }

export default HomePage;
