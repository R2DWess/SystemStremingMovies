import { createAtorCard, createFilmeCard, createGeneroCard, createRoteiristaCard } from "./createCard.js";

export function renderMovies(list_content, filmes){
    list_content.innerHTML = '';
    filmes.forEach((filme) => {
        const card = createFilmeCard(filme.titulo, filme.ano, filme.genero, filme.poster)
        list_content.appendChild(card);
    });
}

export function renderGenerosInAddForm(generosInAddForm, genero_selected_content){
    genero_selected_content.innerHTML = '';
    generosInAddForm.forEach((genero) => {
        const card = createGeneroCard(genero, generosInAddForm, genero_selected_content);
        genero_selected_content.appendChild(card);
    });
}

export function renderRoteiristasInAddForm(roteiristasInAddForm, roteirista_selected_content){
    roteirista_selected_content.innerHTML = '';
    roteiristasInAddForm.forEach((roteirista) => {
        const card = createRoteiristaCard(roteirista, roteiristasInAddForm, roteirista_selected_content);
        roteirista_selected_content.appendChild(card);
    });
}

export function renderAtoresInAddForm(atoresInAddForm, ator_selected_content){
    ator_selected_content.innerHTML = '';
    atoresInAddForm.forEach((ator) => {
        const card = createAtorCard(ator, atoresInAddForm, ator_selected_content);
        ator_selected_content.appendChild(card);
    });
}