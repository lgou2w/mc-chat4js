"use strict";
/*
 * Copyright (C) 2016-Present The MoonLake (mcmoonlake@hotmail.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ChatClickEvent = /** @class */ (function () {
    function ChatClickEvent(action, value) {
        this.action = action;
        this.value = value;
    }
    return ChatClickEvent;
}());
exports.ChatClickEvent = ChatClickEvent;
var Action;
(function (Action) {
    Action["OPEN_URL"] = "OPEN_URL";
    Action["OPEN_FILE"] = "OPEN_FILE";
    Action["SUGGEST_COMMAND"] = "SUGGEST_COMMAND";
    Action["RUN_COMMAND"] = "RUN_COMMAND";
    Action["CHANGE_PAGE"] = "CHANGE_PAGE";
})(Action || (Action = {}));
exports.Action = Action;
var fromName = function (name) {
    if (!name || typeof name !== 'string')
        return undefined;
    switch (name.toUpperCase()) {
        case 'OPEN_URL':
            return Action.OPEN_URL;
        case 'OPEN_FILE':
            return Action.OPEN_FILE;
        case 'SUGGEST_COMMAND':
            return Action.SUGGEST_COMMAND;
        case 'RUN_COMMAND':
            return Action.RUN_COMMAND;
        case 'CHANGE_PAGE':
            return Action.CHANGE_PAGE;
        default:
            return undefined;
    }
};
exports.fromName = fromName;
//# sourceMappingURL=ChatClickEvent.js.map