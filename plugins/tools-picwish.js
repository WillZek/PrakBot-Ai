// Código Creado Por Niño Piña Wa.me/50557865603
import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*👻 ingrese un enlace de imagen para eliminar el fondo*`;
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*👻 Eliminando fondo...*'}, {quoted: m});
try {
const response = await fetch('https://api.picwish.com/v1/background-removal', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': 'wxgbddf8ahvweahav' // Reemplaza con tu clave de API
},
body: JSON.stringify({
image: text // Aquí se espera que el texto sea un enlace de imagen
})
});
if (!response.ok) throw new Error('Network response was not ok');
const data = await response.json();
if (data.status !== 'success') throw new Error('Error en la eliminación de fondo');
const buffer = Buffer.from(data.result.image, 'base64'); // Asumiendo que la imagen viene en base64
m.react('✔️');
await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
} catch (error) {
console.error(error);
throw `*🚨 Lo Sentimos, ha ocurrido un error 😔*`;
}
}
handler.tags = ['tools'];
handler.help = ['eliminarfondo'];
handler.command = ['eliminarfondo', 'removerfondo'];
export default handler;