"use client";

import "./trackerList.scss";
import TrackerItem from "../trackerItem/TrackerItem";
import useSpending from "../../hooks/useSpending";
import { TrackerType } from "../../types/trackerType";

const TrackerList = () => {
	const { data } = useSpending();

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
