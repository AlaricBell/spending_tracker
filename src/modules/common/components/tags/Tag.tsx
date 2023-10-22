"use client";

import classNames from "classnames";
import "./tag.scss";
import { TagTypes } from "../../enums/tagEnum";
import { useState } from "react";

type TagProps = {
	onClick: () => void;
	className?: string;
	isActive?: boolean;
	text?: string;
	type?: TagTypes;
	icon?: React.ReactNode;
};

const Tag = ({
	onClick,
	isActive = false,
	text = "",
	type = TagTypes.Text,
	icon = null,
	className = "",
}: TagProps) => {
	return (
		<div
			onClick={onClick}
			className={classNames(
				{ highlight: isActive },
				`tag-${type}`,
				"tag",
				className
			)}
		>
			{type !== TagTypes.Text ? icon : null}
			{type !== TagTypes.Icon ? text : null}
		</div>
	);
};

export default Tag;
