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
    //recupero la ricetta
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    //estraggo la proprietà userId dalla ricetta
    const recipe = await recipeResponse.json();
    const userId = recipe.userId;
    //recupero le informazioni dello chef
    const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    //estraggo la data di nascita dello chef
    const chef = await chefResponse.json();
    const birthday = chef.birthday;
    //restituisco la data di nascita dello chef
    return birthday;
}
(async () => {
    const birthday = await getChefBirthday(1);
    console.log(birthday); // Stampa la data di nascita dello chef
})