//trata da movimentação do formulário
(function(){
    const botaoTranslate = document.querySelector(".button-activate-translate");
    const formContainer = document.getElementById("btn");
    const form = document.querySelector(".campo-inserir-dados");
    let active = false; //armazena o status do formulário
    //adiciona um evento para quando clicar, o formulário descer
    botaoTranslate.addEventListener("click", function(){
        //muda o valor do status dependendo do status atual
        active = active ? false : true;  
        if(active) {
            formContainer.style.transform = "translateY(300px)";
            formContainer.style.transition = "transform 1s ease-in-out"
            form.style.transform = "translateY(300px)";
            form.style.transition = "transform 1s ease-in-out"

        } else {
            formContainer.style.transform = "translateY(0)";
            form.style.transform = "translateY(0)";
        } 
    });
})();

// trata dos inputs do formulário
(function(){
    const nome = document.getElementById("aluno");
    const nota1 = document.getElementById("nota1");
    const nota2 = document.getElementById("nota2");
    const nota3 = document.getElementById("nota3");
    const nota4 = document.getElementById("nota4");
    const btn_submit = document.querySelector(".btn-submit");
    const btn_delete = document.querySelector(".btn-delete");
    const tabela = document.getElementById("tabela");

    //evento do botão de inserir nova linha
    btn_submit.addEventListener("click", function(event){
        event.preventDefault(); //impede o carregamento da página
        
        try {
            validarInputs(nome.value, nota1.value, nota2.value, nota3.value, nota4.value);
            const trList = tabela.querySelectorAll("tr");     
            tabela.innerHTML += createTableRow(trList.length, 
            nome.value,
            nota1.value,
            nota2.value,
            nota3.value,
            nota4.value,
            media(nota1.value, nota2.value, nota3.value, nota4.value));
            cleanInputs(nome, nota1, nota2, nota3, nota4);
        } catch(e) {
            alert(e.message);
        } 
    });
    //evento do botão de delete
    btn_delete.addEventListener("click", function(event){
        event.preventDefault(); //impede o carregamento da página
        cleanInputs(nome, nota1, nota2, nota3, nota4);
    });
})()

//retorna a média dos valores passados no input
function media(valor1, valor2, valor3, valor4) {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    valor3 = parseFloat(valor3);
    valor4 = parseFloat(valor4);   
    let media = (valor1 + valor2 + valor3 + valor4) / arguments.length;
    return media.toFixed(1); //retorna com duas casas decimais
}
    
//limpa os campos de input 
function cleanInputs(inputNome, input1, input2, input3, input4) {
    inputNome.value = "";
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
}

//verifica se os valores dos inputs são válidos
function validarInputs(nome, nota1, nota2, nota3, nota4) {
    //verifica se o nome é uma string
    if(!Number.isNaN(parseFloat(nome))) throw Error("Use apenas letras para o nome");
    //armazena apenas as notas em um array
    const notas = Array.from(arguments).slice(1, 5);
    //retorna true se satisfazer as condições, se for falso, o input não é um número ou não é menor que 10
    const isValid = notas.every(function(input){
        input = parseFloat(input);
        return typeof input === "number" && input <= 10  
    })
    if(!isValid) {
        throw Error("Apenas números ou números menores que 10");
    }
}
