// Código Creado Por Niño Piña Wa.me/50557865603
import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
const args = text.split('|'); // Separa el texto en dos partes: nombre y URL
if (args.length < 2) throw `*👻 ingrese el nombre del logo y el enlace de la imagen en el formato: Nombre|URL*`;
const logoName = args[0].trim(); // Nombre del logo
const imageUrl = args[1].trim(); // URL de la imagen
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*👻 Generando Imagen*'}, {quoted: m});
try {
const response = await fetch(`https://eliasar-yt-api.vercel.app/editar-imagen?texto=${encodeURIComponent(logoName)}&url=${encodeURIComponent(imageUrl)}`);
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
handler.command = ['genearimg','imgg'];
export default handler;