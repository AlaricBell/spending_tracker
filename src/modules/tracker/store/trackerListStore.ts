import { create } from "zustand";
import { TrackerType } from "@/modules/tracker/types/trackerType";

interface TrackerState {
	trackerFilter: string;
	trackerSort: string;
	trackerData: TrackerType[];
	setTrackerFilter: (value: string) => void;
	setTrackerSort: (value: string) => void;
	setTrackerData: (value: TrackerType[]) => void;
}

const defaultTrackerData: TrackerType[] = [
	{
		description: "description",
		spent_at: "august 12",
		amount: 12.0,
		currency: "USD",
	},
];

export const useTrackerListStore = create<TrackerState>()((set) => ({
	trackerData: defaultTrackerData,
	trackerFilter: "",
	trackerSort: "-spent_at",
	setTrackerFilter: (value) => set((state) => ({ trackerFilter: value })),
	setTrackerSort: (value) => set((state) => ({ trackerSort: value })),
	setTrackerData: (value) => set((state) => ({ trackerData: value })),
}));
