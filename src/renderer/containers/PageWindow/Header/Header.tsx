import { FC } from 'react';
import { createUseStyles } from "react-jss";
import YearSelector from './YearSelector/YearSelector';
import OnCurrenYear from './OnCurrenYear/OnCurrenYear';

const useStyles = createUseStyles({
  header: {
    height: "100px",
    width: "100%",
    backgroundColor: "#baf7f0",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    gap: "20px"
  }
});

const Header: FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.header}>
      <YearSelector/>
      <OnCurrenYear/>
    </section>
  );
}

export default Header
