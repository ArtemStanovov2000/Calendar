import { FC } from 'react';
import { createUseStyles } from "react-jss";
import { storeSyncer } from '../../storeSyncer/storeSyncer';
import { useDispatch } from 'react-redux';
import { setPage } from '../../store/pageSlice';
import Button from '../../components/Button/Button';

const PageBar: FC = () => {
  const useStyles = createUseStyles({
    bar: {
      height: `${968}px`,
      width: `${378}px`,
      backgroundColor: "#d1d3ff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    buttonBox: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginLeft: "5%"
    },
    button: {
      fontSize: "24px",
      marginBottom: "20px",
      border: "none",
      padding: "5px 20px",
      backgroundColor: "#f5ff8a",
      textTransform: "uppercase",
      cursor: "pointer",
      color: "black",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#ffeb8a",
      },
      "&:first-child": {
        marginTop: "20px",
      }
    }
  });

  const classes = useStyles()

  const saveStore = () => {
    storeSyncer.saveStore()
  }

  const dispatch = useDispatch()

  return (
    <section className={classes.bar}>
      <div className={classes.buttonBox}>
        <Button onClick={() => dispatch(setPage("calendar"))} className={classes.button} content="Календарь" />
        <Button onClick={() => dispatch(setPage("finance"))} className={classes.button} content="Финансы" />
      </div>
      <div className={classes.buttonBox}>
        <Button onClick={saveStore} className={classes.button} content="Сохранить" />
      </div>
    </section>
  );
}

export default PageBar
