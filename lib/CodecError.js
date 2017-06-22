'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CodecError = undefined;

var _jsError = require('@aureooms/js-error');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodecError = exports.CodecError = function (_ValueError) {
	_inherits(CodecError, _ValueError);

	function CodecError(encoding, reason, object, start, end) {
		_classCallCheck(this, CodecError);

		var _this = _possibleConstructorReturn(this, (CodecError.__proto__ || Object.getPrototypeOf(CodecError)).call(this, reason));

		_this.encoding = encoding;
		_this.reason = reason.toString();
		_this.object = object;
		_this.start = start;
		_this.end = end;

		return _this;
	}

	return CodecError;
}(_jsError.ValueError);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db2RlY0Vycm9yLmpzIl0sIm5hbWVzIjpbIkNvZGVjRXJyb3IiLCJlbmNvZGluZyIsInJlYXNvbiIsIm9iamVjdCIsInN0YXJ0IiwiZW5kIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFYUEsVSxXQUFBQSxVOzs7QUFFWixxQkFBY0MsUUFBZCxFQUF5QkMsTUFBekIsRUFBa0NDLE1BQWxDLEVBQTJDQyxLQUEzQyxFQUFtREMsR0FBbkQsRUFBeUQ7QUFBQTs7QUFBQSxzSEFFakRILE1BRmlEOztBQUl4RCxRQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFFBQUtDLE1BQUwsR0FBY0EsT0FBT0ksUUFBUCxFQUFkO0FBQ0EsUUFBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsUUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsUUFBS0MsR0FBTCxHQUFXQSxHQUFYOztBQVJ3RDtBQVV4RCIsImZpbGUiOiJDb2RlY0Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWVFcnJvciB9IGZyb20gJ0BhdXJlb29tcy9qcy1lcnJvcicgO1xuXG5leHBvcnQgY2xhc3MgQ29kZWNFcnJvciBleHRlbmRzIFZhbHVlRXJyb3Ige1xuXG5cdGNvbnN0cnVjdG9yICggZW5jb2RpbmcgLCByZWFzb24gLCBvYmplY3QgLCBzdGFydCAsIGVuZCApIHtcblxuXHRcdHN1cGVyKCByZWFzb24gKSA7XG5cblx0XHR0aGlzLmVuY29kaW5nID0gZW5jb2RpbmcgO1xuXHRcdHRoaXMucmVhc29uID0gcmVhc29uLnRvU3RyaW5nKCkgO1xuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0IDtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQgO1xuXHRcdHRoaXMuZW5kID0gZW5kIDtcblxuXHR9XG5cbn1cbiJdfQ==