import { FC } from 'react';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  financeMonth: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#4bd1a0",
    cursor: "pointer"
  },
  title: {
    color: "#000000",
    margin: "0",
    textAlign: "center",
    padding: "7px",
    backgroundColor: "#47bf93"
  },
  data: {
    display: "flex",
  },
  article: {
    width: "50%",
    backgroundColor: "#ff8f8f",
    "&:first-child": {
      backgroundColor: "#8fff93"
    }
  },
  articleTitle: {
    color: "#000000",
    margin: "0",
    textAlign: "center",
    padding: "10px",
  },
  value: {
    color: "#000000",
    margin: "0",
    textAlign: "center",
    fontSize: "20px",
    padding: "10px",
  },
  deficit: {
    backgroundColor: "#ff8f8f",
    color: "#000000",
    margin: "0",
    textAlign: "center",
    padding: "10px",
    fontSize: "20px"
  },
  surplus: {
    backgroundColor: "#8fff93",
    color: "#000000",
    margin: "0",
    textAlign: "center",
    padding: "10px",
    fontSize: "20px"
  }
});

type Props = {
  data: any,
  indexMonth: any
  isVisibleModalWindow: any
  indexYear: any
  setValue: any
}

const FinanceMonth: FC<Props> = ({ data, indexMonth, isVisibleModalWindow, indexYear, setValue }) => {
  const classes = useStyles()

  const setDate = () => {
    setValue({year: indexYear, month: indexMonth})
    isVisibleModalWindow(true)
  }

  const sum = data.finance.income - data.finance.expenses

  let backgroundColorSum = sum >= 0 ? classes.surplus : classes.deficit

  return (
    <section onClick={setDate} className={classes.financeMonth}>
      <h3 className={classes.title}>{data.month}</h3>
      <div className={classes.data}>
        <div className={classes.article}>
          <h4 className={classes.articleTitle}>Доходы</h4>
          <p className={classes.value}>{data.finance.income}</p>
        </div>
        <div className={classes.article}>
          <h4 className={classes.articleTitle}>Расходы</h4>
          <p className={classes.value}>{data.finance.expenses}</p>
        </div>
      </div>
      <p className={backgroundColorSum}>{sum}</p>
    </section>
  );
}

export default FinanceMonth
