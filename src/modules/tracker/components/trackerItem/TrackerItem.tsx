"use client";

import "./trackerItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import Button from "@/modules/common/components/buttons/Button";
import { ButtonTypes, ButtonVariants } from "@/modules/common/enums/buttonEnum";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { TrackerType } from "../../types/trackerType";
import { Currency } from "../../enums/trackerEnum";
import { dateConverter } from "@/modules/common/lib/utils/dateConverter";

type TrackerProps = {
	tracker: TrackerType;
};

const TrackerItem = ({ tracker }: TrackerProps) => {
	return (
		<div className='tracker-item'>
			<div className='tracker-currency'>
				<FontAwesomeIcon
					icon={faDollar}
					style={{ width: "24px", height: "24px" }}
				/>
			</div>
			<div className='tracker-detail'>
				<h2 className='tracker-name'>{tracker.description}</h2>
				<p className='tracker-date'>{dateConverter(tracker.spent_at)}</p>
			</div>
			<div className='tracker-actions'>
				<h2 className='tracker-amount'>{`${
					Currency[tracker.currency as keyof typeof Currency]
				}${tracker.amount}`}</h2>
				<Button
					className='tracker-btn'
					onClick={() => {}}
					type={ButtonTypes.Icon}
					variant={ButtonVariants.Secondary}
					icon={
						<FontAwesomeIcon
							icon={faPen}
							style={{ width: "14px", height: "14px" }}
						/>
					}
				/>
				<Button
					className='tracker-btn'
					onClick={() => {}}
					type={ButtonTypes.Icon}
					variant={ButtonVariants.Secondary}
					icon={
						<FontAwesomeIcon
							icon={faXmark}
							style={{ width: "14px", height: "14px" }}
						/>
					}
				/>
			</div>
		</div>
	);
};

export default TrackerItem;
