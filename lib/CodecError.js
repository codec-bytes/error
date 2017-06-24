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

	function CodecError(encoding, reason, object, position) {
		_classCallCheck(this, CodecError);

		var _this = _possibleConstructorReturn(this, (CodecError.__proto__ || Object.getPrototypeOf(CodecError)).call(this, reason));

		_this.encoding = encoding;
		_this.reason = reason.toString();
		_this.object = object;
		_this.position = position;

		return _this;
	}

	return CodecError;
}(_jsError.ValueError);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db2RlY0Vycm9yLmpzIl0sIm5hbWVzIjpbIkNvZGVjRXJyb3IiLCJlbmNvZGluZyIsInJlYXNvbiIsIm9iamVjdCIsInBvc2l0aW9uIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFYUEsVSxXQUFBQSxVOzs7QUFFWixxQkFBY0MsUUFBZCxFQUF5QkMsTUFBekIsRUFBa0NDLE1BQWxDLEVBQTJDQyxRQUEzQyxFQUFzRDtBQUFBOztBQUFBLHNIQUU5Q0YsTUFGOEM7O0FBSXJELFFBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsUUFBS0MsTUFBTCxHQUFjQSxPQUFPRyxRQUFQLEVBQWQ7QUFDQSxRQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxRQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFQcUQ7QUFTckQiLCJmaWxlIjoiQ29kZWNFcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbHVlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtZXJyb3InIDtcblxuZXhwb3J0IGNsYXNzIENvZGVjRXJyb3IgZXh0ZW5kcyBWYWx1ZUVycm9yIHtcblxuXHRjb25zdHJ1Y3RvciAoIGVuY29kaW5nICwgcmVhc29uICwgb2JqZWN0ICwgcG9zaXRpb24gKSB7XG5cblx0XHRzdXBlciggcmVhc29uICkgO1xuXG5cdFx0dGhpcy5lbmNvZGluZyA9IGVuY29kaW5nIDtcblx0XHR0aGlzLnJlYXNvbiA9IHJlYXNvbi50b1N0cmluZygpIDtcblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdCA7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uIDtcblxuXHR9XG5cbn1cbiJdfQ==