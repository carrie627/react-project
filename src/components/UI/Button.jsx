import PropTypes from "prop-types";

import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            className={classes.button}
            type={props.type || "button"}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.any,
    children: PropTypes.any,
    onClick: PropTypes.any,
};

export default Button;
