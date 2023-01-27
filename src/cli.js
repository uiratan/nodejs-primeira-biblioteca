import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from "./index.js";

const caminho = process.argv;

function imprimeLista(resultado, identificador = '') {
  console.log(
    chalk.yellow('lista de links do arquivo:'),
    chalk.black.bgGreen(identificador),
    resultado
  );
}

async function processaTexto(argumentos) {
  const caminho = argumentos[2];

  try {
    fs.lstatSync(caminho);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('arquivo ou diretório não existe');
      return;
    }
  }

  if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivo(caminho);
    imprimeLista(resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho);
    arquivos.forEach(async (nomeDeArquivo) => {
      const resultado = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
      imprimeLista(resultado, nomeDeArquivo);
    })
  }
}

processaTexto(caminho);