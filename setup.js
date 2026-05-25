
const { SlashCommandBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('catalogue')
        .setDescription('Affiche le catalogue'),

    async execute(interaction) {

        await interaction.reply('Catalogue vide actuellement');
    }
};
