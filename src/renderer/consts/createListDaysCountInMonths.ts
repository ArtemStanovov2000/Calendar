export const createListDaysCountInMonths = (year: number) => {
    let countDaysInFebruary = 28
    if(year % 400 === 0) {
        countDaysInFebruary = 29
    } else if (year % 100 === 0) {
        countDaysInFebruary = 28
    } else if (year % 4 === 0) {
        countDaysInFebruary = 29
    } else {
        countDaysInFebruary = 28
    }
    const listDaysCountInMonths = [31, countDaysInFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return listDaysCountInMonths
}