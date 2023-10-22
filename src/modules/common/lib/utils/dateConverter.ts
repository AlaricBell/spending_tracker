export const dateConverter = (inputDate: string) => {
	const date = new Date(inputDate);
	const timeString = date.toLocaleString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});
	const dateString = date.toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
	});
	return `${timeString} - ${dateString}`;
};
