import { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    arrow: {
        height: "40px",
        width: "40px",
        fill: "black"
    }
});

const RightArrow: FC = () => {
    const classes = useStyles()

    return (
        <svg className={classes.arrow} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" />
        </svg>
    )
}

export default RightArrow
