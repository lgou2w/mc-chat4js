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
var ChatStyle = /** @class */ (function () {
    function ChatStyle() {
    }
    ChatStyle.prototype.getParent = function () {
        return this.parent || ROOT;
    };
    ChatStyle.prototype.setParent = function (parent) {
        this.parent = parent;
        return this;
    };
    ;
    ChatStyle.prototype.getColor = function () {
        return this.color || this.getParent().getColor();
    };
    ChatStyle.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    ChatStyle.prototype.getBold = function () {
        return this.bold || this.getParent().getBold();
    };
    ChatStyle.prototype.setBold = function (bold) {
        this.bold = bold;
        return this;
    };
    ChatStyle.prototype.getItalic = function () {
        return this.italic || this.getParent().getItalic();
    };
    ChatStyle.prototype.setItalic = function (italic) {
        this.italic = italic;
        return this;
    };
    ChatStyle.prototype.getUnderlined = function () {
        return this.underlined || this.getParent().getUnderlined();
    };
    ChatStyle.prototype.setUnderlined = function (underlined) {
        this.underlined = underlined;
        return this;
    };
    ChatStyle.prototype.getStrikethrough = function () {
        return this.strikethrough || this.getParent().getStrikethrough();
    };
    ChatStyle.prototype.setStrikethrough = function (strikethrough) {
        this.strikethrough = strikethrough;
        return this;
    };
    ChatStyle.prototype.getObfuscated = function () {
        return this.obfuscated || this.getParent().getObfuscated();
    };
    ChatStyle.prototype.setObfuscated = function (obfuscated) {
        this.obfuscated = obfuscated;
        return this;
    };
    ChatStyle.prototype.getClickEvent = function () {
        return this.clickEvent || this.getParent().getClickEvent();
    };
    ChatStyle.prototype.setClickEvent = function (clickEvent) {
        this.clickEvent = clickEvent;
        return this;
    };
    ChatStyle.prototype.getHoverEvent = function () {
        return this.hoverEvent || this.getParent().getHoverEvent();
    };
    ChatStyle.prototype.setHoverEvent = function (hoverEvent) {
        this.hoverEvent = hoverEvent;
        return this;
    };
    ChatStyle.prototype.getInsertion = function () {
        return this.insertion || this.getParent().getInsertion();
    };
    ChatStyle.prototype.setInsertion = function (insertion) {
        this.insertion = insertion;
        return this;
    };
    ChatStyle.prototype.isEmpty = function () {
        return !this.color &&
            !this.bold && !this.italic &&
            !this.strikethrough && !this.underlined &&
            !this.obfuscated && !this.clickEvent &&
            !this.hoverEvent && !this.insertion;
    };
    ChatStyle.prototype.clone = function () {
        var copy = new ChatStyle();
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
    };
    return ChatStyle;
}());
exports.ChatStyle = ChatStyle;
var Root = /** @class */ (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.setParent = function (parent) {
        throw UnsupportedOperationException;
    };
    Root.prototype.getColor = function () {
        return null;
    };
    Root.prototype.setColor = function (color) {
        throw UnsupportedOperationException;
    };
    Root.prototype.getBold = function () {
        return false;
    };
    Root.prototype.setBold = function (bold) {
        throw UnsupportedOperationException;
    };
    Root.prototype.getItalic = function () {
        return false;
    };
    Root.prototype.setItalic = function (italic) {
        throw UnsupportedOperationException;
    };
    Root.prototype.getStrikethrough = function () {
        return false;
    };
    Root.prototype.setStrikethrough = function (strikethrough) {
        throw UnsupportedOperationException;
    };
    Root.prototype.getUnderlined = function () {
        return false;
    };
    Root.prototype.setUnderlined = function (underlined) {
        throw UnsupportedOperationException;
    };
    Root.prototype.getObfuscated = function () {
        return false;
    };
    Root.prototype.setObfuscated = function (obfuscated) {
        throw UnsupportedOperationException;
    };
    Root.prototype.getClickEvent = function () {
        return null;
    };
    Root.prototype.setClickEvent = function (clickEvent) {
        throw UnsupportedOperationException;
    };
    Root.prototype.getHoverEvent = function () {
        return null;
    };
    Root.prototype.setHoverEvent = function (hoverEvent) {
        throw UnsupportedOperationException;
    };
    Root.prototype.getInsertion = function () {
        return null;
    };
    Root.prototype.setInsertion = function (insertion) {
        throw UnsupportedOperationException;
    };
    Root.prototype.toString = function () {
        return "ChatStyle.ROOT";
    };
    return Root;
}(ChatStyle));
var UnsupportedOperationException = new Error('UnsupportedOperationException');
/**
 * Root for Chat Style.
 */
var ROOT = new Root();
//# sourceMappingURL=ChatStyle.js.map