import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';

let socket;

const UsersList = () => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        socket = io('http://localhost:4000/')
        socket.on('userList', (user) => {

            setUsers(user)
        })

    })


    return (
        <div>
            {users && users.map((person) => {
                return (
                    <li key={person.id}>{person.name}</li>
                )
            })}
        </div>
    );
}

export default UsersList;