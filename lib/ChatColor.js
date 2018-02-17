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
var ChatColor = /** @class */ (function () {
    function ChatColor(name, code, format) {
        if (format === void 0) { format = false; }
        this.format = false;
        this.name = name;
        this.code = code;
        this.format = format;
        ChatColor.array.push(name);
        ChatColor.lookup[name] = this;
    }
    ;
    ChatColor.prototype.toString = function () {
        return ChatColor.COLOR + this.code;
    };
    ;
    ChatColor.array = [];
    ChatColor.lookup = {};
    ChatColor.BLACK = new ChatColor('BLACK', '0');
    ChatColor.DARK_BLUE = new ChatColor('DARK_BLUE', '1');
    ChatColor.DARK_GREEN = new ChatColor('DARK_GREEN', '2');
    ChatColor.DARK_AQUA = new ChatColor('DARK_AQUA', '3');
    ChatColor.DARK_RED = new ChatColor('DARK_RED', '4');
    ChatColor.DARK_PURPLE = new ChatColor('DARK_PURPLE', '5');
    ChatColor.GOLD = new ChatColor('GOLD', '6');
    ChatColor.GRAY = new ChatColor('GRAY', '7');
    ChatColor.DARK_GRAY = new ChatColor('DARK_GRAY', '8');
    ChatColor.BLUE = new ChatColor('BLUE', '9');
    ChatColor.GREEN = new ChatColor('GREEN', 'a');
    ChatColor.AQUA = new ChatColor('AQUA', 'b');
    ChatColor.RED = new ChatColor('RED', 'c');
    ChatColor.LIGHT_PURPLE = new ChatColor('LIGHT_PURPLE', 'd');
    ChatColor.YELLOW = new ChatColor('YELLOW', 'e');
    ChatColor.WHITE = new ChatColor('WHITE', 'f');
    ChatColor.OBFUSCATED = new ChatColor('OBFUSCATED', 'k', true);
    ChatColor.BOLD = new ChatColor('BOLD', 'l', true);
    ChatColor.STRIKETHROUGH = new ChatColor('STRIKETHROUGH', 'm', true);
    ChatColor.UNDERLINE = new ChatColor('UNDERLINE', 'n', true);
    ChatColor.ITALIC = new ChatColor('ITALIC', 'o', true);
    ChatColor.RESET = new ChatColor('RESET', 'r');
    ChatColor.values = function () {
        var values = new Array(0);
        for (var _i = 0, _a = ChatColor.array; _i < _a.length; _i++) {
            var name_1 = _a[_i];
            values.push(ChatColor.lookup[name_1]);
        }
        return values;
    };
    ChatColor.fromName = function (name) {
        return ChatColor.lookup[name.toUpperCase()];
    };
    ChatColor.fromCode = function (code) {
        var color;
        for (var _i = 0, _a = ChatColor.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.code === code) {
                color = value;
                break;
            }
        }
        return color;
    };
    ChatColor.COLOR = '§';
    ChatColor.COLOR_STRIP = /§[0-9A-FK-OR]/ig;
    ChatColor.stripColor = function (input) {
        return input.replace(ChatColor.COLOR_STRIP, '');
    };
    ChatColor.translateAlternateColorCodes = function (altColorChar, textToTranslate) {
        var chars = textToTranslate.split('');
        var length = textToTranslate.length;
        for (var i = 0; i < length; i++) {
            if (chars[i] == altColorChar && '0123456789AaBbCcDdEeFfKkLlMmNnOoRr'.indexOf(chars[i + 1]) > -1) {
                chars[i] = ChatColor.COLOR;
                chars[i + 1] = chars[i + 1].toLowerCase();
            }
        }
        return chars.join('');
    };
    return ChatColor;
}());
exports.ChatColor = ChatColor;
//# sourceMappingURL=ChatColor.js.map