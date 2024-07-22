// All commands
// To avoid help command import loop, help command is excluded.

import clear from "../commands/clear.js";
import echo from "../commands/echo.js";
import viewSources from "../commands/viewSources.js";

export default {
    clear,
    echo,
    viewSources
}