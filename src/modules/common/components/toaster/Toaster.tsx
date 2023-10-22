"use client";

import classNames from "classnames";
import "./toaster.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useToasterStore } from "../../store/toasterStore";
import { useEffect } from "react";

type ToasterProps = {
	className?: string;
};

const Toaster = ({ className }: ToasterProps) => {
	const toasterContent = useToasterStore((state) => state.content);
	const isOpen = useToasterStore((state) => state.isOpen);
	const variant = useToasterStore((state) => state.variant);
	const setIsOpen = useToasterStore((state) => state.setIsOpen);

	useEffect(() => {
		if (isOpen) {
			const timeoutId = setTimeout(() => {
				setIsOpen(false);
			}, 5000);

			return () => clearTimeout(timeoutId);
		}
	}, [isOpen]);

	return isOpen ? (
		<div className={classNames(`toaster-${variant}`, "toaster", className)}>
			<div className='toaster-text'>{toasterContent}</div>
			<span className='toaster-icon' onClick={() => setIsOpen(false)}>
				<FontAwesomeIcon
					icon={faXmark}
					style={{ width: "24px", height: "24px" }}
				/>
			</span>
		</div>
	) : null;
};

export default Toaster;
