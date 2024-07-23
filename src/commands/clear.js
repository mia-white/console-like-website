export default {
    options: {
        name: "clear",
        description: "clean terminal"
    },
    run: terminal => {
        terminal.exec("clear");
    }
}