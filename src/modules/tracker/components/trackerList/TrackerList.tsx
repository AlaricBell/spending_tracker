"use client";

import "./trackerList.scss";
import TrackerItem from "../trackerItem/TrackerItem";
import { useSpending } from "../../hooks/useSpending";
import { TrackerType } from "../../types/trackerType";
import { useTrackerListStore } from "@/store/trackerListStore";

const TrackerList = () => {
	const trackerFilter = useTrackerListStore((state) => state.trackerFilter);
	const { data } = useSpending();

	return (
		<div className='tracker-list'>
			{data &&
				data
					.filter(
						(spending: TrackerType) =>
							trackerFilter === "" || spending.currency === trackerFilter
					)
					.map((trackerData: TrackerType) => (
						<TrackerItem tracker={trackerData} key={trackerData.id} />
					))}
		</div>
	);
};

export default TrackerList;
