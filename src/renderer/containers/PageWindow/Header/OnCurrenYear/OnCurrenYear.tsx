import { FC } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { setYear } from "../../../../store/yearSlice";
import { currentDate } from "../../../../consts/currentDate";
import Button from "../../../../components/Button/Button";

const useStyles = createUseStyles({
  button: {
    border: "none",
    padding: "5px 20px",
    backgroundColor: "#6eeafa",
    textTransform: "uppercase",
    cursor: "pointer",
    color: "black",
    fontSize: "26px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#32bccf",
    }
  },
});

const OnCurrenYear: FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(setYear(currentDate.year))} className={classes.button} content={"На текущий год"}/>
  )
}

export default OnCurrenYear
