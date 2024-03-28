import { FC } from 'react';
import { createUseStyles } from "react-jss";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import FinanceMonth from '../../components/FinanceMonth/FinanceMonth';
import ModalWindow from './ModalWindow/ModalWindow';

const useStyles = createUseStyles({
  finance: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr);",
    padding: "30px",
    gap: "30px",
    position: "relative"
  }
});

const Finance: FC = () => {
  const classes = useStyles()

  const data: Array<any> = useSelector((state: any) => state.data.data)
  const selectedYear: number = useSelector((state: any) => state.year.year)
  let selectedYearData
  for (let i = 0; i < data.length; i++) {
    if (data[i].year === selectedYear) {
      selectedYearData = data[i]
    }
  }
  const [selectedMonth, setSelectedMonth] = useState({ year: 0, month: 0 })
  const [openModalWindow, setOpenModalWindow] = useState(false)

  let defaultIvputValue
  for (let i = 0; i < data.length; i++) {
    if (data[i].year === selectedMonth.year) {
      defaultIvputValue = data[i].monthList[selectedMonth.month].finance
    }
  }

  return (
    <section className={classes.finance}>
      {selectedYearData.monthList.map((element: string, index: number) => <FinanceMonth setValue={setSelectedMonth} isVisibleModalWindow={setOpenModalWindow} indexMonth={index} indexYear={selectedYear} key={index} data={element} />)}
      {openModalWindow ? <ModalWindow defaultIvputValue={defaultIvputValue} isVisibleModalWindow={setOpenModalWindow} data={selectedMonth}/> : null}
    </section>
  );
}

export default Finance
