import React, { useState } from 'react';

export default function SuggestACourse() {
	const [state, setState] = useState({
		isRequesting: false,
		title: '',
		description: '',
		banner: '',
		link: '',
		stars: '',
		source: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		let { title, description, banner, link, stars, source } = state;
		console.log(title, description, banner, link, stars, source);
	};

	const handleSetValue = (field, value) => {
		let obj = {};

		if (field === 'title') {
			obj['title'] = value;
		} else if (field === 'description') {
			obj['description'] = value;
		} else if (field === 'banner') {
			obj['banner'] = value;
		} else if (field === 'link') {
			obj['link'] = value;
		} else if (field === 'stars') {
			obj['stars'] = value;
		} else if (field === 'source') {
			obj['source'] = value;
		}

		setState({ ...state, ...obj });
	};

	return (
		<div className="h-full">
			<div className="flex w-full pt-4 px-8 h-full">
				<form className="flex flex-wrap w-full justify-between h-98 bg-white pt-16 px-10">
					<input
						onChange={(e) => handleSetValue('title', e.target.value)}
						value={state?.title}
						placeholder="Course Title"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						onChange={(e) => handleSetValue('description', e.target.value)}
						value={state?.description}
						placeholder="Course Description (optional)"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						onChange={(e) => handleSetValue('banner', e.target.value)}
						value={state?.banner}
						placeholder="Banner Image (url)"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						onChange={(e) => handleSetValue('link', e.target.value)}
						value={state?.link}
						placeholder="Link (url)"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						onChange={(e) => handleSetValue('stars', e.target.value)}
						type="number"
						value={state?.stars}
						placeholder="Stars (optional)"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						onChange={(e) => handleSetValue('source', e.target.value)}
						value={state?.source}
						placeholder="Source e.g Udemy"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200 mb-16"
					/>
					<div className="flex justify-center w-full">
						<button
							onClick={(e) => handleSubmit(e)}
							className="w-32 h-10 items-center px-4 bg-red-150 text-white rounded-full cursor-pointer shadow-md text-sm hover:bg-opacity-100"
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
