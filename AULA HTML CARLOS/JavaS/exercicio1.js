function executar(event){
    event.preventDefault(); //impede o regarregamento da pagina

    const idade = parseInt(document.getElementById("idIdade").value);
    
    if(idade > 140) {
        alert("idade invalida, verifique...");
        return;

    }

    var resultado = document.getElementById("idResultado");

    if(idade >= 18)
        resultado.innerHTML = "<span style ='color: green'><b>Maior<br></span> de idade";
    else
        resultado.innerHTML = "<span style ='color: red '><b>Menor<br></span> de idade";
    

    

    
}

function resetar(){

    var resultado = document.getElementById("idResultado");
    resultado.textContent = "";
    resultado.innerHTML = "";

}