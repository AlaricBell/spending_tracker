import { useMutation, useQuery } from "react-query";

type GetProps = {
	amount: string;
	spent_at: string;
};

type PostProps = {
	description: string;
	amount: number | string;
	currency: string;
};

const headers = {
	"Content-Type": "application/json",
};

async function fetchSpending() {
	const response = await fetch(
		`https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings`
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

export const useSpending = () => {
	const { data, isLoading, isError, refetch } = useQuery(
		"trackingData",
		fetchSpending
	);

	return { data, isLoading, isError, refetch };
};

export function usePostSpending() {
	return useMutation(postSpending);
}
