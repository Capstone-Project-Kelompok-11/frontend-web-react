export const option = ["Update", "Delete", "Quiz"];

export const getBgColor = (key) => {
  if (key === "Update") {
    return "bg-success-70";
  }
  if (key === "Delete") {
    return "bg-danger-70";
  }
  if (key === "Quiz") {
    return "bg-primary-70";
  }
};
