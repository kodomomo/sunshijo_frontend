const useToDay = () => {
  let date = new Date();
  let datePlusFive = new Date(date.setFullYear(date.getFullYear() + 4));

  let year_one = date.getFullYear();
  let year_two = datePlusFive.getFullYear();
  let month_one = ("0" + (date.getMonth() + 1)).slice(-2);
  let month_two = ("0" + (datePlusFive.getMonth() + 1)).slice(-2);
  let day_one = ("0" + date.getDate()).slice(-2);
  let day_two = ("0" + datePlusFive.getDate()).slice(-2);

  const toDay = year_one + "-" + month_one + "-" + day_one;
  const toDayPlusFive = year_two + "-" + month_two + "-" + day_two;

  return { toDay, toDayPlusFive };
};

export default useToDay;
