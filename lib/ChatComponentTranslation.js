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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ChatComponentAbstract_1 = require("./ChatComponentAbstract");
var ChatComponentTranslation = /** @class */ (function (_super) {
    __extends(ChatComponentTranslation, _super);
    function ChatComponentTranslation(key, withs) {
        if (withs === void 0) { withs = undefined; }
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.withs = withs || [];
        return _this;
    }
    ChatComponentTranslation.prototype.addWiths = function (withs) {
        if (Array.isArray(withs))
            for (var _i = 0, withs_1 = withs; _i < withs_1.length; _i++) {
                var value = withs_1[_i];
                this.withs.push(value);
            }
        else
            this.withs.push(withs);
        return this;
    };
    return ChatComponentTranslation;
}(ChatComponentAbstract_1.ChatComponentAbstract));
exports.ChatComponentTranslation = ChatComponentTranslation;
//# sourceMappingURL=ChatComponentTranslation.js.map