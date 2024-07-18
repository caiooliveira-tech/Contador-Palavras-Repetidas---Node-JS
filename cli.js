//importando o módulo fs que é nativo do node para manipulação de arquivos
import fs from 'fs';
import { contaPalavras } from './app.js';
import { montaSaidaArquivo } from './helpers.js';

//criando uma variável que recebe o caminho do arquivo que será passado como argumento na linha de comando
const caminhoArquivo = process.argv;
//criando uma variável que recebe o conteúdo do arquivo que será lido
const link = caminhoArquivo[2];
//criando uma variável que recebe o endereço onde o arquivo será salvo
const endereco = caminhoArquivo[3];
//lendo o arquivo e exibindo o conteúdo no console
fs.readFile(link,'utf-8', (err, texto) => {
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, endereco);

});

async function criaESalvaArquivo(listaPalavras, enderecoArquivo){
   const arquivoNovo = `${enderecoArquivo}/resultado.txt`;
   const textoPalavras = montaSaidaArquivo(listaPalavras);
   try{
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log('Arquivo salvo com sucesso!');
   }
    catch(erro){
         throw erro;
    }
 
}