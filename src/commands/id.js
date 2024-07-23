export default {
    options: {
        name: "id",
        description: "show your session id",
        userOnly: true
    },
    run: (terminal, args) => {
        terminal.echo(terminal.get_token());
    }
}