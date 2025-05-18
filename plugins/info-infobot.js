import os from 'os'
import util from 'util'
import ws from 'ws';
import sizeFormatter from 'human-readable'
let MessageType =  (await import(global.baileys)).default

import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = gataMenu
//let grupos = [nna, nn, nnn, nnntt]
//let gata = [img5, img6, img7, img8, img9]
//let enlace = { contextInfo: { externalAdReply: {title: wm + ' ', body: 'support group' , sourceUrl: accountsgb, thumbnail: await(await fetch(gataMenu)).buffer() }}}
//let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: md, thumbnailUrl: await(await fetch(gataMenu)).buffer(), sourceUrl: accountsgb }}}
//let dos = [enlace, enlace2]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let old = performance.now()
  
  let neww = performance.now()
  let totaljadibot = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])]
  let speed = neww - old

let info = `╭━━━━[ ${gt} ]━━━━━⬣
┃➥ *𝐀𝐠𝐫𝐚𝐝𝐞𝐜𝐢𝐦𝐢𝐞𝐧𝐭𝐨𝐬 𝐚*
┃ღ *𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✿︎*𝐄𝐝𝐢𝐭𝐨𝐫/𝐂*
┃ꨄ︎*𝐀𝐝𝐫𝐢𝐚𝐧𝐎𝐟𝐢𝐜𝐢𝐚𝐥*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐒𝐨𝐜𝐢𝐚𝐥* 
┃ღ *${ig}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝐕𝐞𝐫𝐬𝐢𝐨𝐧*
┃ღ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐏𝐫𝐞𝐟𝐢𝐣𝐨*
┃ღ *${usedPrefix}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐂𝐡𝐚𝐭𝐬 𝐩𝐫𝐢𝐯𝐚𝐝𝐨𝐬*
┃ღ *${chats.length - groups.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐂𝐡𝐚𝐭𝐬 𝐠𝐫𝐮𝐩𝐚𝐥𝐞𝐬*
┃ღ *${groups.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐂𝐡𝐚𝐭𝐬 𝐭𝐨𝐭𝐚𝐥𝐞𝐬*
┃ღ *${chats.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐄𝐬𝐭𝐚𝐝𝐨 𝐚𝐜𝐭𝐢𝐯𝐨*
┃ღ *${uptime}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬*
┃ღ *${totalreg}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝*
┃ღ  *${speed}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐒𝐮𝐛-𝐁𝐨𝐭𝐬 𝐓𝐨𝐭𝐚𝐥𝐞𝐬*
┃ღ *${totaljadibot.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐀𝐮𝐭𝐨𝐫𝐞𝐚𝐝*
┃ღ ${autoread ? '*Activado ✔*' : '*Desactivado ✘*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *𝐑𝐞𝐬𝐭𝐫𝐢𝐜𝐭* 
┃ღ ${restrict ? '*Activado ✔*' : '*Desactivado ✘*'} 
┃
╰━━━[ 𝐂𝐨𝐦𝐞𝐦𝐞𝐧𝐭𝐨 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐯𝐨 ]━━⬣`
await conn.sendButton(m.chat, info, wm, pp, [
['𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐠𝐫𝐮𝐩𝐨𝐬', '#grupolista'],
['𝐂𝐮𝐞𝐧𝐭𝐚𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬', '/cuentasgb'],
['𝐌𝐞𝐧𝐮', '.menu']], null, [
['𝐓𝐡𝐞-𝐌𝐢𝐤𝐮𝐁𝐨𝐭-𝐌𝐃𝐕5', `${md}`]], fkontak)
//conn.sendFile(m.chat, gataImg, 'lp.jpg', info, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) 
/*let info = `
╭━━━━[ ${gt} ]━━━━━⬣
┃
┃➥ *CREADORA | CREATOR*
┃ღ *𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CONTACTO | CONTACT* 
┃ღ *${ig}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃𓃠 *VERSIÓN ACTUAL | VERSION*
┃ღ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *PREFIJO | PREFIX*
┃ღ *${usedPrefix}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CHATS PRIVADOS | PRIVATE CHAT*
┃ღ *${chats.length - groups.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CHATS DE GRUPOS | GROUP CHAT*
┃ღ *${groups.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CHATS EN TOTAL | TOTAL CHATS*
┃ღ *${chats.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *ACTIVIDAD | ACTIVITY*
┃ღ *${uptime}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *USUARIOS | USERS*
┃ღ *${totalreg}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *VELOCIDAD | SPEED*
┃ღ  *${speed}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *BOT SECUNDARIOS ACTIVOS | ACTIVE SECONDARY BACKS*
┃ღ *${totaljadibot.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *BATERIA | DRUMS*
┃ღ *${conn.battery ? `${conn.battery.value}%* *${conn.battery.live ? '🔌 Cargando...*' : '⚡ Desconectado*'}` : 'Desconocido*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *AUTOREAD*
┃ღ ${autoread ? '*Activado ✔*' : '*Desactivado ✘*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *RESTRICT* 
┃ღ ${restrict ? '*Activado ✔*' : '*Desactivado ✘*'} 
┃
╰━━━[ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ]━━⬣`.trim()

conn.sendHydrated(m.chat, info, wm, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙚𝙧 𝙂𝙧𝙪𝙥𝙤𝙨 | 𝙎𝙚𝙚 𝙂𝙧𝙤𝙪𝙥𝙨', '#grupolista'],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨', '/cuentasgb'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '.menu']
], m,)*/
//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot|infogata|informacióngata|informaciongata)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
