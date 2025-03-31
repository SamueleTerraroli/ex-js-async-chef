/* 
In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef
Note del docente
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch
*/

async function getChefBirthday(id) {
    let recipeResponse;
    try {
        //recupero la ricetta
        recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!recipeResponse.ok) {
            throw new Error('Errore nel recupero della ricetta');
        }
        //estraggo la proprietà userId dalla ricetta
        const recipe = await recipeResponse.json();
        const userId = recipe.userId;

        //recupero le informazioni dello chef
        const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!chefResponse.ok) {
            throw new Error('Errore nel recupero delle informazioni dello chef');
        }
        //estraggo la data di nascita dello chef
        const chef = await chefResponse.json();
        const birthday = chef.birthDate;
        if (!chef.birthDate) {
            throw new Error('Data di nascita non disponibile');
        }

        //restituisco la data di nascita dello chef
        return { ...recipeResponse, birthday };
    }

    catch (error) {
        throw new Error(`${error.message}`);

    }
    finally {
        console.log('Richiesta completata'); // Messaggio finale
    }
}
(async () => {
    try {
        const birthday = await getChefBirthday(2);
        console.log(birthday); // Stampa la data di nascita dello chef
    }
    catch (error) {
        console.error('Errore:', error); // Gestione degli errori
    }
    finally {
        console.log('Operazione completata'); // Messaggio finale
    }
})();


