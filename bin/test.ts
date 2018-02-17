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

import * as mcchat4js from "../mcchat4js";

export {Chat4jsTester};

let Chat4jsTester = {
    testStyle() {
        console.log('----- mcchat4js ----- test => testStyle()');
       let style = new mcchat4js.ChatStyle();
       style.setColor(mcchat4js.ChatColor.RED);
       style.setBold(true);
       style.setClickEvent(new mcchat4js.ChatClickEvent(mcchat4js.ChatClickAction.RUN_COMMAND, '/say @a A text'));
       console.log('style =', style);
       console.log();
    },
    testComponent() {
        console.log('----- mcchat4js ----- test => testComponent()');
        let component = new mcchat4js.ChatComponentText('A text');
        console.log('component =', component);
        console.log();
    },
    testFromJson() {
        console.log('----- mcchat4js ----- test => testFromJson()');
        let json = '{"text":"A text","color":"red"}';
        let component = mcchat4js.ChatSerializer.fromJson(json);
        console.log('json =', json);
        console.log('component =', component);
        console.log();
    },
    testToJson() {
        console.log('----- mcchat4js ----- test => testToJson()');
        let component = new mcchat4js.ChatComponentText('A text');
        component.setStyle(new mcchat4js.ChatStyle().setColor(mcchat4js.ChatColor.RED));
        let json = mcchat4js.ChatSerializer.toJson(component);
        console.log('json =', json);
        console.log('json string =', JSON.stringify(json));
        console.log();
    },
    testFromRaw() {
        console.log('----- mcchat4js ----- test => testFromRaw()');
        let raw = mcchat4js.ChatColor.translateAlternateColorCodes('&', '&cA text');
        let component = mcchat4js.ChatSerializer.fromRaw(raw);
        console.log('raw =', raw);
        console.log('component =', component);
        console.log();
    },
    testToRaw() {
        console.log('----- mcchat4js ----- test => testToRaw()');
        let component = new mcchat4js.ChatComponentText('A text');
        component.setStyle(new mcchat4js.ChatStyle().setColor(mcchat4js.ChatColor.RED));
        let rawNoColor = mcchat4js.ChatSerializer.toRaw(component);
        let rawColor = mcchat4js.ChatSerializer.toRaw(component, true);
        console.log('raw =', rawColor);
        console.log('raw no color =', rawNoColor);
        console.log();
    },
};

// Test
Chat4jsTester.testStyle();
Chat4jsTester.testComponent();
Chat4jsTester.testFromJson();
Chat4jsTester.testToJson();
Chat4jsTester.testFromRaw();
Chat4jsTester.testToRaw();
