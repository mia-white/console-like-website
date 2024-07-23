export default {
    options: {
        name: "nuko",
        description: "nukooo!",
        cooldown: 2
    },
    run: terminal => {
        $.getJSON("https://api.thecatapi.com/v1/images/search").then(data => {
            terminal.echo(`[[@;;;;${data[0].url}]]`);
        });
    }
}