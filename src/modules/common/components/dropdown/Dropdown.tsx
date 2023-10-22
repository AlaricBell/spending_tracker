"use client";

import classNames from "classnames";
import "./dropdown.scss";
import { useEffect, useState } from "react";
import { useHover } from "@uidotdev/usehooks";

type DropdownOption = {
	value: string;
	displayValue: string;
};

type DropdownProps = {
	className?: string;
	options: DropdownOption[];
	value: string;
	onChange: (value: string) => void;
};

const Dropdown = ({
	options,
	value,
	onChange,
	className = "",
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [ref, hovering] = useHover<HTMLDivElement>();

	useEffect(() => {
		if (!hovering) setIsOpen(false);
	}, [hovering]);

	return (
		<div
			className={classNames("dropdown", className)}
			onClick={() => setIsOpen((prev) => !prev)}
		>
			{value}
			<div
				className={classNames(
					{ "dropdown-open": isOpen, "dropdown-closed": !isOpen },
					"dropdown-options"
				)}
				ref={ref}
			>
				{options.map((option, index) => (
					<div
						className='dropdown-option'
						key={index}
						onClick={() => {
							onChange(option.value);
						}}
					>
						{option.displayValue}
					</div>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
