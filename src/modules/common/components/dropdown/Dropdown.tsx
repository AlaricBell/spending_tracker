"use client";

import classNames from "classnames";
import "./dropdown.scss";
import { TagTypes } from "../../enums/tagEnum";
import { useState } from "react";

type DropdownProps = {
	options: any[];
};

const Dropdown = ({ options }: DropdownProps) => {
	const [value, setValue] = useState(options[0] ?? "");
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='dropdown' onClick={() => setIsOpen((prev) => !prev)}>
			{value}
			<div
				className={classNames(
					{ "dropdown-open": isOpen, "dropdown-closed": !isOpen },
					"dropdown-options"
				)}
			>
				{options.map((option, index) => (
					<div className='dropdown-option' key={index}>
						{option}
					</div>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
