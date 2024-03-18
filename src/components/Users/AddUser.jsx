import { useState } from "react";

import PropTypes from "prop-types";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [changedUsername, setChangedUsername] = useState("");
    const [changedAge, setChangedAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            changedUsername.trim().length === 0 ||
            changedAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }

        if (+changedAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0).",
            });

            return;
        }

        props.onAddUser(changedUsername, changedAge);
        setChangedUsername("");
        setChangedAge("");
    };

    const usernameChangeHandler = (e) => {
        setChangedUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setChangedAge(e.target.value);
    };

    const handleButtonClick = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={handleButtonClick}
                />
            )}
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
        </div>
    );
};

AddUser.propTypes = {
    name: PropTypes.any,
    onAddUser: PropTypes.any,
};

export default AddUser;
