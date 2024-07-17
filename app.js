//importando o módulo fs que é nativo do node para manipulação de arquivos
import fs from 'fs';

//criando uma variável que recebe o caminho do arquivo que será passado como argumento na linha de comando
const caminhoArquivo = process.argv;
//criando uma variável que recebe o conteúdo do arquivo que será lido
const link = caminhoArquivo[2];
//lendo o arquivo e exibindo o conteúdo no console
fs.readFile(link,'utf-8', (err, texto) => {
    quebraEmParagrafos(texto);
    // verificarPalavrasDuplicadas(texto);
});

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
//função que quebra o texto em parágrafos
function quebraEmParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap(paragrafo => {
        if(!paragrafo) return [];
        return verificarPalavrasDuplicadas(paragrafo);
    });
    console.log(contagem);
}
//função que limpa as palavras de caracteres especiais
function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}