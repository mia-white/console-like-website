import commands from "./commands/allCommands.js";
import CooldownManager from "./modules/CooldownManager.js";

const commandsMap = new Map();
const Cooldown = new CooldownManager();

// register commands to commandsMap
for (const [cmdName, v] of Object.entries(commands)) {
    commandsMap.set(cmdName, v);
}

const options = {
    greetings: "my terminal",
    prompt: 'guest % '
}

const commandHandler = (command, terminal) => {
    // parse command
    const [cmdName, ...args] = command.split(" ");

    if (cmdName === "") return;

    if (commandsMap.has(cmdName)) {
        const cmd = commandsMap.get(cmdName);

        // cooldown
        if (cmd.options.cooldown) {
            if (Cooldown.has(cmdName)) {
                const remainCooldownTime = Cooldown.get(cmdName);
                terminal.echo(`command is not available now: please wait for ${remainCooldownTime} sec`);
                return;
            }

            Cooldown.add(cmdName, cmd.options.cooldown);
        }

        // run
        cmd.run(terminal, args);
    } else {
        terminal.echo(`command not found: ${cmdName}`);
    }
}

$("body").terminal(commandHandler, options);