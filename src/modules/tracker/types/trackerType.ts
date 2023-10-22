import { Currency } from "../enums/trackerEnum";

export type TrackerType = {
	id?: string;
	description: string;
	amount: number | string;
	spent_at: string;
	currency: string;
};
