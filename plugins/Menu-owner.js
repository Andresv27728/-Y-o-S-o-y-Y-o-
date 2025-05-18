
let handler = async (m, { conn }) => {
    let totalPlugins = Object.values(global.plugins).filter(
        (v) => v.help && v.tags
    );
    
    let txt = '╭━━━〔 *LISTA DE COMANDOS* 〕━━━⬣\n';
    
    // Get unique tags
    let tags = {};
    totalPlugins.forEach(plugin => {
        if (plugin.tags) {
            let pluginTags = Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags];
            pluginTags.forEach(tag => {
                if (!(tag in tags)) tags[tag] = [];
                if (plugin.help) {
                    let helps = Array.isArray(plugin.help) ? plugin.help : [plugin.help];
                    helps.forEach(help => {
                        tags[tag].push(help);
                    });
                }
            });
        }
    });

    // Generate menu text
    Object.keys(tags).sort().forEach(tag => {
        txt += `\n┃━━━〔 *${tag.toUpperCase()}* 〕━━━\n`;
        tags[tag].forEach(help => {
            txt += `┃ ⬡ ${help}\n`;
        });
    });

    txt += '╰━━━━━━━━━━━━━━━━━━━━━━━⬣';

    const mensaje = `
*╭━━━━━━━━━⬣*
*┃ ✨ MENÚ COMPLETO*
*┃ 💖 Usuario: ${m.pushName}*
*┃ 🔰 Total Comandos: ${Object.values(totalPlugins).length}*
*╰━━━━━━━━━⬣*

${txt}

*╭━━━━━━━━━⬣*
*┃ Tiburón 🦈 BOT*
*╰━━━━━━━━━⬣*`;

    await conn.reply(m.chat, mensaje, m);
};

handler.help = ['menu3'];
handler.tags = ['owner'];
handler.command = ['menu3'];
handler.owner = true;

export default handler;
