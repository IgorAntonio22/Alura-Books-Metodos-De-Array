function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acumulador, livros) => acumulador + livros.preco, 0).toFixed(2) //esse 0 é o índice de onde ele deve começar a fazer a soma através do acumulador que vai percorrer o array somando o preço dos livros
}