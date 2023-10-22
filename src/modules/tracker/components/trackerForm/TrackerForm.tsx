"use client";

import "./trackerForm.scss";
import { useMemo, useState } from "react";
import Input from "@/modules/common/components/inputs/Input/Input";
import Dropdown from "@/modules/common/components/dropdown/Dropdown";
import { Currency } from "../../enums/trackerEnum";
import Button from "@/modules/common/components/buttons/Button";
import { useTrackerFormStore } from "@/store/trackerFormStore";

type TrackerFormProps = {};

const TrackerForm = ({}: TrackerFormProps) => {
	const trackerForm = useTrackerFormStore((state) => state.trackerForm);
	const setTrackerForm = useTrackerFormStore((state) => state.setTrackerForm);
	const clearTrackerForm = useTrackerFormStore(
		(state) => state.clearTrackerForm
	);
	const currencyOptions = useMemo(() => {
		return Object.keys(Currency).map((currency) => {
			return { value: currency, displayValue: currency };
		});
	}, []);

	const handleSubmit = () => {
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
				onChange={(value) => setTrackerForm("amount", value)}
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
