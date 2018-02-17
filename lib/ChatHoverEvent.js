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
var ChatHoverEvent = /** @class */ (function () {
    function ChatHoverEvent(action, value) {
        this.action = action;
        this.value = value;
    }
    return ChatHoverEvent;
}());
exports.ChatHoverEvent = ChatHoverEvent;
var Action;
(function (Action) {
    Action["SHOW_TEXT"] = "SHOW_TEXT";
    Action["SHOW_ACHIEVEMENT"] = "SHOW_ACHIEVEMENT";
    Action["SHOW_ITEM"] = "SHOW_ITEM";
    Action["SHOW_ENTITY"] = "SHOW_ENTITY";
})(Action || (Action = {}));
exports.Action = Action;
var fromName = function (name) {
    if (!name || typeof name !== 'string')
        return undefined;
    switch (name.toUpperCase()) {
        case 'SHOW_TEXT':
            return Action.SHOW_TEXT;
        case 'SHOW_ACHIEVEMENT':
            return Action.SHOW_ACHIEVEMENT;
        case 'SHOW_ITEM':
            return Action.SHOW_ITEM;
        case 'SHOW_ENTITY':
            return Action.SHOW_ENTITY;
        default:
            return undefined;
    }
};
exports.fromName = fromName;
//# sourceMappingURL=ChatHoverEvent.js.map