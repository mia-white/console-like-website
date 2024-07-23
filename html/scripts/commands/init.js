export default {
    options: {
        userOnly: true,
        description: "clear all local data from this terminal",
        usage: "init"
    },
    run: (terminal, args) => {
        terminal.echo(args.join(" "));
    }
}