'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Data = function () {
  function Data() {
    _classCallCheck(this, Data);

    this.machine = {};
  }
  // { id: '110', vel: 'vel1', speed: 'speed1' }


  _createClass(Data, [{
    key: 'set',
    value: function set(data) {
      var id = data['id'];
      delete data['id'];
      var new_data = {};
      new_data[id] = data;
      this.machine = Object.assign(this.machine, new_data);
    }
  }, {
    key: 'get',
    value: function get(id) {
      return this.machine[id];
    }
  }]);

  return Data;
}();

var data = exports.data = new Data();