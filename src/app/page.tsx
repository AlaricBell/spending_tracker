"use client";

import Button from "@/modules/common/components/buttons/Button";
import Dropdown from "@/modules/common/components/dropdown/Dropdown";
import Input from "@/modules/common/components/inputs/Input/Input";
import Tag from "@/modules/common/components/tags/Tag";
import TrackerActions from "@/modules/tracker/components/trackerActions/TrackerActions";
import TrackerForm from "@/modules/tracker/components/trackerForm/TrackerForm";
import TrackerItem from "@/modules/tracker/components/trackerItem/TrackerItem";
import TrackerList from "@/modules/tracker/components/trackerList/TrackerList";
import { Currency } from "@/modules/tracker/enums/trackerEnum";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
	return (
		<QueryClientProvider client={queryClient} contextSharing={true}>
			<main>
				<TrackerForm />
				<TrackerActions />
				<TrackerList />
				{/* <Tag onClick={() => {}} text='All' />
				<TrackerItem
					tracker={{
						description: "description",
						spent_at: "august 12",
						amount: 12.0,
						currency: Currency["USD"],
					}}
				/> */}
			</main>
		</QueryClientProvider>
	);
}
