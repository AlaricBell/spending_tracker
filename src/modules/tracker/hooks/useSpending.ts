import { useQuery } from "react-query";

async function fetchSpending() {
	const response = await fetch(
		"https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/"
	);
	if (!response.ok) {
		throw new Error("Network response error");
	}
	return response.json();
}

export const useSpending = () => {
	const { data, isLoading, isError, refetch } = useQuery("data", fetchSpending);

	return { data, isLoading, isError, refetch };
};

export default useSpending;
