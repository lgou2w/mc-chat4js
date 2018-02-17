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

import {ChatStyle} from './ChatStyle';
import {ChatComponent} from './ChatComponent';

export abstract class ChatComponentAbstract implements ChatComponent {

    private style?: ChatStyle;
    private extras: ChatComponent[] = new Array<ChatComponent>(0);

    getStyle(): ChatStyle {
        if(this.style === undefined) {
            this.style = new ChatStyle();
            this.extras.forEach(value => value.getStyle().setParent(this.style));
        }
        return this.style;
    }

    setStyle(style?: ChatStyle): ChatComponent {
        this.style = style;
        this.extras.forEach(value => value.getStyle().setParent(this.style));
        return this;
    }

    getExtras(): ChatComponent[] {
        return this.extras;
    }

    getExtraSize(): number {
        return this.extras.length;
    }

    append(extra: ChatComponent): ChatComponent {
        extra.getStyle().setParent(this.style);
        this.extras.push(extra);
        return this;
    }
}
