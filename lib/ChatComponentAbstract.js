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
var ChatComponentAbstract = /** @class */ (function () {
    function ChatComponentAbstract() {
        this.extras = new Array(0);
    }
    ChatComponentAbstract.prototype.getStyle = function () {
        var _this = this;
        if (this.style === undefined) {
            this.style = new ChatStyle_1.ChatStyle();
            this.extras.forEach(function (value) { return value.getStyle().setParent(_this.style); });
        }
        return this.style;
    };
    ChatComponentAbstract.prototype.setStyle = function (style) {
        var _this = this;
        this.style = style;
        this.extras.forEach(function (value) { return value.getStyle().setParent(_this.style); });
        return this;
    };
    ChatComponentAbstract.prototype.getExtras = function () {
        return this.extras;
    };
    ChatComponentAbstract.prototype.getExtraSize = function () {
        return this.extras.length;
    };
    ChatComponentAbstract.prototype.append = function (extra) {
        extra.getStyle().setParent(this.style);
        this.extras.push(extra);
        return this;
    };
    return ChatComponentAbstract;
}());
exports.ChatComponentAbstract = ChatComponentAbstract;
//# sourceMappingURL=ChatComponentAbstract.js.map