import { useState } from "react";

import PropTypes from "prop-types";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/
const AddUser = (_props) => {
    const [changedUsername, setChangedUsername] = useState("");
    const [changedAge, setChangedAge] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            changedUsername.trim().length === 0 ||
            changedAge.trim().length === 0
        ) {
            return;
        }

        if (+changedAge < 1) {
            return;
        }

        console.log(changedUsername, changedAge);
        setChangedUsername("");
        setChangedAge("");
    };

    const usernameChangeHandler = (e) => {
        setChangedUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setChangedAge(e.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    onChange={usernameChangeHandler}
                    value={changedUsername}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    onChange={ageChangeHandler}
                    value={changedAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

AddUser.propTypes = {
    name: PropTypes.any,
};

export default AddUser;
