const formatDate = (date) => {

  try {
    const dateObject = new Date(date);
    const time = new Intl.DateTimeFormat("default", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    }).format(dateObject);
    const month = dateObject.toLocaleString("default", { month: "long" });
    const day = dateObject.getDate();

    return `${month} ${day} @ ${time}`;
  } catch (err) {
    throw new Error(err);
  }
};

export default formatDate;
