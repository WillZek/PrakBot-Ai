// Código Creado Por Niño Piña Wa.me/50557865603
import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
// Dividir el texto en partes para obtener el nombre del logo y la URL
const args = text.split(' ');
const logoText = args[0]; // Nombre del logo
const imageUrl = args[1]; // URL de la imagen
if (!logoText || !imageUrl) throw `*👻 ingrese el nombre del logo y la URL de la imagen*`;
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*👻 Generando Imagen*'}, {quoted: m});
try {
const response = await fetch(`https://eliasar-yt-api.vercel.app/editar-imagen?texto=${encodeURIComponent(logoText)}&url=${encodeURIComponent(imageUrl)}`);
if (!response.ok) throw new Error('Network response was not ok');
const buffer = await response.buffer();
m.react('✔️');
await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
} catch (error) {
console.error(error);
throw `*🚨 Lo Sentimos, ha ocurrido un error 😔*`;
}
}
handler.tags = ['tools'];
handler.help = ['genearimg'];
handler.command = ['genearimg', 'imgg'];
export default handler;