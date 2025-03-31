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
    let recipe;
    try {
        //recupero la ricetta
        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);

        //estraggo la proprietà userId dalla ricetta
        recipe = await recipeResponse.json();
    } catch (error) {
        console.error(error);
        throw new Error(`Non recupero la ricetta con id ${id}`);
    }
    if (recipe.message) {
        throw new Error(recipe.message);
    }
    let chef;
    try {
        const userId = recipe.userId;

        //recupero le informazioni dello chef
        const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);

        //estraggo la data di nascita dello chef
        chef = await chefResponse.json();

    } catch (error) {
        console.error(error);
        throw new Error(`Non recupero lo chef con id ${id}`);
    }
    if (chef.message) {
        throw new Error(chef.message);
    }
    const birthday = chef.birthDate;

    //restituisco la data di nascita dello chef
    return birthday
}



(async () => {
    try {
        const birthday = await getChefBirthday(2);
        console.log("Data di nascita dello chef:", birthday); // Stampa la data di nascita dello chef
    }
    catch (error) {
        console.error('Errore:', error.message); // Gestione degli errori
    }
    finally {
        console.log('Operazione completata'); // Messaggio finale
    }
})();


