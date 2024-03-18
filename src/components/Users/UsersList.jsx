import PropTypes from "prop-types";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
    console.log(props.users);
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => {
                    return (
                        <li key={user.id}>
                            {user.name} ({user.age} years old)
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
};

UsersList.propTypes = {
    users: PropTypes.any,
    id: PropTypes.any,
};

export default UsersList;
