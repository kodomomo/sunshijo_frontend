const useToDay = (plusNum: number) => {
  let date = new Date();
  console.log(date.getDay());
  date = new Date(
    date.setDate(
      date.getDate() +
        plusNum +
        (date.getDay() == 0 ? 1 : -1 * (date.getDay() - 1))
    )
  );
  let datePlusFive = new Date();
  datePlusFive = new Date(
    datePlusFive.setDate(
      datePlusFive.getDate() +
        5 +
        plusNum +
        (date.getDay() == 0 ? 1 : -1 * (date.getDay() + 1))
    )
  );

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
