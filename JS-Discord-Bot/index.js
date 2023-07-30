const { Client, Intents, EmbedBuilder, GatewayIntentBits, ActivityType, Collection, SlashCommandBuilder } = require('discord.js'); // npm install discord.js
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers]});
const { TOKEN } = require('./TOKEN');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const commands = [];
const testCommand = require('./commands/test_command_1');
commands.push(testCommand.data.toJSON());


client.once('ready', () => {
  console.log(`${client.user.tag} (${client.user.id}) がログインしました。`); // Botがログインした際にメッセージを出力
});

client.on('messageCreate', async message => {
  if (message.author.bot) return; // Botからのメッセージを無視

  if (message.content === 'おはよう') { // ユーザーが「おはよう」と送信すると「〇〇さん、おはようございます！」と返信
    message.reply(`${message.author}さん、おはようございます！`);
  }
});

// 開発中 //
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'test') {
    await testCommand.execute(interaction);
  }
});

// クライアントを実行してDiscordに接続する
client.login(TOKEN);