let amigos = [];

function adicionarAmigo() {
 
    let nomesInseridos = document.querySelector('input').value;

    if (nomesInseridos.trim() === "") {
        alert("Por favor, insira um nome válido."); 
        return; 
    }
    amigos.push(nomesInseridos);

    atualizarLista();

    document.querySelector('input').value = "";

    console.log(amigos);
}

function atualizarLista() {
    
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement('li'); 
        li.textContent = amigo; 
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione alguns nomes primeiro.");
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li> Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

    console.log(`Amigo sorteado: ${amigoSorteado}`);
}



