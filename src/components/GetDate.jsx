const GetDate = ({ extraDay }) => {
  const date = new Date();
  date.setDate(date.getDate() + (extraDay ?? 0));

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }); // Dec
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export default GetDate;
