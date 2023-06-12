export const makeRupiahValue = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 1,
  }).format(price);

export const transformDate = (date) =>
  Intl.DateTimeFormat("en-gb", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
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

export const getSimpleName = (input, title) => {
  const raw = input?.split(" ") || "";

  if (title === "Responsible") {
    return raw[0];
  }

  if (raw?.length > 1) {
    return `${raw[0]} ${raw[1]}`;
  }

  return raw;
};
