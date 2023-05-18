export const makeRupiahValue = (price) =>
	new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumSignificantDigits: 1,
	}).format(price);

export const transformDate = (date) =>
	Intl.DateTimeFormat("en-us", {
		dateStyle: "medium",
	}).format(new Date(date));
