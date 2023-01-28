import chalk from 'chalk';

function extraiLinks(arrLinks) {
  return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function checaStatus(listaURLs) {
  // capacidade de receber uma lista de promessas, resolve-las e retornar
  const arrStatus = await Promise
    .all(
      listaURLs.map(async (url) => {
        try {
          const response = await fetch(url);
          // return response.status;
          return `${response.status} - ${response.statusText}`
        } catch (error) {
          return manejaErros(error);
        }
      })
    )
  return arrStatus;
}

function manejaErros(erro) {
  if (erro.cause.code === 'ENOTFOUND') {
    return 'link não encontrado';
  } else {
    return 'ocorreu algum erro';
  }
  // console.log(
  //   chalk.red('algo deu errado:'),
  //   chalk.black.bgGreen(erro)
  // );
}

export default async function listaValidada(listaDeLinks) {
  const links = extraiLinks(listaDeLinks);
  const status = await checaStatus(links);
  return listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice]
  }))
  // return status;
}


// const res = await fetch('https://api.belo.app/public/price');
// if (res.ok) {
//   const data = await res.json();
//   console.log(data);
// }
