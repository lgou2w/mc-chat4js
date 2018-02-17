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

import {ChatComponent} from './ChatComponent';

class ChatHoverEvent {

    readonly action: Action;
    readonly value: ChatComponent;

    constructor(action: Action, value: ChatComponent) {
        this.action = action;
        this.value = value;
    }
}

enum Action {
    SHOW_TEXT = 'SHOW_TEXT',
    SHOW_ACHIEVEMENT = 'SHOW_ACHIEVEMENT',
    SHOW_ITEM = 'SHOW_ITEM',
    SHOW_ENTITY = 'SHOW_ENTITY',
}

let fromName = function (name: string): Action | undefined {
    if(!name || typeof name !== 'string')
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

export {
    ChatHoverEvent, Action, fromName
}
