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

export class ChatColor {

    name: string;
    code: string;
    format = false;

    private static array: string[] = [ ];
    private static lookup: { [key: string]: ChatColor } = { };

    private constructor(name: string, code: string, format: boolean = false) {
        this.name = name;
        this.code = code;
        this.format = format;
        ChatColor.array.push(name);
        ChatColor.lookup[name] = this;
    };

    static BLACK = new ChatColor('BLACK', '0');
    static DARK_BLUE = new ChatColor('DARK_BLUE', '1');
    static DARK_GREEN =  new ChatColor('DARK_GREEN', '2');
    static DARK_AQUA = new ChatColor('DARK_AQUA', '3');
    static DARK_RED = new ChatColor('DARK_RED', '4');
    static DARK_PURPLE = new ChatColor('DARK_PURPLE', '5');
    static GOLD = new ChatColor('GOLD', '6');
    static GRAY = new ChatColor('GRAY', '7');
    static DARK_GRAY = new ChatColor('DARK_GRAY', '8');
    static BLUE = new ChatColor('BLUE', '9');
    static GREEN = new ChatColor('GREEN', 'a');
    static AQUA = new ChatColor('AQUA', 'b');
    static RED = new ChatColor('RED', 'c');
    static LIGHT_PURPLE = new ChatColor('LIGHT_PURPLE', 'd');
    static YELLOW = new ChatColor('YELLOW', 'e');
    static WHITE = new ChatColor('WHITE', 'f');

    static OBFUSCATED = new ChatColor('OBFUSCATED', 'k', true);
    static BOLD = new ChatColor('BOLD', 'l', true);
    static STRIKETHROUGH = new ChatColor('STRIKETHROUGH', 'm', true);
    static UNDERLINE = new ChatColor('UNDERLINE', 'n', true);
    static ITALIC = new ChatColor('ITALIC', 'o', true);

    static RESET = new ChatColor('RESET', 'r');

    static values: () => ChatColor[] = function () {
        let values: ChatColor[] = new Array<ChatColor>(0);
        for(let name of ChatColor.array)
            values.push(ChatColor.lookup[name]);
        return values;
    };

    static fromName: (name: string) => ChatColor | undefined = function (name) {
        return ChatColor.lookup[name.toUpperCase()]
    };

    static fromCode: (code: string) => ChatColor | undefined = function (code) {
       let color;
       for(let value of ChatColor.values())
           if(value.code === code) {
               color = value;
               break;
           }
       return color;
    };

    private static COLOR = '§';
    private static COLOR_STRIP = /§[0-9A-FK-OR]/ig;

    toString(): string {
        return ChatColor.COLOR + this.code;
    };

    static stripColor: (input: string) => string = function (input) {
        return input.replace(ChatColor.COLOR_STRIP, '')
    };

    static translateAlternateColorCodes: (altColorChar: string, textToTranslate: string) => string = function (altColorChar, textToTranslate) {
        let chars = textToTranslate.split('');
        let length = textToTranslate.length;
        for(let i = 0; i < length; i++) {
            if(chars[i] == altColorChar && '0123456789AaBbCcDdEeFfKkLlMmNnOoRr'.indexOf(chars[i + 1]) > -1) {
                chars[i] = ChatColor.COLOR;
                chars[i + 1] = chars[i + 1].toLowerCase();
            }
        }
        return chars.join('');
    };
}
