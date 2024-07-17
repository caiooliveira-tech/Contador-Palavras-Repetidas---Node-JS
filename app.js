//importando o módulo fs que é nativo do node para manipulação de arquivos
import fs from 'fs';

//criando uma variável que recebe o caminho do arquivo que será passado como argumento na linha de comando
const caminhoArquivo = process.argv;
//criando uma variável que recebe o conteúdo do arquivo que será lido
const link = caminhoArquivo[2];
//lendo o arquivo e exibindo o conteúdo no console
fs.readFile(link,'utf-8', (err, texto) => {
    console.log(texto);
});
console.log(link)