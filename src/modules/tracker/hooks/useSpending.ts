import { useMutation, useQuery, useQueryClient } from "react-query";
import { GetProps, PostProps } from "../types/trackerType";
import { useToasterStore } from "@/modules/common/store/toasterStore";

const headers = {
	"Content-Type": "application/json",
};

async function fetchSpending(params: GetProps) {
	const response = await fetch(
		`https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings${
			Object.keys(params).length ? "?" : ""
		}${new URLSearchParams(params)}`
	);
	if (!response.ok) {
		throw new Error("Network response error");
	}
	return response.json();
}

const postSpending = async (data: PostProps) => {
	const bodyObject = {
		...data,
		spent_at: new Date().toISOString(),
	};
	const response = await fetch(
		`https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/`,
		{
			method: "POST",
			headers: headers,
			body: JSON.stringify(bodyObject),
		}
	);
	return response;
};

export const useSpending = (params: GetProps = {}) => {
	const { data, isLoading, isError, refetch } = useQuery(
		["trackingData", params],
		() => fetchSpending(params)
	);

	return { data, isLoading, isError, refetch };
};

export function usePostSpending() {
	const queryClient = useQueryClient();
	const setIsToasterOpen = useToasterStore((state) => state.setIsOpen);
	const setToasterContent = useToasterStore((state) => state.setContent);
	const setToasterVariant = useToasterStore((state) => state.setVariant);

	return useMutation(postSpending, {
		onSuccess: () => {
			queryClient.invalidateQueries("trackingData");
		},
		onError: () => {
			setIsToasterOpen(true);
			setToasterContent("Something went wrong!");
			setToasterVariant("error");
		},
	});
}
