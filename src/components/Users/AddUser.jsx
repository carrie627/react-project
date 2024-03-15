import PropTypes from "prop-types";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    console.log(props.name);

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" />
            <button type="submit">Add User</button>
        </form>
    );
};

AddUser.propTypes = {
    name: PropTypes.any,
};

export default AddUser;
