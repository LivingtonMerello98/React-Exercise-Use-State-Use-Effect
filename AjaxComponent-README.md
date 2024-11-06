Fetch Api con React componente AjaxComponent.js

 1. Creazione del componente e importazione su App.js

        function App() {
        return (
            <div className="App">
            <header className="App-header">
                <AjaxComponent />  //componente con fetch() 
            </header>
            </div>
        );
        }

2. su AjaxComponent utilizzare useState e useEffect

        import React, { useEffect, useState } from 'react'

    useState per destrutturare la variabile, e ottenere un array con
    2 parametri: lo stato attuale della var e lil metodo per aggiornarla
         
         const [users, setUsers] = useState([]);

3. scrivere la funzione per aggiornare la variabile, con l utilizzo del 
   metodo  fetch a cui passiamo l'api.

   fetch() restituisce una promessa, quindi usiamo .then()
   una volta ottenuto il rsponse applichiamo il METODO .json() al response
   utilizzando un arrow function  .then(response => response.json())

   • controllare la struttura del JSON restituito con console.log(), i risultati
   interessati dovrebbero essere nel data

   una volta ottenuto il result applichiamo .then() nuovamente e gli passiamo 
   setUser riempondolo con result.data



        const usersAjaxPms = () => {
            fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(
                result =>{setUser(result.data)}
             )

        }

4. per riempire la variabile user al caricamento della pagina usiamo useEffect
     un metodo che prende 2 parametri:
     
     •1 funzione anonima che viene attivata quando avviene un cambiamento 
     nel componente

     •2 [] array vuoto se passato come parametro lo useEffect verrà eseguito soltanto una volta 

    nel primo parametro, ossia la funzione anonima scriviamo le funzioni che 
    vogliamo siano attivate al caricamento della pagina. in questo caso la funzione usersAjaxParams();

        useEffect(() => {
            usersAjaxPms();
            console.log(users)
        }, [])

5. a questo punto possiamo usare il map nello snippet html

        return (
            <div>
                <ol>
                    {/* ora che user contiene data possiamo applicare map */}
                    {users.map(user => {
                        return <li key={user.id}>{user.first_name}</li>
                    })}
                </ol>
            </div>
        )


Script completo:

        import React, { useEffect, useState } from 'react'

        export const AjaxComponent = () => {


            //valore di user con useState => []
            const [users, setUsers] = useState([]);

            const usersAjaxPms = () => {

                //metodo fetch con param APi
                fetch('https://reqres.in/api/users?page=1')

                    //ottengo response e applico metodo json
                    .then(response => response.json())


                    .then(result => {

                        //attribuiamo a user result.data
                        setUsers(result.data)
                    },
                        error => {
                            console.log(error)
                        })
            }

            useEffect(() => {
                usersAjaxPms();
                console.log(users)
            }, [])

            return (
                <div>
                    <ol>
                        {/* ora che user contiene data possiamo applicare map */}
                        {users.map(user => {
                            return <li key={user.id}>{user.first_name}</li>
                        })}
                    </ol>
                </div>
            )
        }

        export default AjaxComponent;