const { anuncios } = require('./anuncios');

(() => {
  const list = document.getElementById('anuncios');

  const getAnuncioTitle = (i) => {
    return `<h2>Anúncio ${i}</h2>`;
  };

  const getCorpoAnuncio = (anuncio) => {
    return `
      <div>${anuncio.nome}</div>
      <div>${anuncio.tamanho}</div>
      <div>${anuncio.descricao}</div>
    `;
  };

  const getAnuncioHTMLItem = (anuncio, i) => {
    return `
      <li>
        ${getAnuncioTitle(i)}
        ${getCorpoAnuncio(anuncio)}
      </li>
    `;
  };

  for (i in anuncios) {
    const anuncio = anuncios[i];

    list.insertAdjacentHTML(
      'beforeend',
      getAnuncioHTMLItem(anuncio, i),
    );
  }
})();
