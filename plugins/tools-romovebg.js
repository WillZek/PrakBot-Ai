import fs from "node:fs";
async function removeBg(imageURL) {
const formData = new FormData();
formData.append("size", "auto");
formData.append("image_url", imageURL);
const response = await fetch("https://api.remove.bg/v1.0/removebg", {
method: "POST",
headers: { "X-Api-Key": "pZoqmwkwmMSJAVdJFDnMgWB8" },
body: formData,
});
if (response.ok) {
return await response.arrayBuffer();
} else {
throw new Error(`${response.status}: ${response.statusText}`);
}
}
(async () => {
try {
const rbgResultData = await removeBg("https://www.remove.bg/example.jpg");
fs.writeFileSync("no-bg.png", Buffer.from(rbgResultData));
console.log("¡Fondo eliminado y guardado como no-bg.png!");
} catch (error) {
console.error("Error al eliminar el fondo:", error);
}
})();