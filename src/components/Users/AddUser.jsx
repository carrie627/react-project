import PropTypes from "prop-types";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/
const AddUser = (_props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

AddUser.propTypes = {
    name: PropTypes.any,
};

export default AddUser;
