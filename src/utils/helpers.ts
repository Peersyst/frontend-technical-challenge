export const dateParsed = (date: Date) => {
	const options: any = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
	};

	return date.toLocaleString('en-US', options);
};
