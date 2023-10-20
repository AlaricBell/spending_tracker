import { Currency } from "../enums/trackerEnums";

export type TrackerType = {
	description: string;
	amount: number;
	spent_at: string;
	currency: Currency;
};
