import { createListDaysCountInMonths } from "./createListDaysCountInMonths"
import { monthListInYear } from "./monthListInYear"
import { calculateOffsetDay } from "./calculateOffsetDay"
export const START_YEAR = 1980
export const END_YEAR = 2080

const day = {
  value: 0
}

const createListDaysInMonth = (count: number) => new Array(count).fill(day);

export const initialDateState: any = []
for (let i = START_YEAR; i < END_YEAR; i++) {

  const monthList = createListDaysCountInMonths(i)
  const months: any = []

  for (let j = 0; j < monthList.length; j++) {

    const month = {
      month: monthListInYear[j],
      emptyDay: new Array(calculateOffsetDay(j, i)).fill(0),
      days: createListDaysInMonth(monthList[j]),
      finance: {
        income: 0,
        expenses: 0
      }
    }

    months.push(month)
  }

  const year = {
    year: i,
    monthList: months
  }

  initialDateState.push(year)
}



