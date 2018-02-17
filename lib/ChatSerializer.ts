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
import {ChatColor} from './ChatColor';
import {ChatClickEvent, fromName as ClickActionFromName} from './ChatClickEvent';
import {ChatHoverEvent, fromName as HoverActionFromName} from './ChatHoverEvent';
import {ChatComponent} from './ChatComponent';
import {ChatComponentText} from './ChatComponentText';
import {ChatComponentTranslation} from './ChatComponentTranslation';
import {ChatComponentScore} from './ChatComponentScore';
import {ChatComponentSelector} from './ChatComponentSelector';
import {ChatComponentKeybind} from './ChatComponentKeybind';

export class ChatSerializer {

    static fromJson(json: any): ChatComponent {
        if(!json)
            throw new Error('The json object is undefined.');
        if(typeof json === 'string')
            json = JSON.parse(json)
        let serializer = new ChatComponentSerializer();
        return serializer.deserialize(json);
    }

    static toJson(component: ChatComponent): any {
        if(!component)
            throw new Error('The component object is undefined.');
        let serializer = new ChatComponentSerializer();
        return serializer.serialize(component);
    }

    static toJsonString(component: ChatComponent): string {
        let json = this.toJson(component);
        if(json === undefined)
            return undefined;
        return JSON.stringify(json);
    }

    static fromRaw(raw?: string): ChatComponent {
        if(!raw || raw.length === 0)
            return new ChatComponentText('');
        return new RawMessage(raw).get();
    }

    static fromRawOrNull(raw?: string): ChatComponent | undefined {
        if(!raw || raw.length === 0)
            return undefined;
        return this.fromRaw(raw);
    }

    static toRaw(component: ChatComponent, color?: boolean): string {
        let array = [];
        this.toRaw0(component, color || false, array);
        return array.join('');
    }

    private static toRaw0(component: ChatComponent, color: boolean, array: string[]) {
        if(typeof color === 'boolean' && color === true) {
            let style = component.getStyle();
            if(style.color !== undefined)
                array.push(style.color.toString());
            if(style.bold !== undefined)
                array.push(ChatColor.BOLD.toString());
            if(style.italic !== undefined)
                array.push(ChatColor.ITALIC.toString());
            if(style.strikethrough != null)
                array.push(ChatColor.STRIKETHROUGH.toString());
            if(style.underlined != null)
                array.push(ChatColor.UNDERLINE.toString());
            if(style.obfuscated != null)
                array.push(ChatColor.OBFUSCATED.toString());
        }
        if(component instanceof ChatComponentText)
            array.push(component.text);
        component.getExtras().forEach(value => this.toRaw0(value, color, array));
    }
}

interface Serializer<T> {

    deserialize(json: any): T | undefined;

    serialize(src: T): any | undefined;
}

