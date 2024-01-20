import { DateType } from "./date";

function getWeekDates(inputDate: string) {
  // 주어진 날짜의 주 시작일(일요일)을 찾기
  const startOfWeek = new Date(inputDate);
  const [, , initialDate] = inputDate.split("-");
  startOfWeek.setDate(Number(initialDate) - startOfWeek.getDay());

  // 주의 날짜 배열 생성
  const weekDatesObj: DateType[] = [];
  const weekDatesStr: string[] = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startOfWeek);
    currentDate.setDate(startOfWeek.getDate() + i);
    const [year, month, date] = currentDate
      .toISOString()
      .split("T")[0]
      .split("-");
    const newDate = {
      year: Number(year),
      month: Number(month),
      date: Number(date),
      day: currentDate.getDay(),
    };
    weekDatesObj.push(newDate);
    weekDatesStr.push(currentDate.toISOString().split("T")[0]);
  }

  return [weekDatesStr, weekDatesObj];
}
