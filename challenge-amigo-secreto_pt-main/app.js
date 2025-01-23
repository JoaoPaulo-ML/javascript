let amigos = [];

function adicionarAmigo() {
 
    let nomesInseridos = document.querySelector('input').value;

    if (nomesInseridos.trim() === "") {
        alert("Por favor, insira um nome válido."); 
        return; 
    }
    amigos.push(nomesInseridos);
    document.querySelector('input').value = "";
    console.log(amigos);
}

