export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap(paragrafo => {
        if(!paragrafo) return [];
        return verificarPalavrasDuplicadas(paragrafo);
    });
    return contagem;
}

//função que verifica palavras duplicadas
function verificarPalavrasDuplicadas(texto){
    //criando uma variável que recebe o texto do arquivo separado por espaços
    const listaPalavras = texto.split(' ');
    const resultado = {};
    //objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        //verifica se a palavra tem mais de 3 caracteres
        if(palavra.length >=3){
        const palavraLimpa = limpaPalavras(palavra);
        //se a palavra já existir no objeto, incrementa 1 no valor, se não, cria a propriedade com o valor 1
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    });
    return resultado;
}

//função que limpa as palavras de caracteres especiais
function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}
//função que extrai os parágrafos do texto
function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n');
}