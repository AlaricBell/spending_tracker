"use client";

import classNames from "classnames";
import "./tag.scss";
import { TagTypes } from "../../enums/tagEnum";

type TagProps = {
	onClick: () => void;
	className?: string;
	text?: string;
	type?: TagTypes;
	icon?: React.ReactNode;
};

const Tag = ({
	onClick,
	text = "",
	type = TagTypes.Text,
	icon = null,
	className = "",
}: TagProps) => {
	return (
		<div
			onClick={onClick}
			className={classNames(`tag-${type}`, "tag", className)}
		>
			{type !== TagTypes.Text ? icon : null}
			{type !== TagTypes.Icon ? text : null}
		</div>
	);
};

export default Tag;
