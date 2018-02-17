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

import {ChatColor} from './ChatColor';
import {ChatClickEvent} from './ChatClickEvent';
import {ChatHoverEvent} from './ChatHoverEvent';

export class ChatStyle {

    private parent?: ChatStyle;
    color?: ChatColor;
    bold?: boolean;
    italic?: boolean;
    underlined?: boolean;
    strikethrough?: boolean;
    obfuscated?: boolean;
    clickEvent?: ChatClickEvent;
    hoverEvent?: ChatHoverEvent;
    insertion?: string;

    private getParent() {
        return this.parent || ROOT;
    }

    setParent(parent?: ChatStyle): ChatStyle {
        this.parent = parent;
        return this;
    };

    getColor(): ChatColor | undefined {
        return this.color || this.getParent().getColor();
    }

    setColor(color?: ChatColor): ChatStyle {
        this.color = color;
        return this;
    }

    getBold(): boolean | undefined {
        return this.bold || this.getParent().getBold();
    }

    setBold(bold?: boolean): ChatStyle {
        this.bold = bold;
        return this;
    }

    getItalic(): boolean | undefined {
        return this.italic || this.getParent().getItalic();
    }

    setItalic(italic?: boolean): ChatStyle {
        this.italic = italic;
        return this;
    }

    getUnderlined(): boolean | undefined {
        return this.underlined || this.getParent().getUnderlined();
    }

    setUnderlined(underlined?: boolean): ChatStyle {
        this.underlined = underlined;
        return this;
    }

    getStrikethrough(): boolean | undefined {
        return this.strikethrough || this.getParent().getStrikethrough();
    }

    setStrikethrough(strikethrough?: boolean): ChatStyle {
        this.strikethrough = strikethrough;
        return this;
    }

    getObfuscated(): boolean | undefined {
        return this.obfuscated || this.getParent().getObfuscated();
    }

    setObfuscated(obfuscated?: boolean): ChatStyle {
        this.obfuscated = obfuscated;
        return this;
    }

    getClickEvent(): ChatClickEvent | undefined {
        return this.clickEvent || this.getParent().getClickEvent();
    }

    setClickEvent(clickEvent?: ChatClickEvent): ChatStyle {
        this.clickEvent = clickEvent;
        return this;
    }

    getHoverEvent(): ChatHoverEvent | undefined {
        return this.hoverEvent || this.getParent().getHoverEvent();
    }

    setHoverEvent(hoverEvent?: ChatHoverEvent): ChatStyle {
        this.hoverEvent = hoverEvent;
        return this;
    }

    getInsertion(): string | undefined {
        return this.insertion || this.getParent().getInsertion();
    }

    setInsertion(insertion?: string): ChatStyle {
        this.insertion = insertion;
        return this;
    }

    isEmpty(): boolean {
        return !this.color &&
            !this.bold && !this.italic &&
            !this.strikethrough && !this.underlined &&
            !this.obfuscated && !this.clickEvent &&
            !this.hoverEvent && !this.insertion;
    }

    clone(): ChatStyle {
        let copy = new ChatStyle();
        copy.color = this.color;
        copy.bold = this.bold;
        copy.italic = this.italic;
        copy.strikethrough = this.strikethrough;
        copy.underlined = this.underlined;
        copy.obfuscated = this.obfuscated;
        copy.clickEvent = this.clickEvent;
        copy.hoverEvent = this.hoverEvent;
        copy.insertion = this.insertion;
        return copy;
    }
}

class Root extends ChatStyle {
    setParent(parent?: ChatStyle): ChatStyle {
        throw UnsupportedOperationException;
    }
    getColor(): ChatColor {
        return null;
    }
    setColor(color?: ChatColor): ChatStyle {
        throw UnsupportedOperationException;
    }
    getBold(): boolean | undefined {
        return false;
    }
    setBold(bold?: boolean): ChatStyle {
        throw UnsupportedOperationException;
    }
    getItalic(): boolean | undefined {
        return false;
    }
    setItalic(italic?: boolean): ChatStyle {
        throw UnsupportedOperationException;
    }
    getStrikethrough(): boolean | undefined {
        return false;
    }
    setStrikethrough(strikethrough?: boolean): ChatStyle {
        throw UnsupportedOperationException;
    }
    getUnderlined(): boolean | undefined {
        return false;
    }
    setUnderlined(underlined?: boolean): ChatStyle {
        throw UnsupportedOperationException;
    }
    getObfuscated(): boolean | undefined {
        return false;
    }
    setObfuscated(obfuscated?: boolean): ChatStyle {
        throw UnsupportedOperationException;
    }
    getClickEvent(): ChatClickEvent | undefined {
        return null;
    }
    setClickEvent(clickEvent?: ChatClickEvent): ChatStyle {
        throw UnsupportedOperationException;
    }
    getHoverEvent(): ChatHoverEvent | undefined {
        return null;
    }
    setHoverEvent(hoverEvent?: ChatHoverEvent): ChatStyle {
        throw UnsupportedOperationException;
    }
    getInsertion(): string | undefined {
        return null;
    }
    setInsertion(insertion?: string): ChatStyle {
        throw UnsupportedOperationException;
    }
    toString(): string {
        return "ChatStyle.ROOT";
    }
}

let UnsupportedOperationException = new Error('UnsupportedOperationException');

/**
 * Root for Chat Style.
 */
let ROOT = new Root();
