function filtraOcorrencias(paragrafo){
   const filtradas =  Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
   return filtradas;
}

function montaSaidaArquivo(listaPalavras){
    let textoFinal = '';
    listaPalavras.forEach((paragrafo,indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(',  ');
        if(duplicadas)
        textoFinal += `palavras duplicadas no paragrafo ${indice + 1}: ${duplicadas}\n`;
    });


    return textoFinal;
}

export { montaSaidaArquivo };