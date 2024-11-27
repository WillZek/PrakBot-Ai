// Código Hecho Por Niño Piña
// Suponiendo que esto es parte de un manejador de comandos de un bot
// Configuración del comando
handler.help = ['generarimg'];
handler.tags = ['ai'];
handler.command = /^generarimg$/i;
handler.estrellas = 1; // Asegúrate de que el nombre sea correcto
handler.register = true;
handler.handleCommand = async (texto) => {
const textoFormateado = encodeURIComponent(texto); // Formateamos el texto para la URL
const url = `https://eliasar-yt-api.vercel.app/editar-imagen?texto=${textoFormateado}%F0%9F%98%81`;
try {
const response = await fetch(url);
if (!response.ok) {
throw new Error('Error al generar la imagen');
}
const blob = await response.blob(); // Obtenemos la imagen como un blob
const imgUrl = URL.createObjectURL(blob); // Creamos una URL para el blob
// Aquí deberías enviar la imagen al chat o donde corresponda
console.log(`¡Imagen generada con éxito! Aquí está la URL: ${imgUrl}`);
// Implementa aquí la lógica para enviar imgUrl al chat
} catch (error) {
console.error('Error:', error);
// Manejo de errores, enviar mensaje de error al chat
// Implementa aquí la lógica para enviar un mensaje de error al chat
}
};
// Ejemplo de uso
const textoAGenerar = "CrowBot"; // Esto podría ser el texto que el usuario ingresa
handler.handleCommand(textoAGenerar);