const request = require('sync-request');
const fs = require('fs');

const pathAnunciosJS = __dirname + '/src/anuncios.js'

console.log('Buscando anúncios...')
const data = request(
    'GET',
    'https://gsapi.kelvins.cc/sheet/1C3q29lUSWjnHRORQgt3oANgiOBSjWQklBOcJ4o92uWY/anuncios'
);

console.log('capturando anúncios...');
const anuncios = JSON.parse(data.getBody('utf8')).data;

console.log(`criando arquivo ${pathAnunciosJS} se baseando na resposta da API`);
fs.writeFileSync(
    pathAnunciosJS,
`const anuncios = ${JSON.stringify(anuncios)};

module.exports = { anuncios };
`
);

console.log(`Arquivo ${pathAnunciosJS} gerado com sucesso!`);
