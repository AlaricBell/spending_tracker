"use client";

import "./trackerList.scss";
import TrackerItem from "../trackerItem/TrackerItem";
import { useSpending } from "../../hooks/useSpending";
import { GetProps, TrackerType } from "../../types/trackerType";
import { useTrackerListStore } from "@/store/trackerListStore";
import { useEffect, useState } from "react";

const TrackerList = () => {
	const trackerFilter = useTrackerListStore((state) => state.trackerFilter);
	const trackerSort = useTrackerListStore((state) => state.trackerSort);
	const params: GetProps = { currency: trackerFilter, order: trackerSort };
	const { data, refetch } = useSpending(params);

	useEffect(() => {
		params.currency = trackerFilter;
		params.order = trackerSort;
		refetch();
	}, [trackerFilter, trackerSort]);

	return (
		<div className='tracker-list'>
			{data &&
				data.map((trackerData: TrackerType) => (
					<TrackerItem tracker={trackerData} key={trackerData.id} />
				))}
		</div>
	);
};

export default TrackerList;
