"use client";

import "./input.scss";

type InputProps = {
	type?: string;
	placeholder?: string;
	label?: string;
	value: string;
	onChange: (value: string) => void;
};

const Input = ({
	value,
	onChange,
	placeholder = "",
	label = "",
	type = "text",
}: InputProps) => {
	return (
		<div className='input-group'>
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
