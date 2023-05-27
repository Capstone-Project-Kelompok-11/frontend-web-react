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

export const getRandomBorderColor = () => {
  const colors = [
    "border-warning-50",
    "border-success-50",
    "border-danger-50",
    "border-dark-50",
    "border-primary-50",
    "border-secondary-50",
    // Add more color classes as needed
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
