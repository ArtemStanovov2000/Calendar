import { FC } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from "react-jss";
import { currentDate } from '../../consts/currentDate';
import Month from '../../components/Month/Month';

const useStyles = createUseStyles({
  yearBox: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr);",
    padding: "30px",
    gap: "30px"
  }
});

const Calendar: FC = () => {
  const classes = useStyles()

  const data: Array<any> = useSelector((state: any) => state.data.data)
  const selectedYear: number = useSelector((state: any) => state.year.year)
  let selectedYearData
  for (let i = 0; i < data.length; i++) {
    if (data[i].year === selectedYear) {
      selectedYearData = data[i]
    }
  }

  let currentYear = false
  if(selectedYearData.year === currentDate.year) {
    currentYear = true
  }

  return (
    <div className={classes.yearBox}>
      {selectedYearData.monthList.map((element: string, index: number) => <Month index={index} currentYear={currentYear} key={index} data={element}/>)}
    </div>
  );
}

export default Calendar
