import md5 from 'md5';

const publicKey = '499ece0c7f937404b1da5dcf2bd1fe66';
const privateKey = '';
const timestamp = Date.now();
const hash = md5(timestamp + privateKey + publicKey);

async function heros(limit, offset) {
  const uri = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=name&limit=${limit}&offset=${offset}&apikey=${publicKey}&hash=${hash}`;
  let response = await fetch(uri);
  response = response.json();
  return response;
}

export { heros };
