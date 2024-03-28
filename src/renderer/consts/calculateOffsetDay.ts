import { createListDaysCountInMonths } from "./createListDaysCountInMonths"
import { calculateOffsetOnStartYear } from "./calculateOffsetOnStartYear"

export const calculateOffsetDay = (month: number, year: number) => {
    const listDaysCountInMonths = createListDaysCountInMonths(year)

    let lastDayCount = calculateOffsetOnStartYear(year)
    for (let i = 0; i < month; i++) {
        lastDayCount += listDaysCountInMonths[i]
    }
    const offset = lastDayCount % 7
    return offset
}