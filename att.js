// Exercícios Práticos - Arrays em JavaScript
// -------------------------------------------
// Objetivo: Praticar os métodos push, pop, shift, unshift, length e splice

// EXERCÍCIO 01 - Criando e exibindo um array
// Crie um array com três nomes e exiba o array e seu tamanho no console.
// Método sugerido: length
let nomes = ['Eliane', 'Ana', 'Maria'];
console.log(nomes);
console.log("O tamanho do Array nomes é: " + nomes.length);



// EXERCÍCIO 02 - Adicionando elementos ao final
nomes.push('Carla', 'Joana');
console.log(nomes);

// EXERCÍCIO 03 - Inserindo no início
nomes.unshift('Fernanda');
console.log(nomes);

// EXERCÍCIO 04 - Removendo o último
let nomeRemovidoUltimo = nomes.pop();
console.log("Nome removido: " + nomeRemovidoUltimo);
console.log(nomes);

// EXERCÍCIO 05 - Removendo o primeiro
let nomeRemovidoPrimeiro = nomes.shift();
console.log("Nome removido: " + nomeRemovidoPrimeiro);
console.log(nomes);

// EXERCÍCIO 06 - Removendo e adicionando elementos
let frutas = ['Maçã', 'Banana', 'Uva', 'Pera', 'Manga'];
frutas.splice(1, 2, 'Melancia', 'Kiwi');
console.log(frutas);

// EXERCÍCIO 07 - Exibindo o tamanho do array
console.log("O tamanho do array frutas é: " + frutas.length);

// EXERCÍCIO 08 - Criando um histórico de páginas
let historico = [];
historico.push('home', 'sobre', 'contato');
console.log(historico);

// EXERCÍCIO 09 - Removendo o último acesso do histórico
let paginaRemovida = historico.pop();
console.log("Saída da página: " + paginaRemovida);
console.log(historico);

// EXERCÍCIO 10 - Alterando elementos
let cores = ['Vermelho', 'Verde', 'Amarelo', 'Roxo'];
cores.splice(2, 1, 'Azul-Marinho');
console.log(cores);