let ChatStyleSerializer = class ChatStyleSerializer implements Serializer<ChatStyle> {

    deserialize(json: any): ChatStyle | undefined {
        if(typeof json !== 'object')
            return undefined;
        let chatStyle = new ChatStyle();
        if(json.color && typeof json.color === 'string')
            chatStyle.setColor(ChatColor.fromName(json.color));
        if(json.bold && typeof json.bold === 'boolean')
            chatStyle.setBold(json.bold);
        if(json.italic && typeof json.italic === 'boolean')
            chatStyle.setItalic(json.italic);
        if(json.underlined && typeof json.underlined === 'boolean')
            chatStyle.setUnderlined(json.underlined);
        if(json.strikethrough && typeof json.strikethrough === 'boolean')
            chatStyle.setStrikethrough(json.strikethrough);
        if(json.obfuscated && typeof json.obfuscated === 'boolean')
            chatStyle.setObfuscated(json.obfuscated);
        if(json.insertion && typeof json.insertion === 'string')
            chatStyle.setInsertion(json.insertion);
        if(json.clickEvent && typeof json.clickEvent === 'object') {
            let action = ClickActionFromName(json.clickEvent.action);
            let value = json.clickEvent.value;
            if(action && value)
                chatStyle.setClickEvent(new ChatClickEvent(action, value))
        }
        if(json.hoverEvent && typeof json.hoverEvent === 'object') {
            let action = HoverActionFromName(json.hoverEvent.action);
            let value = json.hoverEvent.value;
            if(action && (value && typeof value === 'object'))
                chatStyle.setHoverEvent(new ChatHoverEvent(action, new ChatComponentSerializer().deserialize(value)))
        }
        return chatStyle;
    }

    serialize(src: ChatStyle): any | undefined {
        if(!src || src.isEmpty())
            return undefined;
        let json = <any>{};
        if(src.color && typeof src.color === 'object')
            json.color = src.color.name.toLowerCase();
        if(src.bold && typeof src.bold === 'boolean')
            json.bold = src.bold;
        if(src.italic && typeof src.italic === 'boolean')
            json.italic = src.italic;
        if(src.underlined && typeof src.underlined === 'boolean')
            json.underlined = src.underlined;
        if(src.strikethrough && typeof src.strikethrough === 'boolean')
            json.strikethrough = src.strikethrough;
        if(src.obfuscated && typeof src.obfuscated === 'boolean')
            json.obfuscated = src.obfuscated;
        if(src.insertion && typeof src.insertion === 'string')
            json.insertion = src.insertion;
        if(src.clickEvent && typeof src.clickEvent === 'object') {
            let clickEvent = <any>{};
            clickEvent.action = src.clickEvent.action.toLowerCase();
            clickEvent.value = src.clickEvent.value;
            json.clickEvent = clickEvent;
        }
        if(src.hoverEvent && typeof src.hoverEvent === 'object') {
            let hoverEvent = <any>{};
            hoverEvent.action = src.hoverEvent.action.toLowerCase();
            hoverEvent.value = new ChatComponentSerializer().serialize(src.hoverEvent.value);
            json.hoverEvent = hoverEvent;
        }
        return json;
    }
};

let ChatComponentSerializer = class ChatComponentSerializer implements Serializer<ChatComponent> {

    deserialize(json: any): ChatComponent | undefined {
        if(typeof json === 'string')
            return new ChatComponentText(json);
        if(typeof json === 'object' && Array.isArray(json)) {
            let component: ChatComponent = undefined;
            json.forEach(value => {
                let component0 = this.deserialize(value);
                if(!component)
                    component = component0;
                else if(component0)
                    component.append(component0);
            });
            return component;
        }
        let component: ChatComponent = undefined;
        if(json.text && typeof json.text === 'string') {
            component = new ChatComponentText(json.text);
        } else if(json.translate && typeof json.translate === 'string') {
            let translate = json.translate;
            if(json.with && typeof json.with === 'object' && Array.isArray(json.with)) {
                let withs = [json.with.length];
                json.with.forEach((value, index) => {
                    withs[index] = this.deserialize(value);
                    if(withs[index] instanceof ChatComponentText) {
                        let componentText = <ChatComponentText> withs[index];
                        if(componentText.getStyle().isEmpty() && componentText.getExtraSize() <= 0)
                            withs[index] = componentText.text;
                    }
                });
                component = new ChatComponentTranslation(translate).addWiths(withs);
            } else {
                component = new ChatComponentTranslation(translate);
            }
        } else if(json.score && typeof json.score === 'object') {
            if(!json.score.name || !json.score.objective)
                throw new Error('The score chat component requires at least one name or objective property.');
            component = new ChatComponentScore(json.score.name, json.score.objective);
            if(json.score.value && typeof json.score.value === 'string')
                (<ChatComponentScore>component).value = json.score.value;
        } else if(json.selector && typeof json.selector === 'string') {
            component = new ChatComponentSelector(json.selector);
        } else if(json.keybind && typeof json.keybind === 'string') {
            component = new ChatComponentKeybind(json.keybind);
        } else {
            throw new Error('Do not know how to interpret ' + json + ' as a chat component.');
        }
        if(json.extra && typeof json.extra === 'object' && Array.isArray(json.extra)) {
            if(json.extra.length <= 0)
                throw new Error('Unexpected empty array component.');
            json.extra.forEach(value => {
                let component0 = this.deserialize(value);
                if(component0)
                    component.append(component0);
            });
        }
        component.setStyle(new ChatStyleSerializer().deserialize(json));
        return component;
    }

    serialize(src: ChatComponent): any | undefined {
        let json = <any>{};
        if(!src.getStyle().isEmpty()) {
            let jsonStyle = new ChatStyleSerializer().serialize(src.getStyle());
            if(jsonStyle && typeof jsonStyle === 'object') {
                for(let key in jsonStyle)
                    json[key] = jsonStyle[key];
            }
        }
        if(src.getExtraSize() > 0) {
            let jsonExtra = [src.getExtraSize()];
            src.getExtras().forEach((value, index) => {
                jsonExtra[index] = this.serialize(value);
            });
            json.extra = jsonExtra;
        }
        if(src instanceof ChatComponentText) {
            json.text = src.text;
        } else if(src instanceof ChatComponentTranslation) {
            json.translate = src.key;
            if(src.withs.length > 0) {
                let jsonWith = [src.withs.length];
                src.withs.forEach((value, index) => {
                    try {
                        let component0 = this.serialize(value);
                        jsonWith[index] = component0;
                    } catch(e) {
                        jsonWith[index] = value.toString();
                    }
                });
                json.with = jsonWith;
            }
        } else if(src instanceof ChatComponentScore) {
            let jsonScore = <any>{};
            jsonScore.name = src.name;
            jsonScore.objective = src.objective;
            if(src.value)
                jsonScore.value = src.value;
            json.score = jsonScore;
        } else if(src instanceof ChatComponentSelector) {
            json.selector = src.selector;
        } else if(src instanceof ChatComponentKeybind) {
            json.keybind = src.keybind;
        } else {
            throw new Error('Do not know how to interpret ' + json + ' as a chat component.');
        }
        return json;
    }
};

