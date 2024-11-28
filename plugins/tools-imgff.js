import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*💛 Ingresa el nombre del personaje de Free Fire que deseas obtener...*`;
m.react('🕒')
await conn.sendMessage(m.chat, {text: '*💛 Espere un momento...*'}, {quoted: m});
try {
const response = await fetch(`https://eliasar-yt-api.vercel.app/api/frefire/personaje?name=${encodeURIComponent(text)}`);
if (!response.ok) throw new Error('Network response was not ok');
const data = await response.json();
if (!data || !data.image) throw new Error('No se encontró la imagen');
const buffer = await fetch(data.image).then(res => res.buffer());
m.react('☑️')
await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
} catch (error) {
console.error(error);
throw `*🚨 Error al obtener la imagen...*`;
}
}
handler.tags = ['tools']
handler.help = ['imgff']
handler.command = ['imgff'];
export default handler;