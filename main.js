const key = 'c7be7e0c';
const btn = document.querySelector('.mostrarDados');
let filme = [];

btn.addEventListener('click', async function(){
    let filmName = document.querySelector('.filmName').value;
    let request = await requisicao(filmName);
    console.log(request);

    if (request.Response === 'False') {
        alert("Filme não encontrado");
    }
    else{
        objFilme = {
            Title: request.Title,
            Year: request.Year,
            Director: request.Director
        };
        listaHTML(objFilme);
        filme.push(objFilme);
    }
    console.log(filme);
})

async function requisicao(filmName){
    let request = await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${filmName}`);
    let data = request.json();
    console.log(data);

    return data;
}

function listaHTML(objFilme){
    let list = document.createElement('ul');
    let listTitle = document.createElement('li');
    listTitle.textContent = objFilme.Title;
    
    let listYear = document.createElement('li');
    listYear.textContent = objFilme.Year;

    let listDirector = document.createElement('li');
    listDirector.textContent = objFilme.Director;

    list.appendChild(listTitle);
    list.appendChild(listYear);
    list.appendChild(listDirector);

    document.body.appendChild(list);
}