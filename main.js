let apiKey = '0584564c0f3520766567d986ed2593e2';

async function listarFilmes(){
    
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    let response = await fetch(url);
    let json = await response.json();
    
    json.results.forEach(intem => {
        // criacao dos cards
        const conteiner = document.querySelector('.conteiner');
        const newElemento = document.createElement('div');
        newElemento.classList.add('cards')
        conteiner.append(newElemento)
        
        // criando a div img
        divImg = document.createElement('div');
        divImg.classList.add('img');
        newElemento.appendChild(divImg);
        
        img = document.createElement('img');
        img.loading = 'lazy';
        img.src = `https://image.tmdb.org/t/p/w500${intem.poster_path}`;
        divImg.appendChild(img);

        //Criando a div do titulo
        divTitle = document.createElement('div');
        divTitle.classList.add('title');
        newElemento.appendChild(divTitle);

        h1 = document.createElement('h1');
        h1.innerText = intem.title;
        divTitle.appendChild(h1);
    });
}
listarFilmes()