let RawMessage = class RawMessage {

    static PATTERN_RAW = /(§[0-9a-fk-or])/ig;

    private currentComponent?: ChatComponent;
    private currentIndex: number = 0;
    private style?: ChatStyle;

    raw: string;

    constructor(raw: string) {
        this.raw = raw;
        this.starting();
    }

    private starting() {
        let group;
        while((group = RawMessage.PATTERN_RAW.exec(this.raw)) != undefined) {
            let match = group[0];
            if(match === undefined)
                continue;
            this.append(group.index);
            let color = ChatColor.fromCode(match.toLowerCase()[1]) || ChatColor.WHITE;
            if(color === ChatColor.RESET)
                this.style = new ChatStyle();
            else if(color.format) {
                switch(color) {
                    case ChatColor.OBFUSCATED:
                        this.style.setObfuscated(true);
                        break;
                    case ChatColor.BOLD:
                        this.style.setBold(true);
                        break;
                    case ChatColor.STRIKETHROUGH:
                        this.style.setStrikethrough(true);
                        break;
                    case ChatColor.UNDERLINE:
                        this.style.setUnderlined(true);
                        break;
                    case ChatColor.ITALIC:
                        this.style.setItalic(true);
                        break;
                    default:
                        throw new Error('Invalid chat color formatting: ' + color.code);
                }
            } else {
                this.style = new ChatStyle().setColor(color);
            }
            this.currentIndex = group.index + match.length;
        }

        if(this.currentIndex < this.raw.length)
            this.append(this.raw.length);
    }

    private append(index: number) {
        if(index > this.currentIndex) {
            let extra = new ChatComponentText(this.raw.substring(this.currentIndex, index)).setStyle(this.style);
            this.currentIndex = index;
            if(this.style)
                this.style = this.style.clone();
            if(!this.currentComponent)
                this.currentComponent = new ChatComponentText();
            this.currentComponent.append(extra);
        }
    }

    get(): ChatComponent {
        return this.currentComponent || new ChatComponentText();
    }
};
