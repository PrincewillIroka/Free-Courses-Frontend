import { useState, useEffect } from 'react';
import CardsHeartIcon from 'mdi-react/CardsHeartIcon';
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon';
import shortid from 'shortid';

function Container({ courses, isFetching, handleBookmark }) {
	const [state, setState] = useState({
		dummyStars: new Array(5).fill(),
		bookmarks: [],
	});

	useEffect(() => {
		setState({
			bookmarks: JSON.parse(localStorage?.getItem('bookmarks')) || [],
		});
	}, []);

	const fillArray = (num) => {
		return new Array(num).fill();
	};

	const isBookmark = (course) => {
		const isValid = state?.bookmarks?.find((bookmark) => {
			return bookmark._id === course._id;
		});
		return isValid;
	};

	const computeBookmarks = (course) => {
		handleBookmark(course);
		const bookmarks = JSON.parse(localStorage?.getItem('bookmarks')) || [];
		setState({ bookmarks });
	};

	const handleNavigation = (link) => {
		window.open(link, '_newtab');
	};

	return (
		<section className="px-6 h-container sleek-scrollbar">
			{isFetching ? (
				<div className="flex h-full items-center justify-center">
					<span>Loading...</span>
				</div>
			) : courses?.length ? (
				<div className="grid gap-8 row-gap-10 grid-cols-3">
					{courses.map((course, index) => (
						<div key={shortid.generate()} className="h-64 bg-white shadow-lg">
							<img
								className="h-40 w-full object-cover cursor-pointer"
								src={course.banner}
								onClick={() => handleNavigation(course.link)}
							/>
							<div className="h-16 w-full px-2 mt-1">
								<div
									className="font-bold text-base truncate h-6 cursor-pointer"
									onClick={() => handleNavigation(course.link)}
								>
									{course.title}
								</div>
								<div className="text-sm text-gray-600 truncate h-6">{course.description}</div>
								<div className="flex w-full justify-between h-6">
									<div className="flex h-4 w-full">
										{fillArray(course.stars)?.length ? (
											<div className="flex h-4 w-full">
												{fillArray(course.stars)?.map((star, index) => (
													<span key={index} className="fa fa-star checked"></span>
												))}
												{fillArray(course.stars)?.length < 5
													? fillArray(5 - course.stars)?.map((star, index) => (
															<span key={index} className="fa fa-star"></span>
													  ))
													: null}
											</div>
										) : (
											state.dummyStars.map((star, index) => (
												<span key={index} className="fa fa-star"></span>
											))
										)}
									</div>
									{isBookmark(course) ? (
										<CardsHeartIcon
											title="Remove from bookmarks"
											className="bookmark cursor-pointer z-10"
											onClick={() => computeBookmarks(course)}
										/>
									) : (
										<HeartOutlineIcon
											title="Add to bookmarks"
											className="bookmark cursor-pointer z-10"
											onClick={() => computeBookmarks(course)}
										/>
									)}
								</div>
								<div className="text-xs">
									<span className="text-gray-600">Source:</span>{' '}
									<span className="truncate">{course.source}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="h-full w-full flex flex-col items-center justify-center  pt-16">
					<div className="bg-white shadow-md mb-6">
						<img alt="Bookmark Illustration" className="h-56 w-56" src="/assets/illustration.svg" />
					</div>
				</div>
			)}
		</section>
	);
}

export default Container;
