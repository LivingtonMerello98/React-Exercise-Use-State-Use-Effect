import React, { useEffect, useState } from 'react'

export const AjaxAsyncAwaitComponent = () => {

    const apiUsers = 'https://reqres.in/api/users?page=1';

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await fetch(apiUsers)
            const { data } = await response.json()
            setUsers(data);
            console.log(users)
        }
        catch {
            console.error('error')
        }
    }

    useEffect(() => {
        console.log('applicativo avviato')

        setTimeout(() => {
            setLoading(false)
            fetchData()
        }, 3000)//3 secondi

    }, [])

    if (loading == true) {
        return <span>caricamento in corso...</span>
    } else {
        return (

            <div className='fetchComponent'>
                <h3>componente fetch con ajax</h3>
                <p>lista di users</p>
                <ol>
                    {users.map(user => {
                        return <li key={user.id}>{user.first_name}</li>
                    }
                    )}
                </ol>
            </div>
        )
    }
}

export default AjaxAsyncAwaitComponent;