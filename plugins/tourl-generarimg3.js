// Código Creado Por Niño Piña Wa.me/50557865603
import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
// Verificamos que el usuario haya ingresado un texto
if (!text) throw `*🧑‍💻 Ingresa un texto para generar tu imagen a tu gusto*`;
// Mostramos un emoji de reloj mientras generamos la imagen
m.react('🕒');
await conn.sendMessage(m.chat, {text: '*🧑‍💻 Espere, Estamos Trabajando en su imagen*'}, {quoted: m});
try {
// Hacemos la solicitud a la nueva API con la clave API
const apiKey = 'api_endpoint_here'; // Reemplaza con tu clave API real
const response = await fetch(`https://api.dynapictures.com/designs/${apiKey}`);
// Verificamos si la respuesta fue exitosa
if (!response.ok) throw new Error('Network response was not ok');
// Obtenemos el buffer de la imagen
const buffer = await response.buffer();
// Mostramos un emoji de éxito
m.react('✔️');
// Enviamos la imagen generada al chat
await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
} catch (error) {
console.error(error);
throw `*🚨 Lo sentimos, ha ocurrido un error 😔*`;
}
}
// Definimos las etiquetas y comandos para el handler
handler.tags = ['tools'];
handler.help = ['genearimg3'];
handler.command = ['genearimg3', 'imgg3'];
// Exportamos el handler
export default handler;