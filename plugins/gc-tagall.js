const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `⇢=͟͟͞͞🄰νίऽ૭ : ${pesan}`;
  let teks = `▭ ㅤ  ꯭꯭𝗥𝗘𝗩𝗜𝗩𝗔𝗡     ̸ ❲ 寶貝 ❳ ₊  "\n  ⧼P̼⧽= ${participants.length} 𝗥𝗔𝗧𝗔𝗦\n\n ${oi}\n\n╭────────🚀───────𖥔  ᜒ𝅄\n`;
  for (const mem of participants) {
    teks += `│ ❏ᝰ. @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰─┐ • • •   -ˏˋ   ̸ ❲ 寶貝 ❳ ₊ˊˎ-  • • •
        ꒷︶︶꒷︶︶꒷꒦︶○꒷₊˚
        ;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos <mesaje>'];
handler.tags = ['grupo'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;