import { FC } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { setYear } from "../../../../store/yearSlice";
import { START_YEAR, END_YEAR } from "../../../../consts/initialDateState";
import Button from "../../../../components/Button/Button";
import LeftArrow from "./Svg/LeftArrow";
import RightArrow from "./Svg/RightArrow";

const useStyles = createUseStyles({
  yearSelector: {
    display: "flex",
    gap: "20px"
  },
  button: {
    border: "none",
    padding: "5px",
    backgroundColor: "#6eeafa",
    cursor: "pointer",
    color: "black",
    fontSize: "26px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#32bccf",
    }
  },
  selectedYear: {
    margin: "0",
    alignSelf: "center",
    fontSize: "26px",
    color: "black"
  }
});

const YearSelector: FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selectedYear: number = useSelector((state: any) => state.year.year)

  const increaseYearValue = (endYear: number) => {
    if(selectedYear < (endYear - 1)) {
      dispatch(setYear(selectedYear + 1))
    }
  }

  const decreaseYearValue = (startYear: number) => {
    if(selectedYear > startYear) {
      dispatch(setYear(selectedYear - 1))
    }
  }

  return (
    <div className={classes.yearSelector}>
      <Button onClick={() => decreaseYearValue(START_YEAR)} className={classes.button} content={<LeftArrow/>}/>
      <p className={classes.selectedYear}>{selectedYear}</p>
      <Button onClick={() => increaseYearValue(END_YEAR)} className={classes.button} content={<RightArrow/>}/>
    </div>
  )
}

export default YearSelector
