const {prefix} = require('../config.json');

module.exports = {
	name: 'beyondwiki',
    description: 'beyondwiki',
	execute(message) {
                message.channel.send(`\`${prefix}admission - Обзор всего процесса поступления
${prefix}essay
${prefix}fin
${prefix}int
${prefix}schooldoc
${prefix}stories
${prefix}tests
`)}
};