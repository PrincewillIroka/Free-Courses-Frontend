import React, { useState } from 'react';

export default function SuggestACourse() {
	return (
		<div className="h-full">
			<div className="flex w-full pt-4 px-8 h-full">
				<form className="flex flex-wrap w-full justify-between h-98 bg-white pt-16 px-10">
					<input
						placeholder="Course Title"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						placeholder="Course Description (optional)"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						placeholder="Source e.g Udemy"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						placeholder="Course Title"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						placeholder="Course Description (optional)"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200"
					/>
					<input
						placeholder="Source e.g Udemy"
						className="w-2/5.5 h-10 rounded-md px-2 focus:outline-none border-1 border-gray-200 mb-16"
					/>
					<div className="flex justify-center w-full">
						<button className="w-32 h-10 items-center px-4 bg-red-150 text-white rounded-full cursor-pointer shadow-md text-sm hover:bg-opacity-100">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
