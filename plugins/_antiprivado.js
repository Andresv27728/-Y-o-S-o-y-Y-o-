export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
if (m.chat === 'id del canal ') return !0
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`🦈 *¡ALERTA DE INTRUSIÓN!*\n\n¡GRRR! @${m.sender.split`@`[0]}, has osado entrar en mis aguas privadas. Mi amo ha prohibido la caza en solitario.\n\n🌊 Si quieres sobrevivir, únete a nuestro cardumen principal:\n${gp1}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
