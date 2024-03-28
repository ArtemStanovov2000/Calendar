import { FC } from 'react';
import { createUseStyles } from "react-jss";
import { useSelector } from 'react-redux';
import Header from './Header/Header';
import Calendar from '../../pages/Calendar/Calendar';
import Finance from '../../pages/Finance/Finance';

const PageWindow: FC = () => {
  const useStyles = createUseStyles({
    window: {
      height: `${968}px`,
      width: `${1512}px`,
      backgroundColor: "#a5f0d4"
    }
  });

  const classes = useStyles()

  const page = useSelector((state: any) => state.page.page)

  return (
    <section className={classes.window}>
      <Header />
      {page === "calendar" ? <Calendar /> : null}
      {page === "finance" ? <Finance /> : null}
    </section>
  );
}

export default PageWindow
