import CooldownManager from "./modules/CooldownManager.js";
import CommandData from "./modules/CommandData.js";
import help from "./commands/help.js";

const Cooldown = new CooldownManager();
const CommandsMap = new CommandData();
CommandsMap.set("help", help);

const commandHandler = (command, terminal) => {
    // parse command
    let [cmdName, ...args] = command.split(" ");

    if (cmdName === "") return;

    const alias = CommandsMap.getFromAlias(cmdName);

    if (CommandsMap.has(cmdName) || alias) {
        /* if command exists */
        const cmd = CommandsMap.get(cmdName) || alias;

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
        /* if command is not exists */
        terminal.echo(`command not found: ${cmdName}`);
    }
}

// register
$("body").terminal(commandHandler, {
    greetings: "Welcome to lu's terminal\nPlease enter help command\n",
    prompt: 'guest % '
});