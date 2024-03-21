import "./App.css";

import { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const handleAddUser = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    };

    return (
        <Fragment>
            <AddUser onAddUser={handleAddUser} />
            <UsersList users={usersList} />
        </Fragment>
    );
}

export default App;
