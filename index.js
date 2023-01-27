import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(captura =>
  ({ // o ( é para informar q o { é de objeto e não de função
    // aqui o [ indica q o conteúdo será utilizado como chave do objeto
    [captura[1]]: captura[2]
  })
  )
  return resultados;
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    // console.log(chalk.green(texto));
    console.log(extraiLinks(texto));
  } catch (erro) {
    trataErro(erro)
  }
}

pegaArquivo('./arquivos/texto.md');
// pegaArquivo('./arquivos/');



// regex
// capturar as expressoes em [] - \[[^[\]]*?\]
// capturar oq estiver entre () que seja link http/https - \(https?:\/\/[^\s?#.].[^\s]*\)
// expressao completa usando grupos - \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)