// Código Creado Por Niño Piña Wa.me/50557865603
import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*👻 ingrese el enlace de la imagen*`;
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*👻 Eliminando, Espere Un Momento...*'}, {quoted: m});
try {
const response = await fetch('https://api.picwish.com/v1/background-removal', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': 'wxgbddf8ahvweahav' // Reemplaza con tu clave de API
},
body: JSON.stringify({
image: text // No Quites Los Créditos😑
})
});
if (!response.ok) throw new Error('Network response was not ok');
const data = await response.json();
if (data.status !== 'success') throw new Error('Error en la eliminación de fondo');
const buffer = Buffer.from(data.result.image, 'base64'); // Que no quites los créditos😑
m.react('✔️');
await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
} catch (error) {
console.error(error);
throw `*🚨 Lo Sentimos, ha ocurrido un error 😔*`;
}
}
handler.tags = ['tools'];
handler.help = ['eliminarfondo'];
handler.command = ['eliminarfondo', 'removerfondo','picwish'];
export default handler;