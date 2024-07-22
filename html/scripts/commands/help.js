import commands from "../modules/allCommands.js";

const getCommandList = () => {
    let i = 1;
    const commandList = ["    "];

    for (const k of Object.keys(commands)) {
        commandList.push(k);

        if (i !== Object.keys(commands).length) {
            commandList.push(", ");
        }

        if (i % 7 === 0) {
            commandList.push("\n    ");
            break;
        }

        i++;
    }

    return commandList.join("");
}

export default {
    options: {
        description: "help command",
        usage: "help <command name>"
    },
    run: (terminal, args) => {

        if (!args[0]) {
            const texts = [
                "All commands:",
                getCommandList()
            ];

            terminal.echo(texts.join("\n"));
            return;
        }

        
    }
}