import dayjs from "dayjs";

export function generateYearDays() {

  const startOfYear = dayjs().startOf("year");
  const days = [];

  for (let i = 0; i < 365; i++) {
    days.push(startOfYear.add(i, "day").format("YYYY-MM-DD"));
  }

  return days;
}
export function generateMonthLabels() {

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  return months;

}