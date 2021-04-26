import React, { useState } from 'react';
import AscendingSortIcon from 'mdi-react/SortAlphabeticalAscendingIcon';
import DescendingSortIcon from 'mdi-react/SortAlphabeticalDescendingIcon';

export default function Controls({ activeTab, sortedBy, handleSorting }) {
	return (
		<section className="pl-6 pr-8 mb-8 flex items-center justify-between bg-gray-300 h-8">
			<div className="font-bold">
				<span>Courses</span>
				<span className="mx-2">/</span>
				<span>
					{activeTab?.tag === 'all_courses'
						? 'New'
						: activeTab?.tag === 'bookmarks'
						? 'Bookmarks'
						: activeTab?.tag === 'suggest_course'
						? 'Make Suggestion'
						: null}
				</span>
			</div>
			{activeTab?.tag !== 'suggest_course' ? (
				<>
					{sortedBy === 'ascending' ? (
						<span title="Descending">
							<DescendingSortIcon
								className="sort-icon cursor-pointer"
								onClick={() => handleSorting('descending')}
							/>
						</span>
					) : (
						<span title="Ascending">
							<AscendingSortIcon
								className="sort-icon cursor-pointer"
								onClick={() => handleSorting('ascending')}
							/>
						</span>
					)}
				</>
			) : null}
		</section>
	);
}
