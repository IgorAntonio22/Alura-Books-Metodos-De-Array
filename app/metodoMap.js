function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => { //tem chaves então precisa do return
        return {...livro, preco: livro.preco - (livro.preco * desconto)} /* com esses 3 pontos retornará uma cópia de todo o nosso array/objeto existente para um outro objeto ao invés de ser um atributo, o preco diz: porém eu vou precisar alterar o atributo preco dele */

    })
    return livrosComDesconto //retorna a variável aplicando o desconto
}