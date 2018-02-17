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
var ChatStyle_1 = require("./ChatStyle");
var ChatColor_1 = require("./ChatColor");
var ChatClickEvent_1 = require("./ChatClickEvent");
var ChatHoverEvent_1 = require("./ChatHoverEvent");
var ChatComponentText_1 = require("./ChatComponentText");
var ChatComponentTranslation_1 = require("./ChatComponentTranslation");
var ChatComponentScore_1 = require("./ChatComponentScore");
var ChatComponentSelector_1 = require("./ChatComponentSelector");
var ChatComponentKeybind_1 = require("./ChatComponentKeybind");
var ChatSerializer = /** @class */ (function () {
    function ChatSerializer() {
    }
    ChatSerializer.fromJson = function (json) {
        if (!json)
            throw new Error('The json object is undefined.');
        if (typeof json === 'string')
            json = JSON.parse(json);
        var serializer = new ChatComponentSerializer();
        return serializer.deserialize(json);
    };
    ChatSerializer.toJson = function (component) {
        if (!component)
            throw new Error('The component object is undefined.');
        var serializer = new ChatComponentSerializer();
        return serializer.serialize(component);
    };
    ChatSerializer.toJsonString = function (component) {
        var json = this.toJson(component);
        if (json === undefined)
            return undefined;
        return JSON.stringify(json);
    };
    ChatSerializer.fromRaw = function (raw) {
        if (!raw || raw.length === 0)
            return new ChatComponentText_1.ChatComponentText('');
        return new RawMessage(raw).get();
    };
    ChatSerializer.fromRawOrNull = function (raw) {
        if (!raw || raw.length === 0)
            return undefined;
        return this.fromRaw(raw);
    };
    ChatSerializer.toRaw = function (component, color) {
        var array = [];
        this.toRaw0(component, color || false, array);
        return array.join('');
    };
    ChatSerializer.toRaw0 = function (component, color, array) {
        var _this = this;
        if (typeof color === 'boolean' && color === true) {
            var style = component.getStyle();
            if (style.color !== undefined)
                array.push(style.color.toString());
            if (style.bold !== undefined)
                array.push(ChatColor_1.ChatColor.BOLD.toString());
            if (style.italic !== undefined)
                array.push(ChatColor_1.ChatColor.ITALIC.toString());
            if (style.strikethrough != null)
                array.push(ChatColor_1.ChatColor.STRIKETHROUGH.toString());
            if (style.underlined != null)
                array.push(ChatColor_1.ChatColor.UNDERLINE.toString());
            if (style.obfuscated != null)
                array.push(ChatColor_1.ChatColor.OBFUSCATED.toString());
        }
        if (component instanceof ChatComponentText_1.ChatComponentText)
            array.push(component.text);
        component.getExtras().forEach(function (value) { return _this.toRaw0(value, color, array); });
    };
    return ChatSerializer;
}());
exports.ChatSerializer = ChatSerializer;
var ChatStyleSerializer = /** @class */ (function () {
    function ChatStyleSerializer() {
    }
    ChatStyleSerializer.prototype.deserialize = function (json) {
        if (typeof json !== 'object')
            return undefined;
        var chatStyle = new ChatStyle_1.ChatStyle();
        if (json.color && typeof json.color === 'string')
            chatStyle.setColor(ChatColor_1.ChatColor.fromName(json.color));
        if (json.bold && typeof json.bold === 'boolean')
            chatStyle.setBold(json.bold);
        if (json.italic && typeof json.italic === 'boolean')
            chatStyle.setItalic(json.italic);
        if (json.underlined && typeof json.underlined === 'boolean')
            chatStyle.setUnderlined(json.underlined);
        if (json.strikethrough && typeof json.strikethrough === 'boolean')
            chatStyle.setStrikethrough(json.strikethrough);
        if (json.obfuscated && typeof json.obfuscated === 'boolean')
            chatStyle.setObfuscated(json.obfuscated);
        if (json.insertion && typeof json.insertion === 'string')
            chatStyle.setInsertion(json.insertion);
        if (json.clickEvent && typeof json.clickEvent === 'object') {
            var action = ChatClickEvent_1.fromName(json.clickEvent.action);
            var value = json.clickEvent.value;
            if (action && value)
                chatStyle.setClickEvent(new ChatClickEvent_1.ChatClickEvent(action, value));
        }
        if (json.hoverEvent && typeof json.hoverEvent === 'object') {
            var action = ChatHoverEvent_1.fromName(json.hoverEvent.action);
            var value = json.hoverEvent.value;
            if (action && (value && typeof value === 'object'))
                chatStyle.setHoverEvent(new ChatHoverEvent_1.ChatHoverEvent(action, new ChatComponentSerializer().deserialize(value)));
        }
        return chatStyle;
    };
    ChatStyleSerializer.prototype.serialize = function (src) {
        if (!src || src.isEmpty())
            return undefined;
        var json = {};
        if (src.color && typeof src.color === 'object')
            json.color = src.color.name.toLowerCase();
        if (src.bold && typeof src.bold === 'boolean')
            json.bold = src.bold;
        if (src.italic && typeof src.italic === 'boolean')
            json.italic = src.italic;
        if (src.underlined && typeof src.underlined === 'boolean')
            json.underlined = src.underlined;
        if (src.strikethrough && typeof src.strikethrough === 'boolean')
            json.strikethrough = src.strikethrough;
        if (src.obfuscated && typeof src.obfuscated === 'boolean')
            json.obfuscated = src.obfuscated;
        if (src.insertion && typeof src.insertion === 'string')
            json.insertion = src.insertion;
        if (src.clickEvent && typeof src.clickEvent === 'object') {
            var clickEvent = {};
            clickEvent.action = src.clickEvent.action.toLowerCase();
            clickEvent.value = src.clickEvent.value;
            json.clickEvent = clickEvent;
        }
        if (src.hoverEvent && typeof src.hoverEvent === 'object') {
            var hoverEvent = {};
            hoverEvent.action = src.hoverEvent.action.toLowerCase();
            hoverEvent.value = new ChatComponentSerializer().serialize(src.hoverEvent.value);
            json.hoverEvent = hoverEvent;
        }
        return json;
    };
    return ChatStyleSerializer;
}());
var ChatComponentSerializer = /** @class */ (function () {
    function ChatComponentSerializer() {
    }
    ChatComponentSerializer.prototype.deserialize = function (json) {
        var _this = this;
        if (typeof json === 'string')
            return new ChatComponentText_1.ChatComponentText(json);
        if (typeof json === 'object' && Array.isArray(json)) {
            var component_1 = undefined;
            json.forEach(function (value) {
                var component0 = _this.deserialize(value);
                if (!component_1)
                    component_1 = component0;
                else if (component0)
                    component_1.append(component0);
            });
            return component_1;
        }
        var component = undefined;
        if (json.text && typeof json.text === 'string') {
            component = new ChatComponentText_1.ChatComponentText(json.text);
        }
        else if (json.translate && typeof json.translate === 'string') {
            var translate = json.translate;
            if (json.with && typeof json.with === 'object' && Array.isArray(json.with)) {
                var withs_1 = [json.with.length];
                json.with.forEach(function (value, index) {
                    withs_1[index] = _this.deserialize(value);
                    if (withs_1[index] instanceof ChatComponentText_1.ChatComponentText) {
                        var componentText = withs_1[index];
                        if (componentText.getStyle().isEmpty() && componentText.getExtraSize() <= 0)
                            withs_1[index] = componentText.text;
                    }
                });
                component = new ChatComponentTranslation_1.ChatComponentTranslation(translate).addWiths(withs_1);
            }
            else {
                component = new ChatComponentTranslation_1.ChatComponentTranslation(translate);
            }
        }
        else if (json.score && typeof json.score === 'object') {
            if (!json.score.name || !json.score.objective)
                throw new Error('The score chat component requires at least one name or objective property.');
            component = new ChatComponentScore_1.ChatComponentScore(json.score.name, json.score.objective);
            if (json.score.value && typeof json.score.value === 'string')
                component.value = json.score.value;
        }
        else if (json.selector && typeof json.selector === 'string') {
            component = new ChatComponentSelector_1.ChatComponentSelector(json.selector);
        }
        else if (json.keybind && typeof json.keybind === 'string') {
            component = new ChatComponentKeybind_1.ChatComponentKeybind(json.keybind);
        }
        else {
            throw new Error('Do not know how to interpret ' + json + ' as a chat component.');
        }
        if (json.extra && typeof json.extra === 'object' && Array.isArray(json.extra)) {
            if (json.extra.length <= 0)
                throw new Error('Unexpected empty array component.');
            json.extra.forEach(function (value) {
                var component0 = _this.deserialize(value);
                if (component0)
                    component.append(component0);
            });
        }
        component.setStyle(new ChatStyleSerializer().deserialize(json));
        return component;
    };
    ChatComponentSerializer.prototype.serialize = function (src) {
        var _this = this;
        var json = {};
        if (!src.getStyle().isEmpty()) {
            var jsonStyle = new ChatStyleSerializer().serialize(src.getStyle());
            if (jsonStyle && typeof jsonStyle === 'object') {
                for (var key in jsonStyle)
                    json[key] = jsonStyle[key];
            }
        }
        if (src.getExtraSize() > 0) {
            var jsonExtra_1 = [src.getExtraSize()];
            src.getExtras().forEach(function (value, index) {
                jsonExtra_1[index] = _this.serialize(value);
            });
            json.extra = jsonExtra_1;
        }
        if (src instanceof ChatComponentText_1.ChatComponentText) {
            json.text = src.text;
        }
        else if (src instanceof ChatComponentTranslation_1.ChatComponentTranslation) {
            json.translate = src.key;
            if (src.withs.length > 0) {
                var jsonWith_1 = [src.withs.length];
                src.withs.forEach(function (value, index) {
                    try {
                        var component0 = _this.serialize(value);
                        jsonWith_1[index] = component0;
                    }
                    catch (e) {
                        jsonWith_1[index] = value.toString();
                    }
                });
                json.with = jsonWith_1;
            }
        }
        else if (src instanceof ChatComponentScore_1.ChatComponentScore) {
            var jsonScore = {};
            jsonScore.name = src.name;
            jsonScore.objective = src.objective;
            if (src.value)
                jsonScore.value = src.value;
            json.score = jsonScore;
        }
        else if (src instanceof ChatComponentSelector_1.ChatComponentSelector) {
            json.selector = src.selector;
        }
        else if (src instanceof ChatComponentKeybind_1.ChatComponentKeybind) {
            json.keybind = src.keybind;
        }
        else {
            throw new Error('Do not know how to interpret ' + json + ' as a chat component.');
        }
        return json;
    };
    return ChatComponentSerializer;
}());
var RawMessage = (_a = /** @class */ (function () {
        function RawMessage(raw) {
            this.currentIndex = 0;
            this.raw = raw;
            this.starting();
        }
        RawMessage.prototype.starting = function () {
            var group;
            while ((group = RawMessage.PATTERN_RAW.exec(this.raw)) != undefined) {
                var match = group[0];
                if (match === undefined)
                    continue;
                this.append(group.index);
                var color = ChatColor_1.ChatColor.fromCode(match.toLowerCase()[1]) || ChatColor_1.ChatColor.WHITE;
                if (color === ChatColor_1.ChatColor.RESET)
                    this.style = new ChatStyle_1.ChatStyle();
                else if (color.format) {
                    switch (color) {
                        case ChatColor_1.ChatColor.OBFUSCATED:
                            this.style.setObfuscated(true);
                            break;
                        case ChatColor_1.ChatColor.BOLD:
                            this.style.setBold(true);
                            break;
                        case ChatColor_1.ChatColor.STRIKETHROUGH:
                            this.style.setStrikethrough(true);
                            break;
                        case ChatColor_1.ChatColor.UNDERLINE:
                            this.style.setUnderlined(true);
                            break;
                        case ChatColor_1.ChatColor.ITALIC:
                            this.style.setItalic(true);
                            break;
                        default:
                            throw new Error('Invalid chat color formatting: ' + color.code);
                    }
                }
                else {
                    this.style = new ChatStyle_1.ChatStyle().setColor(color);
                }
                this.currentIndex = group.index + match.length;
            }
            if (this.currentIndex < this.raw.length)
                this.append(this.raw.length);
        };
        RawMessage.prototype.append = function (index) {
            if (index > this.currentIndex) {
                var extra = new ChatComponentText_1.ChatComponentText(this.raw.substring(this.currentIndex, index)).setStyle(this.style);
                this.currentIndex = index;
                if (this.style)
                    this.style = this.style.clone();
                if (!this.currentComponent)
                    this.currentComponent = new ChatComponentText_1.ChatComponentText();
                this.currentComponent.append(extra);
            }
        };
        RawMessage.prototype.get = function () {
            return this.currentComponent || new ChatComponentText_1.ChatComponentText();
        };
        return RawMessage;
    }()),
    _a.PATTERN_RAW = /(§[0-9a-fk-or])/ig,
    _a);
var _a;
//# sourceMappingURL=ChatSerializer.js.map