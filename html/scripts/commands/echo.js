export default {
    options: {
        description: "echo",
        usage: "echo <contents>",
        cooldown: 10
    },
    run: (terminal, args) => {
        terminal.echo(args.join(" "));
    }
}