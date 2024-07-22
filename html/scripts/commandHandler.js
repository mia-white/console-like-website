import CommandData from "./modules/CommandData.js";
import CooldownManager from "./modules/CooldownManager.js";

const commandsMap = new CommandData();
const Cooldown = new CooldownManager();

const options = {
    greetings: "Welcome to lu's terminal",
    prompt: 'guest % '
}

const commandHandler = (command, terminal) => {
    // parse command
    let [cmdName, ...args] = command.split(" ");

    if (cmdName === "") return;

    const alias = commandsMap.find(cmd => {
        if (Array.isArray(cmd.options.alias)) {
            return cmd.options.alias.includes(cmdName);
        }
    });

    if (commandsMap.has(cmdName) || alias) {
        const cmd = commandsMap.get(cmdName) || alias;

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

// register
$("body").terminal(commandHandler, options);