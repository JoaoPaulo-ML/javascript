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


