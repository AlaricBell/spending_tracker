"use client";

import classNames from "classnames";
import "./input.scss";

type InputProps = {
	type?: string;
	placeholder?: string;
	label?: string;
	className?: string;
	value: string | number;
	onChange: (value: string) => void;
};

const Input = ({
	value,
	onChange,
	placeholder = "",
	label = "",
	type = "text",
	className = "",
}: InputProps) => {
	return (
		<div className={classNames("input-group", className)}>
			<label className='input-label'>{label}</label>
			<input
				className='input-text'
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export default Input;
