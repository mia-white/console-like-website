export default {
    options: {
        cooldown: 10
    },
    run: (terminal, args) => {
        terminal.echo(args[0]);
    }
}