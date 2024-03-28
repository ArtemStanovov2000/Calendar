import { FC } from 'react';
import { createUseStyles } from "react-jss";
import { currentDate } from '../../../consts/currentDate';

type Props = {
  index: number
  currentMonth: boolean
}

const useStyles = createUseStyles({
  day: {
    textAlign: "center",
    backgroundColor: "#ffea30",
    borderRadius: "4px",
    padding: "4px",
    color: "black"
  },
  thisDay: {
    textAlign: "center",
    backgroundColor: "#ff2f00",
    borderRadius: "4px",
    padding: "4px",
    color: "black"
  }
});

const Day: FC<Props> = ({ index, currentMonth }) => {
  const classes = useStyles()

  let classesDay = classes.day
  if (currentMonth === true && currentDate.day === index) {
    classesDay = classes.thisDay
  }

  return (
    <div className={classesDay}>{index}</div>
  );
}

export default Day
