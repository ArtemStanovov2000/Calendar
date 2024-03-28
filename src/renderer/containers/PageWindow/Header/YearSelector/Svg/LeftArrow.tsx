import { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    arrow: {
        height: "40px",
        width: "40px",
        fill: "black"
    }
});

const LeftArrow: FC = () => {
    const classes = useStyles()

    return (
        <svg className={classes.arrow} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" />
        </svg>
    )
}

export default LeftArrow
