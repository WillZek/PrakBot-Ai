import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*💛 ingrese una petición para generar una imagen con el texto...*`;
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*💛 Espere un momento...*'}, {quoted: m});
try {
const response = await fetch(`https://eliasar-yt-api.vercel.app/editar-imagen?texto=${encodeURIComponent(text)}`);
if (!response.ok) throw new Error('Network response was not ok');
const buffer = await response.buffer();
m.react('☑️');
await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
} catch (error) {
console.error(error);
throw `*🚨 Ocurrió un error al generar la imagen...*`;
}
}
handler.tags = ['tools'];
handler.help = ['genearimg'];
handler.command = ['genearimg','imgg'];
export default handler;