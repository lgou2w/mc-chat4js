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
var mcchat4js = require("../mcchat4js");
var Chat4jsTester = {
    testStyle: function () {
        console.log('----- mcchat4js ----- test => testStyle()');
        var style = new mcchat4js.ChatStyle();
        style.setColor(mcchat4js.ChatColor.RED);
        style.setBold(true);
        style.setClickEvent(new mcchat4js.ChatClickEvent(mcchat4js.ChatClickAction.RUN_COMMAND, '/say @a A text'));
        console.log('style =', style);
        console.log();
    },
    testComponent: function () {
        console.log('----- mcchat4js ----- test => testComponent()');
        var component = new mcchat4js.ChatComponentText('A text');
        console.log('component =', component);
        console.log();
    },
    testFromJson: function () {
        console.log('----- mcchat4js ----- test => testFromJson()');
        var json = '{"text":"A text","color":"red"}';
        var component = mcchat4js.ChatSerializer.fromJson(json);
        console.log('json =', json);
        console.log('component =', component);
        console.log();
    },
    testToJson: function () {
        console.log('----- mcchat4js ----- test => testToJson()');
        var component = new mcchat4js.ChatComponentText('A text');
        component.setStyle(new mcchat4js.ChatStyle().setColor(mcchat4js.ChatColor.RED));
        var json = mcchat4js.ChatSerializer.toJson(component);
        console.log('json =', json);
        console.log('json string =', JSON.stringify(json));
        console.log();
    },
    testFromRaw: function () {
        console.log('----- mcchat4js ----- test => testFromRaw()');
        var raw = mcchat4js.ChatColor.translateAlternateColorCodes('&', '&cA text');
        var component = mcchat4js.ChatSerializer.fromRaw(raw);
        console.log('raw =', raw);
        console.log('component =', component);
        console.log();
    },
    testToRaw: function () {
        console.log('----- mcchat4js ----- test => testToRaw()');
        var component = new mcchat4js.ChatComponentText('A text');
        component.setStyle(new mcchat4js.ChatStyle().setColor(mcchat4js.ChatColor.RED));
        var rawNoColor = mcchat4js.ChatSerializer.toRaw(component);
        var rawColor = mcchat4js.ChatSerializer.toRaw(component, true);
        console.log('raw =', rawColor);
        console.log('raw no color =', rawNoColor);
        console.log();
    },
};
exports.Chat4jsTester = Chat4jsTester;
// Test
Chat4jsTester.testStyle();
Chat4jsTester.testComponent();
Chat4jsTester.testFromJson();
Chat4jsTester.testToJson();
Chat4jsTester.testFromRaw();
Chat4jsTester.testToRaw();
//# sourceMappingURL=test.js.map