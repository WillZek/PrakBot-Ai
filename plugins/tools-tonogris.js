import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*🌚 ingrese la URL de la imagen que desea convertir a escala de grises...*`;
m.react('🕒')
await conn.sendMessage(m.chat, {text: '*🌚 tenga paciencia...*'}, {quoted: m});
try {
// Aquí se hace la petición a la API de Canva
const response = await fetch(`https://www.canva.com/es_mx/funciones/convertir-imagen-escala-grises/?imageUrl=${encodeURIComponent(text)}`);
if (!response.ok) throw new Error('Network response was not ok');
// Asumiendo que la API devuelve una URL de la imagen en escala de grises
const data = await response.json();
// Aquí deberías obtener la URL de la imagen gris, ajusta según la respuesta de la API
const imageUrl = data.imageUrl; // Cambia esto según la estructura de la respuesta
m.react('☑️')
await conn.sendMessage(m.chat, {image: {url: imageUrl}}, {quoted: m});
} catch {
throw `Error...`;
}
}
handler.tags = ['tourl']
handler.help = ['togris']
handler.command = ['togris'];
export default handler;