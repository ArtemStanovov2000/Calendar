import { FC } from 'react';
import { createUseStyles } from "react-jss";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBudget } from '../../../store/dataSlice';
import { storeSyncer } from '../../../storeSyncer/storeSyncer';
import Button from '../../../components/Button/Button';

const useStyles = createUseStyles({
  modal: {
    position: "fixed",
    backgroundColor: "#9d65e5",
    top: "20%",
    left: "30%"
  },
  header: {
    display: "flex"
  },
  title: {
    color: "#000000",
    backgroundColor: "#8b49e3",
    margin: "0",
    padding: "8px",
    fontSize: "26px",
    display: "flex",
    flexGrow: "1",
    justifyContent: "center"
  },
  inputBlock: {
    display: "flex",
    padding: "25px",
    gap: "30px"
  },
  crossbutton: {
    border: "none",
    backgroundColor: "#8133e8",
    cursor: "pointer",

  },
  articleTitle: {
    color: "#000000",
    margin: "0",
    padding: "8px",
    fontSize: "30px",
    textAlign: "center",
    marginBottom: "15px"
  },
  article: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  cross: {
    fill: "#000000",
    width: "40px",
    height: "40px",
  },
  input: {
    border: "none",
    fontSize: "25px",
    width: "200px",
    padding: "7px",
    textAlign: "center"
  },
  button: {
    color: "#000000",
    padding: "8px",
    fontSize: "26px",
    textAlign: "center",
    margin: "25px",
    marginTop: "0",
    width: "458px",
    border: "none",
    backgroundColor: "#7dbaff",
    textTransform: "uppercase",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#499dfc",
    }
  }
});

type Props = {
  data: any
  isVisibleModalWindow: any
  defaultIvputValue: any
}

const ModalWindow: FC<Props> = ({data, isVisibleModalWindow, defaultIvputValue}) => {
  const classes = useStyles()

  const [incomeValue, setIncomeValue] = useState(defaultIvputValue.income)
  const [expensesValue, setExpensesValue] = useState(defaultIvputValue.expenses)

  const dispatch = useDispatch()

  const onSaveButtonClick = () => {
    const dataBudget = {
      date: data,
      income: incomeValue,
      expenses: expensesValue
    }
    dispatch(setBudget(dataBudget))
    storeSyncer.saveStore()
  }

  const getIncomeValue = (value: string) => {
    let string = value.replace(/[^0-9.]+/g, '')
    const number = Number(string)
    if(number < 1000000) {
      setIncomeValue(Number(string))
    }
  }

  const getExpensesValue = (value: string) => {
    let string = value.replace(/[^0-9.]+/g, '')
    const number = Number(string)
    if(number < 1000000) {
      setExpensesValue(Number(string))
    }
  }

  const cross: JSX.Element = <svg className={classes.cross} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd" />
  </svg>

  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <p className={classes.title}>Ввести данные</p>
        <Button onClick={() => isVisibleModalWindow(false)} className={classes.crossbutton} content={cross} />
      </div>
      <div className={classes.inputBlock}>
        <div className={classes.article}>
          <p className={classes.articleTitle}>Доходы</p>
          <input value={incomeValue} onChange={e => getIncomeValue(e.target.value)} className={classes.input} />
        </div>
        <div className={classes.article}>
          <p className={classes.articleTitle}>Расходы</p>
          <input value={expensesValue} onChange={e => getExpensesValue(e.target.value)} className={classes.input} />
        </div>
      </div>
      <Button onClick={onSaveButtonClick} className={classes.button} content={"Сохранить"} />
    </div>
  );
}

export default ModalWindow
