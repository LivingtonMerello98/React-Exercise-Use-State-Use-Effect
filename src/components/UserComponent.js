import React, { useEffect, useState } from 'react'

export const UserComponent = () => {

    const [users, setUser] = useState([]);

    const updateUsers = () => {
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(result => {
                setUser(result.data)
            })
    }

    useEffect(() => {
        updateUsers()
    }, [])

    return (
        <div>
            <h1>users</h1>
            <ol>
                {users.map(user => {
                    return <li key={user.id}>{user.first_name}</li>
                })}
            </ol>

        </div>
    )
}

export default UserComponent