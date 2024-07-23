export default {
    options: {
        description: "",
        usage: "login <username>"
    },
    run: (terminal, args) => {
        const [username, passwd] = args;
        terminal.set_prompt(`${username} % `);

        if (terminal.get_token()) {
            terminal.echo("You are already logged in as ");
        }
    }
}