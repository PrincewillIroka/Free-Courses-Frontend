import React, { useEffect, useState } from 'react';
import NotificationIcon from 'mdi-react/NotificationsIcon';
import shortid from 'shortid';
import { getCategories } from '../services/CategoriesService';

export default function RightSidebar({ API_URL, changeCategory }) {
	const [state, setState] = useState({ categories: [] });
	useEffect(() => {
		handleGetCategories();
	}, []);

	const handleGetCategories = async () => {
		await getCategories(API_URL)
			.then((response) => {
				let categories = [];
				categories = response?.payload;
				setState({
					...state,
					categories,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex-column pt-6 h-full">
			<div className="flex align-center justify-between w-full px-4">
				<span className="font-medium">Notifications</span>
				<NotificationIcon />
			</div>
			<h3 className="flex justify-center border-b-2 mx-1 mt-20 pb-1">Categories</h3>
			{state?.categories ? (
				<div className="flex-col px-4">
					{state?.categories.map((category) => (
						<span
							onClick={() => changeCategory(category?._id)}
							key={shortid.generate()}
							className="cursor-pointer text-gray-600 py-2 w-full block text-center text-sm border-b-1 border-gray-200"
						>
							{category?.title}
						</span>
					))}
				</div>
			) : (
				<div className="h-full flex items-center justify-center">
					<span className="text-gray-600">None found</span>
				</div>
			)}
		</div>
	);
}
