const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('test_command_1')
    .setDescription('コマンド説明1'),
  async execute(interaction) {
    await interaction.reply(`${interaction.user.mention} さん、こんにちは！`);
  },
};