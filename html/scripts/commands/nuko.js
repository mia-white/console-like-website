export default {
    options: {
        description: "nukooo!",
        usage: "nuko",
        cooldown: 2
    },
    run: terminal => {
        $.getJSON('https://api.thecatapi.com/v1/images/search').then(data => {
            terminal.echo(`[[@;;;;${data[0].url}]]`);
        });
    }
}