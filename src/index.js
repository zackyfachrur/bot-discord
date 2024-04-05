const { Client, IntentsBitField, MessageMentions } = require("discord.js");
const ytdl = require('ytdl-core');
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.DirectMessages,
  ],
});

const prefix = '!';

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'play') {
    if (!message.member.voice.channel) {
      return message.reply('Kamu harus berada di voice channel!');
    }

    const connection = await message.member.voice.channel.join();

    if (args.length === 0) {
      return message.reply('Tolong masukkan Alamat Link Youtube dengan benar!');
    }

    const url = args[0];
    const stream = ytdl(url, { filter: 'audioonly' });
    const dispatcher = connection.play(stream);

    dispatcher.on('finish', () => {
      message.member.voice.channel.leave();
    });
  }
});



client.on("messageCreate", (message) => {
  const content = message.content.toLowerCase();

  if (rasis.includes(content)) {
    message.reply("Rasis parah menn")
  }

  if (names.includes(content)) {
    message.reply("Wazzup");
  };

  if (toxic.includes(content)) {
    message.reply("Toxic parah euyy");
  };

  if (kasar.includes(content)) {
    message.reply("Jangan toxic atuh euyy");
  };

  if (harom.includes(content)) {
    message.reply("Jangan kasar atuhhh euyy")
  };
  
});

client.login(
  "Discord Token Anda"
);

let rasis = [
  "N",
  "n",
  "Nigg",
  "nigg",
  "nig",
  "Nig",
  "ni",
  "Ni",
  "nigga",
  "Nigga",
  "Nigger",
  "nigger",
];

let names = [
  "Agung",
  "agung",
  "gung",
  "Gung",
  "king",
  "King",
  "paduka",
  "Paduka",
  "Lord",
  "lord",
];

let toxic = [
  "bangsat",
  "Bangsat",
  "pepek",
  "Pepek",
  "memek",
  "Memek",
  "fuck",
  "Fuck",
  "ngentod",
  "Ngentod",
  "ngentot",
  "Ngentot",
  "bangsad",
  "Bangsad",
  "Puki",
  "puki",
  "Anjg",
  "anjg",
  "Anjig",
  "anjig",
  "Anjing",
  "anjing",
  "Kintil",
  "kintil",
  "Kuntul",
  "kuntul",
  "Kontol",
  "kontol",
  "kontl",
  "Kontl",
  "tai",
  "Tai",
  "ajg",
  "Ajg",
  "bgst",
  "Bgst",
  "bgsd",
  "Bgsd",
  "Ngntd",
  "ngntd",
];

let kasar = [
  "Agung bangsat",
  "agung bangsat",
  "agung Bangsat",
  "Agung Bangsat",
  "Agung pepek",
  "Agung Pepek",
  "agung Pepek",
  "agung pepek",
  "Agung memek",
  "Agung Memek",
  "agung Memek",
  "agung memek",
  "Agung fuck",
  "Agung Fuck",
  "agung Fuck",
  "agung fuck",
  "Agung ngentod",
  "Agung Ngentod",
  "agung Ngentod",
  "agung ngentod",
  "Agung ngentot",
  "Agung Ngentot",
  "agung Ngentot",
  "agung ngentot",
  "Agung bangsad",
  "Agung Bangsad",
  "agung Bangsad",
  "agung bangsad",
  "Agung puki",
  "Agung Puki",
  "agung Puki",
  "agung puki",
  "Agung anjg",
  "Agung Anjg",
  "agung Anjg",
  "agung anjg",
  "Agung anjig",
  "Agung Anjig",
  "agung Anjig",
  "agung anjig",
  "Agung anjing",
  "Agung Anjing",
  "agung Anjing",
  "agung anjing",
  "Agung kintil",
  "Agung Kintil",
  "agung Kintil",
  "agung kintil",
  "Agung kuntul",
  "Agung Kuntul",
  "agung Kuntul",
  "agung kuntul",
  "Agung tai",
  "Agung Tai",
  "agung Tai",
  "agung tai",
  "ajg Agung",
  "ajg agung",
  "Ajg Agung",
  "Ajg agung",
];

let harom = [
  "bangsat Agung",
  "bangsat Agung",
  "Bangsat agung",
  "Bangsat agung",
  "pepek Agung",
  "Pepek Agung",
  "Pepek agung",
  "pepek agung",
  "memek Agung",
  "Memek Agung",
  "Memek agung",
  "memek agung",
  "fuck Agung",
  "Fuck Agung",
  "Fuck agung",
  "fuck agung",
  "ngentod Agung",
  "Ngentod Agung",
  "Ngentod agung",
  "ngentod agung",
  "ngentot Agung",
  "Ngentot Agung",
  "Ngentot agung",
  "ngentot agung",
  "bangsad Agung",
  "Bangsad Agung",
  "Bangsad agung",
  "bangsad agung",
  "puki Agung",
  "Puki Agung",
  "Puki agung",
  "puki agung",
  "anjg Agung",
  "Anjg Agung",
  "Anjg agung",
  "anjg agung",
  "anjig Agung",
  "Anjig Agung",
  "Anjig agung",
  "anjig agung",
  "anjing Agung",
  "Anjing Agung",
  "Anjing agung",
  "anjing agung",
  "kintil Agung",
  "Kintil Agung",
  "Kintil agung",
  "kintil agung",
  "kuntul Agung",
  "Kuntul Agung",
  "Kuntul agung",
  "kuntul agung",
  "tai Agung",
  "Tai agung",
  "Tai Agung",
  "tai agung",
  "Agung Ajg",
  "agung ajg",
  "Agung ajg",
  "agung Ajg",
];
