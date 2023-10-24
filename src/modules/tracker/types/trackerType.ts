import { Currency } from "../enums/trackerEnum";

export type TrackerType = {
	id?: string;
	description: string;
	amount: number | string;
	spent_at: string;
	currency: string;
};

export type GetProps = {
	currency?: string;
	order?: string;
};

export type PostProps = {
	description: string;
	amount: number | string;
	currency: string;
};
