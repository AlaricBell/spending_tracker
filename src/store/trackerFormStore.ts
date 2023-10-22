import { create } from "zustand";
import { produce } from "immer";
import { TrackerType } from "@/modules/tracker/types/trackerType";
import { Currency } from "@/modules/tracker/enums/trackerEnum";

interface TrackerState {
	trackerForm: TrackerType;
	setTrackerForm: (
		key: keyof TrackerType,
		value: TrackerType[keyof TrackerType]
	) => void;
	clearTrackerForm: () => void;
}

const defaultTrackerForm: TrackerType = {
	description: "",
	amount: "",
	spent_at: "",
	currency: Object.keys(Currency)[0],
};

export const useTrackerFormStore = create<TrackerState>()((set) => ({
	trackerForm: defaultTrackerForm,
	setTrackerForm: (key, value) =>
		set((state) => ({
			trackerForm: produce(state.trackerForm, (draft) => {
				if (key === "currency") draft[key] = value as Currency;
				else if (key === "amount") draft[key] = value as number;
				else draft[key] = value as string;
			}),
		})),
	clearTrackerForm: () => set((state) => ({ trackerForm: defaultTrackerForm })),
}));
