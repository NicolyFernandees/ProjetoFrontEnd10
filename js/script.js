/*Eventos com addEventList*/ 

const entrada = document.getElementById('entrada'); /*variaveis entrada*/
const botao = document.getElementById('add'); /*variaveis adicionando*/
const lista = document.getElementById('lista'); /*variaveis saída*/

const itens = [];

botao.addEventListener('click', function(){
        let item =  entrada.value; /*testar se esta funcionando normalmente*/
        itens.push(item);
        entrada.value = ""; /*campo ficara limpo toda vez que alocar um item clicar no mouse*/

        console.log(itens); /*lista de vetores (arrays)*/ 

        saida(); /*mostrando os itens adicionados*/ 
    }
); /*dando um evento para o botao com parametros*/

function saida(){
    lista.innerHTML = ""; /*limpar a lista*/

    for(let i = 0; i < itens.length; i++){
        let li = document.createElement("li"); /*criando um elemento de lista para passar pro index*/
        li.textContent = itens[i]; /*input saida*/
        lista.appendChild(li); /*pegando a ul e lancado o li na função (filho), criando uma nova lista*/

    } /*Laço de repetição, adiciona na ul os itens automaticamente sem precisar atualizar a pag web*/ 

    
}


