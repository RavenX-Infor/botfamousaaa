const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents, partials : ["CHANNEL","MESSAGE", "GUILD_MEMBER", "REACTION"]});
require("dotenv").config()
const prefix = "?";

module.exports = client

client.on("ready", () => {
    console.log(`${client.user.tag} est connectée !`)
    function randomStatus() {
        let status = ["Bot de The Famous", "Famous Alliances", "Les Famous domine !", "Je respecte les Famous car je suis leur esclave.."]
        let rstatus = Math.floor(Math.random() * status.length);

        client.user.setActivity(status[rstatus], {type: "PLAYING", name:"FAMOUSSSSSSS"});
    }; setInterval(randomStatus, 5000)

});



client.login(process.env.TOKEN);