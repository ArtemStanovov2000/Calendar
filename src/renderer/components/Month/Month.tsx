import { FC } from 'react';
import { createUseStyles } from "react-jss";
import { currentDate } from '../../consts/currentDate';
import Day from './Day/Day';
import EmptyDay from './EmptyDay/EmptyDay';

type Props = {
  data: {
    month: string,
    emptyDay: Array<any>,
    days: Array<any>
  },
  currentYear: boolean
  index: number
}

const useStyles = createUseStyles({
  month: {
    paddingBottom: "10px",
    backgroundColor: "#4bd1a0"
  },
  label: {
    textAlign: "center",
    margin: "0",
    padding: "7px",
    backgroundColor: "#47bf93"
  },
  dayBox: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr);",
    gap: "3px",
    padding: "10px"
  }
});


const Month: FC<Props> = ({ data, currentYear, index }) => {
  const classes = useStyles()

  let currentMonth = false
  if(currentYear === true && currentDate.month === index) {
    currentMonth = true
  }

  return (
    <div className={classes.month}>
      <h3 className={classes.label}>{data.month}</h3>
      <div className={classes.dayBox}>
        {data.emptyDay.map((element: string, index: number) => <EmptyDay key={index} />)}
        {data.days.map((element: string, index: number) => <Day currentMonth={currentMonth} key={index} index={index + 1}/>)}
      </div>
    </div>
  );
}

export default Month
