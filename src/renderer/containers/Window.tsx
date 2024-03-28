import { FC } from 'react';
import { createUseStyles } from "react-jss";
import PageBar from './PageBar/PageBar';
import PageWindow from './PageWindow/PageWindow';

const useStyles = createUseStyles({
  bar: {
    display: "flex"
  }
});

const Window: FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.bar}>
      <PageWindow/>
      <PageBar/>
    </section>
  );
}

export default Window
