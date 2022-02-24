function store(){
    var nome = document.getElementById("cadNome").value;
    var sobrenome = document.getElementById("cadSobrenome").value;
    var cpf = document.getElementById("cadCPF").value;
    var cep = document.getElementById("cadCEP").value;
    var nascimento = document.getElementById("cadNascimento").value;
    var chave = document.getElementById("chave").value;

    const cadastro = {
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        cep: cep,
        nascimento: nascimento,
        chave: chave,
    }

    window.localStorage.setItem(chave,JSON.stringify(cadastro));
}

function returnKey(){ 
    console.log("return key");
    var chave = document.getElementById('returnKey').value;
    var cadastros = window.localStorage.getItem(chave);
    var linha = document.createElement("p");
    var informar = document.createTextNode(cadastros);
    linha.appendChild(informar);
    var elemento = document.getElementById("return");
    elemento.appendChild(linha);
}

function removeItem(){
    var chave = document.getElementById("removeKey").value;
    localStorage.removeItem(chave);
    console.log("remove items");
}

function clearStorage(){
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){
    document.getElementById("cadForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("returnButton").onclick = returnKey 
}
