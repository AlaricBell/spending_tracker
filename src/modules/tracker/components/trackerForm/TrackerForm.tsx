"use client";

import "./trackerForm.scss";
import { useMemo, useState } from "react";
import Input from "@/modules/common/components/inputs/Input/Input";
import Dropdown from "@/modules/common/components/dropdown/Dropdown";
import { Currency } from "../../enums/trackerEnum";
import Button from "@/modules/common/components/buttons/Button";
import { useTrackerFormStore } from "@/store/trackerFormStore";
import { usePostSpending, useSpending } from "../../hooks/useSpending";
import { useToasterStore } from "@/modules/common/store/toasterStore";

type TrackerFormProps = {};

const TrackerForm = ({}: TrackerFormProps) => {
	const { mutateAsync } = usePostSpending();
	const { refetch } = useSpending();
	const trackerForm = useTrackerFormStore((state) => state.trackerForm);
	const setTrackerForm = useTrackerFormStore((state) => state.setTrackerForm);
	const clearTrackerForm = useTrackerFormStore(
		(state) => state.clearTrackerForm
	);
	const setIsToasterOpen = useToasterStore((state) => state.setIsOpen);
	const setToasterContent = useToasterStore((state) => state.setContent);
	const setToasterVariant = useToasterStore((state) => state.setVariant);

	const currencyOptions = useMemo(() => {
		return Object.keys(Currency).map((currency) => {
			return { value: currency, displayValue: currency };
		});
	}, []);

	const handleSubmit = async () => {
		if (trackerForm.description.length <= 0) {
			setIsToasterOpen(true);
			setToasterContent("Description is required!");
			setToasterVariant("error");
			return;
		}

		if ((trackerForm.amount as number) <= 0) {
			setIsToasterOpen(true);
			setToasterContent("Amount is required!");
			setToasterVariant("error");
			return;
		}
		const response = await mutateAsync({
			description: trackerForm.description,
			amount: trackerForm.amount,
			currency: trackerForm.currency,
		});
		console.log(response);
		refetch();
		setIsToasterOpen(true);
		setToasterContent("Spending was saved!");
		setToasterVariant("success");
		clearTrackerForm();
	};

	return (
		<div className='tracker-form'>
			<Input
				className='tracker-form-input'
				value={trackerForm.description}
				placeholder='description'
				onChange={(value) => setTrackerForm("description", value)}
			/>
			<Input
				className='tracker-form-input'
				value={trackerForm.amount}
				type='number'
				placeholder='0'
				onChange={(value) => setTrackerForm("amount", Number(value))}
			/>
			<Dropdown
				className='tracker-form-dropdown'
				options={currencyOptions}
				value={trackerForm.currency}
				onChange={(value) => setTrackerForm("currency", value)}
			/>
			<Button className='tracker-form-btn' text='Save' onClick={handleSubmit} />
		</div>
	);
};

export default TrackerForm;
