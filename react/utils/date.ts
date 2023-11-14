/**
 * ! need to be refactored
 */

export interface DateType {
  year: number;
  month: number;
  date?: number;
  day?: number;
}

export const today: DateType = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  date: new Date().getDate(),
  day: new Date().getDay(),
};

export const getDateSeparate = (data: string) => {
  const [year, month, date] = data.split("-") as string[];

  const day = new Date(Number(year), Number(month) - 1, Number(date)).getDay();

  return { year, month, date, day };
};

export const getMonthlyDate = (year: number, month: number) => {
  const lastDate: number = new Date(year, month, 0).getDate();
  const firstDay: number = new Date(year, month - 1, 1).getDay();
  const lastDay: number = new Date(year, month - 1, lastDate).getDay();

  // 날짜 변환 함수
  const dateList = new Array(lastDate).fill(null).map(
    (_, i): DateType => ({
      year: year,
      month: month,
      date: i + 1,
      day: new Date(year, month - 1, i + 1).getDay(),
    })
  );

  return { lastDate, firstDay, lastDay, dateList };
};

export const koreanTime = (createdTime: number | undefined) => {
  if (createdTime) {
    const newDate = new Date(createdTime);
    const item = new Intl.DateTimeFormat("ko-KR", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(newDate);
    const [year, month, date, half, time] = item.replaceAll(".", "").split(" ");
    const day = new Date(
      Number(year),
      Number(month) - 1,
      Number(date)
    ).getDay();

    return { date: `${year}-${month}-${date}`, time: `${half} ${time}`, day };
  }
};

export const isFuture = (
  referncePoint: string | DateType,
  target: DateType
) => {
  if (typeof referncePoint === "string") {
    const [year, month, date] = referncePoint.split("-");

    return (
      new Date(Number(year), Number(month) - 1, Number(date)).getTime() <
      new Date(target.year, target.month - 1, target.date).getTime()
    );
  }
  if (typeof referncePoint === "object") {
    return (
      new Date(
        referncePoint.year,
        referncePoint.month - 1,
        referncePoint.date
      ).getTime() <
      new Date(target.year, target.month - 1, target.date).getTime()
    );
  }
};

export const isPast = (referncePoint: string | DateType, target: DateType) => {
  if (typeof referncePoint === "string") {
    const [year, month, date] = referncePoint.split("-");

    return (
      new Date(Number(year), Number(month) - 1, Number(date)).getTime() >
      new Date(target.year, target.month - 1, target.date).getTime()
    );
  }
  if (typeof referncePoint === "object") {
    return (
      new Date(
        referncePoint.year,
        referncePoint.month - 1,
        referncePoint.date
      ).getTime() >
      new Date(target.year, target.month - 1, target.date).getTime()
    );
  }
};

export const isSameDate = (
  referncePoint: string | DateType,
  target: DateType
) => {
  if (typeof referncePoint === "string") {
    const [year, month, date] = referncePoint.split("-");

    return (
      new Date(Number(year), Number(month) - 1, Number(date)).getTime() ==
      new Date(target.year, target.month - 1, target.date).getTime()
    );
  }
  if (typeof referncePoint === "object") {
    return (
      new Date(
        referncePoint.year,
        referncePoint.month - 1,
        referncePoint.date
      ).getTime() ==
      new Date(target.year, target.month - 1, target.date).getTime()
    );
  }
};
