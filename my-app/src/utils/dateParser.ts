export const getDateParsed = (date: Date) => {
	return (
		date.getMonth() +
		1 +
		"/" +
		date.getDate() +
		"/" +
		date.getFullYear() +
		", " +
		date.getHours() +
		":" +
		date.getMinutes() +
		":" +
		date.getSeconds()
	);
};
