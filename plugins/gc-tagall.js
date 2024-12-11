const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = ` ⇢=͟͟͞͞𝗔𝚟𝚒𝚜𝚘 :  :  : ${pesan}`;
  let teks = `. • ◣   ꯭꯭𝐀 𝐂 𝐓 𝐈 𝐕 𝐄 𝐍  ❲ ꔋ𝝤𝖣𝝤𝗦 貝 ❳ ₊     \n  ⧼P̼⧽= ${participants.length} \n\n ${oi}\n\n╭────────🚀───────𖥔  ᜒ𝅄  ᜒ𝅄\n`;
  for (const mem of participants) {
    teks += `│ ❏◢ •. @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰─┐ • • •   -ˏˋ   ̸ ❲  ╰─ · ❳ ₊ˊˎ-  • • •
. • ◣     ✝︎ *𝗣⃪᪼ۖ⃖𝐑𝗔̷̷͠𝐊 𝖡̶⃨͠𝐎𝗧ۚ𖬲็̹͛        ◢ • .
◖─────────────────𖥔`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos <mesaje>'];
handler.tags = ['grupo'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;