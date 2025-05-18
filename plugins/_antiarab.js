
let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner }) {

if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && !isAdmin && !isOwner) {
let forbidPrefixes = ['212', '265', '92', '91', '90', '62', '93', '97', '20']

for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply('👋 *Los números árabes no están permitidos en este grupo*\n\nSerás expulsado del grupo...', m.sender)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
return false
}}}

return true
}

export default handler
