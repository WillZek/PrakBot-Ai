let handler = async (m, { conn, text }) => {
   if (!text) return conn.reply(m.chat, '🧑‍💻 *¿Y EL TEXTO?*', m, rcanal)
     try {
                await conn.updateProfileStatus(text).catch(_ => _)
                conn.reply(m.chat, `✅️ LA INFO SE HA CAMBIADO EXITOSAMENTE!`, m, rcanal)
} catch {
       throw 'Well, Error Sis...'
     }
}
handler.help = ['nuevabiobot <teks>']
handler.tags = ['owner']
handler.command = ['nuevabiobot', 'setbotbot', 'setbiobot']
handler.owner = true

export default handler