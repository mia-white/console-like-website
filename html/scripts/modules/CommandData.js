import Collection from "./Collection.js";
import commands from "./allCommands.js";
import help from "../commands/help.js";

export default class CommandData extends Collection {
    constructor() {
        super();
        this.init();
    }

    init() {
        for (const [k, v] of Object.entries(commands)) {
            super.set(k, v);
        }

        super.set("help", help);
    }
}