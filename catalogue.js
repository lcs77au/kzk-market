
const { SlashCommandBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping bot'),

    async execute(interaction) {

        await interaction.reply('Pong');
    }
};
