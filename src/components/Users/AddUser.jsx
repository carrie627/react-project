import { useState, useRef } from "react";

import PropTypes from "prop-types";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredUserName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (
            enteredUserName.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0).",
            });

            return;
        }

        props.onAddUser(enteredUserName, enteredAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    const handleButtonClick = () => {
        setError(null);
    };

    return (
        <>
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
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

AddUser.propTypes = {
    name: PropTypes.any,
    onAddUser: PropTypes.any,
};

export default AddUser;
