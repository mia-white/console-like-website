// To avoid help command import loop, help command is excluded.

import Collection from "./Collection.js";

import clear from "../commands/clear.js";
import echo from "../commands/echo.js";
import id from "../commands/id.js";
import init from "../commands/init.js";
import login from "../commands/login.js";
import logout from "../commands/logout.js";
import nuko from "../commands/nuko.js";
import viewSources from "../commands/viewSources.js";


const commands = {
    clear,
    echo,
    id,
    init,
    login,
    logout,
    nuko,
    viewSources
};

export default class CommandData extends Collection {
    constructor() {
        super();
        this.init();
    }

    init() {
        for (const [k, v] of Object.entries(commands)) {
            super.set(k, v);
        }
    }

    getFromAlias(cmdName) {
        return super.find(cmd => {
            if (Array.isArray(cmd.options.alias)) {
                return cmd.options.alias.includes(cmdName);
            }
        });
    }

    hasAlias(cmdName) {
        if (this.getFromAlias(cmdName)) {
            return true;
        } else {
            return false;
        }
    }
}