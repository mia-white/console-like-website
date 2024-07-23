export default {
    options: {
        description: "clean terminal",
        usage: "clear"
    },
    run: terminal => {
        terminal.exec("clear");
    }
}