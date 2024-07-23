export default {
    options: {
        userOnly: true,
        description: "show your session id",
        usage: "id"
    },
    run: (terminal, args) => {
        terminal.echo(args.join(" "));
    }
}