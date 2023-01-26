import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  // caminho, encoding, função de callback realizada com o resultado do
  // readFile. essa função recebe 2 parametros: erro caso aconteça e 
  // o proprio contudo do arquivo
  fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
    console.log(chalk.green(texto));
  });
}

pegaArquivo('./arquivos/texto.md');














// console.log(chalk.blue('olá mundo!'));

// console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).');
// console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).');

// console.log(chalk.blue.bgWhite.bold('Alura'));

// //encadear métodos para colorir texto, cor de fundo e texto em negrito
// console.log(chalk.blue.bgWhite.bold('Alura'));
// //receber múltiplos argumentos
// console.log(chalk.blue('curso', 'de', 'Node.js'));
// //métodos aninhados
// console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));
// // uso de template strings e placeholders
// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);