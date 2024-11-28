import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*💛 Espere un momento...*'}, {quoted: m});
try {
const response = await fetch('https://eliasar-yt-api.vercel.app/api/freefire/random');
if (!response.ok) throw new Error('Network response was not ok');
const data = await response.json();
const imageUrl = data.url; // Asumiendo que la URL de la imagen está en la propiedad 'url'
m.react('☑️');
await conn.sendMessage(m.chat, {image: {url: imageUrl}}, {quoted: m});
} catch (error) {
console.error(error);
throw `Error...`;
}
}
handler.tags = ['tourl'];
handler.help = ['allff'];
handler.command = ['allff'];
export default handler;