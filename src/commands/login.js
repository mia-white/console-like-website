export default {
    options: {
        name: "login",
        description: "",
        usage: "login <user>"
    },
    run: (terminal, args) => {

        if (!args[0]) {
            terminal.echo("argument <user> is required");
            return;
        }

        terminal.set_mask("").read("Enter password: ").then(pass => {
            // $.getJSON(`https://cypress-incandescent-offer.glitch.me//api/v1/login/${args[0]}.${pass}`).then(data => {
            //     terminal.login((u, p, callback) => {
            //         if (!data.sessionId) return;

            //         callback(data.sessionId);
            //     })
            // });

            terminal.exec("clear");
            terminal.set_prompt(`${args[0]} % `);
            terminal.set_mask(false);
            terminal.echo("this is demo");
        });
    }
}