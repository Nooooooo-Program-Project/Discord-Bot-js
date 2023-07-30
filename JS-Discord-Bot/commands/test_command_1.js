// ----------------------------------------

// Copyright (c) 2023 Nooooooo Program Project
// Licensed under the Apache License 2.0

// やり方は README.md をご確認ください。

// ----------------------------------------

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('test_command_1')
    .setDescription('コマンド説明1'),
  async execute(interaction) {
    await interaction.reply(`${interaction.user.mention} さん、こんにちは！`);
  },
};