import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*🌚 ingrese la URL de la imagen que desea convertir a escala de grises...*`;
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*🌚 tenga paciencia...*'}, {quoted: m});
try {
const response = await fetch(`https://www.canva.com/es_mx/funciones/convertir-imagen-escala-grises/?imageUrl=${encodeURIComponent(text)}`);
if (!response.ok) throw new Error('Network response was not ok');
const data = await response.json();
const imageUrl = data.imageUrl; // Asegúrate de que esto sea correcto
m.react('☑️');
await conn.sendMessage(m.chat, {image: {url: imageUrl}}, {quoted: m});
} catch (error) {
throw `Error: ${error.message}`;
}
}
handler.tags = ['tourl'];
handler.help = ['togris'];
handler.command = ['togris'];
export default handler;