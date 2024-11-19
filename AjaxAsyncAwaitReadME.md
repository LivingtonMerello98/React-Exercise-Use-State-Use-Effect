Fetch Api con React AjaxAsyncAwaitComponent.js

 1. Creazione del componente e importazione su App.js

        function App() {
        return (
            <div className="App">
            <header className="App-header">
                < AjaxAsyncAwaitComponent />  //componente con fetch() 
            </header>
            </div>
        );
        }
2. su  AjaxAsyncAwaitComponent  utilizzare useState e useEffect

        import React, { useEffect, useState } from 'react'; *desrutturazione

        useState per destrutturare la variabile, e ottenere un array con
        2 parametri: lo stato attuale della var e lil metodo per aggiornarla
         
        const [users, setUsers] = useState([]);

3. scrivere la funzione per aggiornare la variabile, 
con l'utilizzo di async()=>{} funzione anonima asincrona.

    •creiamo una var dove verrà custodito un await fetch('API')

        const request = await fetch('https://reqres.in/api/users?page=1');

    •destrutturiamo il data che ci viene restituito nel json()

         const { data } = await request.json()
    
    •usiamo il metodo setUsers per aggiornare users con la variabile data
        
        setUsers(data)

4. iteriamo con un map sulla variabile users.
     
            {
                users.map(user => {
                    return <li key={user.id}>{user.first_name}</li>
                })
            }

Snippet completo: 

    
        import React, { useEffect, useState } from 'react'

        export const AjaxAsyncAwaitComponent = () => {

            const [users, setUsers] = useState([])

            const ajaxRequest = async () => {
                const request = await fetch('https://reqres.in/api/users?page=1');

                const { data } = await request.json()
                console.log(data)
                setUsers(data)
                console.log(users)
            }

            useEffect(() => {
                ajaxRequest()
            }, [])

            return (
                <div>
                    <span>ajax request with async await</span>
                    {
                        users.map(user => {
                            return <li key={user.id}>{user.first_name}</li>
                        })
                    }
                </div>
            )
        }

        export default AjaxAsyncAwaitComponent;