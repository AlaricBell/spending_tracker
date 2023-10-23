"use client";

import "./trackerActions.scss";
import { useCallback, useMemo, useState } from "react";
import Dropdown from "@/modules/common/components/dropdown/Dropdown";
import { useTrackerListStore } from "@/modules/tracker/store/trackerListStore";
import Tag from "@/modules/common/components/tags/Tag";
import { Currency } from "../../enums/trackerEnum";

type TrackerListProps = {};

const TrackerActions = ({}: TrackerListProps) => {
	const trackerFilter = useTrackerListStore((state) => state.trackerFilter);
	const setTrackerFilter = useTrackerListStore(
		(state) => state.setTrackerFilter
	);
	const trackerSort = useTrackerListStore((state) => state.trackerSort);
	const setTrackerSort = useTrackerListStore((state) => state.setTrackerSort);

	const sortOptions = useMemo(() => {
		return [
			{
				value: "-spent_at",
				displayValue: "Sort by Date descending (default)",
			},
			{
				value: "spent_at",
				displayValue: "Sort by Date ascending",
			},
			{
				value: "-amount",
				displayValue: "Sort by Amount descending",
			},
			{
				value: "amount",
				displayValue: "Sort by Amount ascending",
			},
		];
	}, []);

	const convertSortValue = useCallback((): string => {
		return sortOptions.filter((option) => option.value === trackerSort)[0]
			.displayValue;
	}, [trackerSort]);

	return (
		<div className='tracker-action'>
			<Dropdown
				className='tracker-action-sort'
				value={convertSortValue()}
				onChange={(value) => setTrackerSort(value)}
				options={sortOptions}
			/>
			<div className='tracker-action-filter'>
				<Tag
					className='tracker-action-tag'
					text='ALL'
					onClick={() => setTrackerFilter("")}
					isActive={trackerFilter === ""}
				/>
				{Object.keys(Currency).map((currency, index) => (
					<Tag
						className='tracker-action-tag'
						text={currency}
						onClick={() => setTrackerFilter(currency)}
						isActive={trackerFilter === currency}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default TrackerActions;
