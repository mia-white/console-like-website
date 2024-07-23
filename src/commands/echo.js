export default {
    options: {
        name: "echo",
        description: "echooo",
        usage: "echo <contents>",
        cooldown: 10
    },
    run: (terminal, args) => {
        terminal.echo(args.join(" "));
    }
}