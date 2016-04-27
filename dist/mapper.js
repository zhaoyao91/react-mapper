'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (mapper) {
    return function (props) {
        var Component = mapper(props);
        return _react2.default.createElement(Component, props);
    };
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

