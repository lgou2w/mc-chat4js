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

class ChatClickEvent {

    readonly action: Action;
    readonly value: String;

    constructor(action: Action, value: String) {
        this.action = action;
        this.value = value;
    }
}

enum Action {
    OPEN_URL = 'OPEN_URL',
    OPEN_FILE = 'OPEN_FILE',
    SUGGEST_COMMAND = 'SUGGEST_COMMAND',
    RUN_COMMAND = 'RUN_COMMAND',
    CHANGE_PAGE = 'CHANGE_PAGE',
}

let fromName = function (name: string): Action | undefined {
    if(!name || typeof name !== 'string')
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

export  {
    ChatClickEvent, Action, fromName
}
