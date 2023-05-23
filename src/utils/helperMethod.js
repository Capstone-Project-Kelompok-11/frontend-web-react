export const makeRupiahValue = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 1,
  }).format(price);

export const transformDate = (date, dateStyle = "medium") =>
  Intl.DateTimeFormat("en-us", {
    dateStyle,
  }).format(new Date(date));
