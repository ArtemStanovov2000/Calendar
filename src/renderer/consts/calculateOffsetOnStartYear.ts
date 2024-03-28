import { createListDaysCountInMonths } from "./createListDaysCountInMonths"

export const calculateOffsetOnStartYear = (year: number) => {
    let daysCount = 0
    if (year >= 2024) {
        for (let i = 2024; i < year; i++) {
            const listDaysCountInMonths = createListDaysCountInMonths(i)
            daysCount += listDaysCountInMonths.reduce((a, b) => a + b, 0)
        }
        const offset = daysCount % 7
        return offset
    } else {
        for (let i = year; i < 2024; i++) {
            const listDaysCountInMonths = createListDaysCountInMonths(i)
            daysCount += listDaysCountInMonths.reduce((a, b) => a + b, 0)
        }
        const offset = 7 - daysCount % 7
        return offset
    }
}