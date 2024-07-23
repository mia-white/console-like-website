import CommandData from "../modules/CommandData.js";

const commands = new CommandData();

const getCommandList = () => {
    let i = 1;
    const commandList = ["    "];

    for (const k of commands.keys()) {
        commandList.push(k);

        if (i !== commands.size) {
            commandList.push(", ");
        }

        if (i % 7 === 0) {
            commandList.push("\n    ");
        }

        i++;
    }

    return commandList.join("");
}

export default {
    options: {
        name: "help",
        description: "help command",
        usage: "help | help <commandName>"
    },
    run: (terminal, args) => {

        if (!args[0]) {
            const texts = [
                "Command Name: help",
                "",
                "Usage:",
                "",
                "help              show all commands",
                "help <command>    show command's detailed description",
                "",
                "All commands:",
                "",
                getCommandList(),
                ""
            ];

            terminal.echo(texts.join("\n"));
            return;
        } else if (commands.has(args[0])) {
            const cmd = commands.get(args[0]);
            const texts = [
                `Command Name: ${args[0]}`,
                "",
                "Alias:",
                `    ${cmd.options.alias ? cmd.options.alias.join(", ") : "None"}`,
                "",
                "Usage:",
                `    ${cmd.options.usage || cmd.options.name}`,
                "",
                "Description:",
                `    ${cmd.options.description || "None"}`,
                "",
                "Cooldown:",
                `    ${cmd.options.cooldown || "None"} sec`,
                "",
                "UserOnly:",
                `    ${cmd.options.userOnly ? true : false}`,
                ""
            ]

            terminal.echo(texts.join("\n"));
        } else {
            terminal.echo(`Command is not exist: ${args[0]}`);
        }
    }
}