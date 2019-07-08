/*!
* rete v1.4.0 
* (c) 2019 Vitaliy Stoliarov 
* Released under the MIT license.
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Component = function Component(name) {
  _classCallCheck(this, Component);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "data", {});

  _defineProperty(this, "engine", null);

  this.name = name;
};

var Node =
/*#__PURE__*/
function () {
  function Node(name) {
    _classCallCheck(this, Node);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "position", [0.0, 0.0]);

    _defineProperty(this, "inputs", new Map());

    _defineProperty(this, "outputs", new Map());

    _defineProperty(this, "controls", new Map());

    _defineProperty(this, "data", {});

    _defineProperty(this, "meta", {});

    this.name = name;
    this.id = Node.incrementId();
  }

  _createClass(Node, [{
    key: "_add",
    value: function _add(list, item, prop) {
      if (list.has(item.key)) throw new Error("Item with key '".concat(item.key, "' already been added to the node"));
      if (item[prop] !== null) throw new Error('Item has already been added to some node');
      item[prop] = this;
      list.set(item.key, item);
    }
  }, {
    key: "addControl",
    value: function addControl(control) {
      this._add(this.controls, control, 'parent');

      return this;
    }
  }, {
    key: "removeControl",
    value: function removeControl(control) {
      control.parent = null;
      this.controls["delete"](control.key);
    }
  }, {
    key: "addInput",
    value: function addInput(input) {
      this._add(this.inputs, input, 'node');

      return this;
    }
  }, {
    key: "removeInput",
    value: function removeInput(input) {
      input.removeConnections();
      input.node = null;
      this.inputs["delete"](input.key);
    }
  }, {
    key: "addOutput",
    value: function addOutput(output) {
      this._add(this.outputs, output, 'node');

      return this;
    }
  }, {
    key: "removeOutput",
    value: function removeOutput(output) {
      output.removeConnections();
      output.node = null;
      this.outputs["delete"](output.key);
    }
  }, {
    key: "getConnections",
    value: function getConnections() {
      var ios = [].concat(_toConsumableArray(this.inputs.values()), _toConsumableArray(this.outputs.values()));
      var connections = ios.reduce(function (arr, io) {
        return [].concat(_toConsumableArray(arr), _toConsumableArray(io.connections));
      }, []);
      return connections;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "toJSON",
    value: function toJSON() {
      var reduceIO = function reduceIO(list) {
        return Array.from(list).reduce(function (obj, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              io = _ref2[1];

          obj[key] = io.toJSON();
          return obj;
        }, {});
      };

      return {
        'id': this.id,
        'data': this.data,
        'inputs': reduceIO(this.inputs),
        'outputs': reduceIO(this.outputs),
        'position': this.position,
        'name': this.name
      };
    }
  }], [{
    key: "incrementId",
    value: function incrementId() {
      if (!this.latestId) this.latestId = 1;else this.latestId++;
      return this.latestId;
    }
  }, {
    key: "resetId",
    value: function resetId() {
      this.latestId = 0;
    }
  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      var node = new Node(json.name);

      var _json$position = _slicedToArray(json.position, 2),
          x = _json$position[0],
          y = _json$position[1];

      node.id = json.id;
      node.data = json.data;
      node.position = [x, y];
      node.name = json.name;
      Node.latestId = Math.max(node.id, Node.latestId);
      return node;
    }
  }]);

  return Node;
}();

_defineProperty(Node, "latestId", 0);

var Component$1 =
/*#__PURE__*/
function (_ComponentWorker) {
  _inherits(Component, _ComponentWorker);

  function Component(name) {
    var _this;

    _classCallCheck(this, Component);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, name));

    _defineProperty(_assertThisInitialized(_this), "editor", null);

    _defineProperty(_assertThisInitialized(_this), "data", {});

    return _this;
  }

  _createClass(Component, [{
    key: "build",
    value: function () {
      var _build = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(node) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.builder(node);

              case 2:
                return _context.abrupt("return", node);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function build(_x) {
        return _build.apply(this, arguments);
      }

      return build;
    }()
  }, {
    key: "createNode",
    value: function () {
      var _createNode = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var data,
            node,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                node = new Node(this.name);
                node.data = data;
                _context2.next = 5;
                return this.build(node);

              case 5:
                return _context2.abrupt("return", node);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createNode() {
        return _createNode.apply(this, arguments);
      }

      return createNode;
    }()
  }]);

  return Component;
}(Component);

var Connection =
/*#__PURE__*/
function () {
  function Connection(output, input) {
    _classCallCheck(this, Connection);

    _defineProperty(this, "output", void 0);

    _defineProperty(this, "input", void 0);

    _defineProperty(this, "data", {});

    this.output = output;
    this.input = input;
    this.data = {};
    this.input.addConnection(this);
  }

  _createClass(Connection, [{
    key: "remove",
    value: function remove() {
      this.input.removeConnection(this);
      this.output.removeConnection(this);
    }
  }]);

  return Connection;
}();

var Control =
/*#__PURE__*/
function () {
  function Control(key) {
    _classCallCheck(this, Control);

    _defineProperty(this, "key", void 0);

    _defineProperty(this, "data", {});

    _defineProperty(this, "parent", null);

    if (this.constructor === Control) throw new TypeError('Can not construct abstract class');
    if (!key) throw new Error('The key parameter is missing in super() of Control ');
    this.key = key;
  }

  _createClass(Control, [{
    key: "getNode",
    value: function getNode() {
      if (this.parent === null) throw new Error('Control isn\'t added to Node/Input');
      if (this.parent instanceof Node) return this.parent;
      if (!this.parent.node) throw new Error('Control hasn\'t be added to Input or Node');
      return this.parent.node;
    }
  }, {
    key: "getData",
    value: function getData(key) {
      return this.getNode().data[key];
    }
  }, {
    key: "putData",
    value: function putData(key, data) {
      this.getNode().data[key] = data;
    }
  }]);

  return Control;
}();

var Emitter =
/*#__PURE__*/
function () {
  function Emitter(events) {
    _classCallCheck(this, Emitter);

    _defineProperty(this, "events", {});

    _defineProperty(this, "silent", false);

    this.events = events instanceof Emitter ? events.events : events.handlers;
  }

  _createClass(Emitter, [{
    key: "on",
    value: function on(names, handler) {
      var _this = this;

      var events = names instanceof Array ? names : names.split(' ');
      events.forEach(function (name) {
        if (!_this.events[name]) throw new Error("The event ".concat(name, " does not exist"));

        _this.events[name].push(handler);
      });
      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(name) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!(name in this.events)) throw new Error("The event ".concat(name, " cannot be triggered"));
      return this.events[name].reduce(function (r, e) {
        return e(params) !== false && r;
      }, true); // return false if at least one event is false        
    }
  }, {
    key: "bind",
    value: function bind(name) {
      if (this.events[name]) throw new Error("The event ".concat(name, " is already bound"));
      this.events[name] = [];
    }
  }, {
    key: "exist",
    value: function exist(name) {
      return Array.isArray(this.events[name]);
    }
  }]);

  return Emitter;
}();

var IO =
/*#__PURE__*/
function () {
  function IO(key, name, socket, multiConns) {
    _classCallCheck(this, IO);

    _defineProperty(this, "node", null);

    _defineProperty(this, "multipleConnections", void 0);

    _defineProperty(this, "connections", []);

    _defineProperty(this, "key", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "socket", void 0);

    this.node = null;
    this.multipleConnections = multiConns;
    this.connections = [];
    this.key = key;
    this.name = name;
    this.socket = socket;
  }

  _createClass(IO, [{
    key: "removeConnection",
    value: function removeConnection(connection) {
      this.connections.splice(this.connections.indexOf(connection), 1);
    }
  }, {
    key: "removeConnections",
    value: function removeConnections() {
      var _this = this;

      this.connections.forEach(function (connection) {
        return _this.removeConnection(connection);
      });
    }
  }]);

  return IO;
}();

var Input =
/*#__PURE__*/
function (_IO) {
  _inherits(Input, _IO);

  function Input(key, title, socket) {
    var _this;

    var multiConns = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, key, title, socket, multiConns));

    _defineProperty(_assertThisInitialized(_this), "control", null);

    return _this;
  }

  _createClass(Input, [{
    key: "hasConnection",
    value: function hasConnection() {
      return this.connections.length > 0;
    }
  }, {
    key: "addConnection",
    value: function addConnection(connection) {
      if (!this.multipleConnections && this.hasConnection()) throw new Error('Multiple connections not allowed');
      this.connections.push(connection);
    }
  }, {
    key: "addControl",
    value: function addControl(control) {
      this.control = control;
      control.parent = this;
    }
  }, {
    key: "showControl",
    value: function showControl() {
      return !this.hasConnection() && this.control !== null;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        'connections': this.connections.map(function (c) {
          if (!c.output.node) throw new Error('Node not added to Output');
          return {
            node: c.output.node.id,
            output: c.output.key,
            data: c.data
          };
        })
      };
    }
  }]);

  return Input;
}(IO);

var Validator =
/*#__PURE__*/
function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, null, [{
    key: "isValidData",
    value: function isValidData(data) {
      return typeof data.id === 'string' && this.isValidId(data.id) && data.nodes instanceof Object && !(data.nodes instanceof Array);
    }
  }, {
    key: "isValidId",
    value: function isValidId(id) {
      return /^[\w-]{3,}@[0-9]+\.[0-9]+\.[0-9]+$/.test(id);
    }
  }, {
    key: "validate",
    value: function validate(id, data) {
      var id1 = id.split('@');
      var id2 = data.id.split('@');
      var msg = [];
      if (!this.isValidData(data)) msg.push('Data is not suitable');
      if (id !== data.id) msg.push('IDs not equal');
      if (id1[0] !== id2[0]) msg.push('Names don\'t match');
      if (id1[1] !== id2[1]) msg.push('Versions don\'t match');
      return {
        success: Boolean(!msg.length),
        msg: msg.join('. ')
      };
    }
  }]);

  return Validator;
}();

var Context =
/*#__PURE__*/
function (_Emitter) {
  _inherits(Context, _Emitter);

  function Context(id, events) {
    var _this;

    _classCallCheck(this, Context);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Context).call(this, events));

    _defineProperty(_assertThisInitialized(_this), "id", void 0);

    _defineProperty(_assertThisInitialized(_this), "plugins", void 0);

    _defineProperty(_assertThisInitialized(_this), "components", void 0);

    if (!Validator.isValidId(id)) throw new Error('ID should be valid to name@0.1.0 format');
    _this.id = id;
    _this.plugins = new Map();
    _this.components = new Map();
    return _this;
  }

  _createClass(Context, [{
    key: "use",
    value: function use(plugin, options) {
      if (plugin.name && this.plugins.has(plugin.name)) throw new Error("Plugin ".concat(plugin.name, " already in use"));
      plugin.install(this, options || {});
      this.plugins.set(plugin.name, options);
    }
  }, {
    key: "register",
    value: function register(component) {
      if (this.components.has(component.name)) throw new Error("Component ".concat(component.name, " already registered"));
      this.components.set(component.name, component);
      this.trigger('componentregister', component);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.trigger('destroy');
    }
  }]);

  return Context;
}(Emitter);

function listenWindow(event, handler) {
  window.addEventListener(event, handler);
  return function () {
    window.removeEventListener(event, handler);
  };
}

var Drag =
/*#__PURE__*/
function () {
  function Drag(el) {
    var onTranslate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_x, _y, _e) {};
    var onStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_e) {};
    var onDrag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (_e) {};

    _classCallCheck(this, Drag);

    this.onTranslate = onTranslate;
    this.onStart = onStart;
    this.onDrag = onDrag;

    _defineProperty(this, "pointerStart", void 0);

    _defineProperty(this, "el", void 0);

    _defineProperty(this, "destroy", void 0);

    this.pointerStart = null;
    this.el = el;
    this.destroy = this.initEvents();
  }

  _createClass(Drag, [{
    key: "initEvents",
    value: function initEvents() {
      this.el.style.touchAction = 'none';
      this.el.addEventListener('pointerdown', this.down.bind(this));
      var destroyMove = listenWindow('pointermove', this.move.bind(this));
      var destroyUp = listenWindow('pointerup', this.up.bind(this));
      return function () {
        destroyMove();
        destroyUp();
      };
    }
  }, {
    key: "down",
    value: function down(e) {
      e.stopPropagation();
      this.pointerStart = [e.pageX, e.pageY];
      this.onStart(e);
    }
  }, {
    key: "move",
    value: function move(e) {
      if (!this.pointerStart) return;
      e.preventDefault();
      var _ref = [e.pageX, e.pageY],
          x = _ref[0],
          y = _ref[1];
      var delta = [x - this.pointerStart[0], y - this.pointerStart[1]];
      var zoom = this.el.getBoundingClientRect().width / this.el.offsetWidth;
      this.onTranslate(delta[0] / zoom, delta[1] / zoom, e);
    }
  }, {
    key: "up",
    value: function up(e) {
      if (!this.pointerStart) return;
      this.pointerStart = null;
      this.onDrag(e);
    }
  }]);

  return Drag;
}();

var Zoom =
/*#__PURE__*/
function () {
  function Zoom(container, el, intensity, onzoom, onlock) {
    _classCallCheck(this, Zoom);

    _defineProperty(this, "el", void 0);

    _defineProperty(this, "intensity", void 0);

    _defineProperty(this, "onzoom", void 0);

    _defineProperty(this, "onlock", void 0);

    _defineProperty(this, "previous", null);

    _defineProperty(this, "pointers", []);

    this.el = el;
    this.intensity = intensity;
    this.onzoom = onzoom;
    this.onlock = onlock;
    container.addEventListener('wheel', this.wheel.bind(this));
    container.addEventListener('pointerdown', this.down.bind(this));
    container.addEventListener('pointermove', this.move.bind(this));
    container.addEventListener('pointerup', this.end.bind(this));
    container.addEventListener('pointercancel', this.end.bind(this));
    container.addEventListener('dblclick', this.dblclick.bind(this));
  }

  _createClass(Zoom, [{
    key: "wheel",
    value: function wheel(e) {
      e.preventDefault();
      var rect = this.el.getBoundingClientRect();
      var wheelDelta = e.wheelDelta;
      var delta = (wheelDelta ? wheelDelta / 120 : -e.deltaY / 3) * this.intensity;
      var ox = (rect.left - e.clientX) * delta;
      var oy = (rect.top - e.clientY) * delta;
      this.onzoom(delta, ox, oy, 'wheel');
    }
  }, {
    key: "touches",
    value: function touches() {
      var e = {
        touches: this.pointers
      };
      var _ref = [e.touches[0].clientX, e.touches[0].clientY],
          x1 = _ref[0],
          y1 = _ref[1];
      var _ref2 = [e.touches[1].clientX, e.touches[1].clientY],
          x2 = _ref2[0],
          y2 = _ref2[1];
      var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
      return {
        cx: (x1 + x2) / 2,
        cy: (y1 + y2) / 2,
        distance: distance
      };
    }
  }, {
    key: "down",
    value: function down(e) {
      this.pointers.push(e);

      if (this.pointers.length > 1) {
        this.onlock(true);
      }
    }
  }, {
    key: "move",
    value: function move(e) {
      this.pointers = this.pointers.map(function (p) {
        return p.pointerId === e.pointerId ? e : p;
      });
      if (this.pointers.length < 2) return;
      var rect = this.el.getBoundingClientRect();

      var _this$touches = this.touches(),
          cx = _this$touches.cx,
          cy = _this$touches.cy,
          distance = _this$touches.distance;

      if (this.previous !== null) {
        var delta = distance / this.previous.distance - 1;
        var ox = (rect.left - cx) * delta;
        var oy = (rect.top - cy) * delta;
        this.onzoom(delta, ox - (this.previous.cx - cx), oy - (this.previous.cy - cy), 'touch');
      }

      this.previous = {
        cx: cx,
        cy: cy,
        distance: distance
      };
    }
  }, {
    key: "end",
    value: function end(e) {
      this.previous = null;
      this.onlock(false);
      this.pointers = this.pointers.filter(function (p) {
        return p.pointerId !== e.pointerId;
      });
    }
  }, {
    key: "dblclick",
    value: function dblclick(e) {
      e.preventDefault();
      var rect = this.el.getBoundingClientRect();
      var delta = 4 * this.intensity;
      var ox = (rect.left - e.clientX) * delta;
      var oy = (rect.top - e.clientY) * delta;
      this.onzoom(delta, ox, oy, 'dblclick');
    }
  }]);

  return Zoom;
}();

var Area =
/*#__PURE__*/
function (_Emitter) {
  _inherits(Area, _Emitter);

  function Area(container, emitter) {
    var _this;

    _classCallCheck(this, Area);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Area).call(this, emitter));

    _defineProperty(_assertThisInitialized(_this), "el", void 0);

    _defineProperty(_assertThisInitialized(_this), "container", void 0);

    _defineProperty(_assertThisInitialized(_this), "transform", {
      k: 1,
      x: 0,
      y: 0
    });

    _defineProperty(_assertThisInitialized(_this), "mouse", {
      x: 0,
      y: 0
    });

    _defineProperty(_assertThisInitialized(_this), "_startPosition", null);

    _defineProperty(_assertThisInitialized(_this), "_lockTranslate", false);

    var el = _this.el = document.createElement('div');
    _this.container = container;
    el.style.transformOrigin = '0 0';
    new Zoom(container, el, 0.1, _this.onZoom.bind(_assertThisInitialized(_this)), function (isLock) {
      return _this._lockTranslate = isLock;
    });
    var drag = new Drag(container, _this.onTranslate.bind(_assertThisInitialized(_this)), _this.onStart.bind(_assertThisInitialized(_this)));
    emitter.on('destroy', drag.destroy);

    _this.container.addEventListener('pointermove', _this.pointermove.bind(_assertThisInitialized(_this)));

    _this.update();

    return _this;
  }

  _createClass(Area, [{
    key: "update",
    value: function update() {
      var t = this.transform;
      this.el.style.transform = "translate3D(".concat(t.x, "px, ").concat(t.y, "px, 0) scale(").concat(t.k, ")");
    }
  }, {
    key: "pointermove",
    value: function pointermove(e) {
      var clientX = e.clientX,
          clientY = e.clientY;
      var rect = this.el.getBoundingClientRect();
      var x = clientX - rect.left;
      var y = clientY - rect.top;
      var k = this.transform.k;
      this.mouse = {
        x: x / k,
        y: y / k
      };
      this.trigger('mousemove', _objectSpread({}, this.mouse)); // TODO rename on `pointermove`
    }
  }, {
    key: "onStart",
    value: function onStart() {
      this._startPosition = _objectSpread({}, this.transform);
    }
  }, {
    key: "onTranslate",
    value: function onTranslate(dx, dy) {
      if (this._lockTranslate) return;
      if (this._startPosition) this.translate(this._startPosition.x + dx, this._startPosition.y + dy);
    }
  }, {
    key: "onZoom",
    value: function onZoom(delta, ox, oy, source) {
      this.zoom(this.transform.k * (1 + delta), ox, oy, source);
      this.update();
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      var params = {
        transform: this.transform,
        x: x,
        y: y
      };
      if (!this.trigger('translate', params)) return;
      this.transform.x = params.x;
      this.transform.y = params.y;
      this.update();
      this.trigger('translated');
    }
  }, {
    key: "zoom",
    value: function zoom(_zoom) {
      var ox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var oy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var source = arguments.length > 3 ? arguments[3] : undefined;
      var k = this.transform.k;
      var params = {
        transform: this.transform,
        zoom: _zoom,
        source: source
      };
      if (!this.trigger('zoom', params)) return;
      var d = (k - params.zoom) / (k - _zoom || 1);
      this.transform.k = params.zoom || 1;
      this.transform.x += ox * d;
      this.transform.y += oy * d;
      this.update();
      this.trigger('zoomed', {
        source: source
      });
    }
  }, {
    key: "appendChild",
    value: function appendChild(el) {
      this.el.appendChild(el);
    }
  }, {
    key: "removeChild",
    value: function removeChild(el) {
      this.el.removeChild(el);
    }
  }]);

  return Area;
}(Emitter);

var ConnectionView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(ConnectionView, _Emitter);

  function ConnectionView(connection, inputNode, outputNode, emitter) {
    var _this;

    _classCallCheck(this, ConnectionView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectionView).call(this, emitter));

    _defineProperty(_assertThisInitialized(_this), "connection", void 0);

    _defineProperty(_assertThisInitialized(_this), "inputNode", void 0);

    _defineProperty(_assertThisInitialized(_this), "outputNode", void 0);

    _defineProperty(_assertThisInitialized(_this), "el", void 0);

    _this.connection = connection;
    _this.inputNode = inputNode;
    _this.outputNode = outputNode;
    _this.el = document.createElement('div');
    _this.el.style.position = 'absolute';
    _this.el.style.zIndex = '-1';

    _this.trigger('renderconnection', {
      el: _this.el,
      connection: _this.connection,
      points: _this.getPoints()
    });

    return _this;
  }

  _createClass(ConnectionView, [{
    key: "getPoints",
    value: function getPoints() {
      var _this$outputNode$getS = this.outputNode.getSocketPosition(this.connection.output),
          _this$outputNode$getS2 = _slicedToArray(_this$outputNode$getS, 2),
          x1 = _this$outputNode$getS2[0],
          y1 = _this$outputNode$getS2[1];

      var _this$inputNode$getSo = this.inputNode.getSocketPosition(this.connection.input),
          _this$inputNode$getSo2 = _slicedToArray(_this$inputNode$getSo, 2),
          x2 = _this$inputNode$getSo2[0],
          y2 = _this$inputNode$getSo2[1];

      return [x1, y1, x2, y2];
    }
  }, {
    key: "update",
    value: function update() {
      this.trigger('updateconnection', {
        el: this.el,
        connection: this.connection,
        points: this.getPoints()
      });
    }
  }]);

  return ConnectionView;
}(Emitter);

var ControlView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(ControlView, _Emitter);

  function ControlView(el, control, emitter) {
    var _this;

    _classCallCheck(this, ControlView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ControlView).call(this, emitter));

    _this.trigger('rendercontrol', {
      el: el,
      control: control
    });

    return _this;
  }

  return ControlView;
}(Emitter);

var SocketView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(SocketView, _Emitter);

  function SocketView(el, type, io, node, emitter) {
    var _this$trigger;

    var _this;

    _classCallCheck(this, SocketView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SocketView).call(this, emitter));

    _defineProperty(_assertThisInitialized(_this), "el", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "io", void 0);

    _defineProperty(_assertThisInitialized(_this), "node", void 0);

    _this.el = el;
    _this.type = type;
    _this.io = io;
    _this.node = node;

    _this.trigger('rendersocket', (_this$trigger = {
      el: el
    }, _defineProperty(_this$trigger, type, _this.io), _defineProperty(_this$trigger, "socket", io.socket), _this$trigger));

    return _this;
  }

  _createClass(SocketView, [{
    key: "getPosition",
    value: function getPosition(_ref) {
      var position = _ref.position;
      var el = this.el;
      return [position[0] + el.offsetLeft + el.offsetWidth / 2, position[1] + el.offsetTop + el.offsetHeight / 2];
    }
  }]);

  return SocketView;
}(Emitter);

var NodeView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(NodeView, _Emitter);

  function NodeView(node, component, emitter) {
    var _this;

    _classCallCheck(this, NodeView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeView).call(this, emitter));

    _defineProperty(_assertThisInitialized(_this), "node", void 0);

    _defineProperty(_assertThisInitialized(_this), "component", void 0);

    _defineProperty(_assertThisInitialized(_this), "sockets", new Map());

    _defineProperty(_assertThisInitialized(_this), "controls", new Map());

    _defineProperty(_assertThisInitialized(_this), "el", void 0);

    _defineProperty(_assertThisInitialized(_this), "_startPosition", []);

    _this.node = node;
    _this.component = component;
    _this.el = document.createElement('div');
    _this.el.style.position = 'absolute';

    _this.el.addEventListener('contextmenu', function (e) {
      return _this.trigger('contextmenu', {
        e: e,
        node: _this.node
      });
    });

    var drag = new Drag(_this.el, _this.onTranslate.bind(_assertThisInitialized(_this)), _this.onSelect.bind(_assertThisInitialized(_this)), function () {
      _this.trigger('nodedraged', node);
    });
    emitter.on('noderemoved', function (n) {
      return n.id === node.id && drag.destroy();
    });

    _this.trigger('rendernode', {
      el: _this.el,
      node: node,
      component: component.data,
      bindSocket: _this.bindSocket.bind(_assertThisInitialized(_this)),
      bindControl: _this.bindControl.bind(_assertThisInitialized(_this))
    });

    _this.update();

    return _this;
  }

  _createClass(NodeView, [{
    key: "clearSockets",
    value: function clearSockets() {
      var _this2 = this;

      var ios = [].concat(_toConsumableArray(this.node.inputs.values()), _toConsumableArray(this.node.outputs.values()));
      this.sockets.forEach(function (s) {
        if (!ios.includes(s.io)) _this2.sockets["delete"](s.io);
      });
    }
  }, {
    key: "bindSocket",
    value: function bindSocket(el, type, io) {
      this.clearSockets();
      this.sockets.set(io, new SocketView(el, type, io, this.node, this));
    }
  }, {
    key: "bindControl",
    value: function bindControl(el, control) {
      this.controls.set(control, new ControlView(el, control, this));
    }
  }, {
    key: "getSocketPosition",
    value: function getSocketPosition(io) {
      var socket = this.sockets.get(io);
      if (!socket) throw new Error("Socket not fount for ".concat(io.name, " with key ").concat(io.key));
      return socket.getPosition(this.node);
    }
  }, {
    key: "onSelect",
    value: function onSelect(e) {
      this.onStart();
      this.trigger('selectnode', {
        node: this.node,
        accumulate: e.ctrlKey
      });
    }
  }, {
    key: "onStart",
    value: function onStart() {
      this._startPosition = _toConsumableArray(this.node.position);
    }
  }, {
    key: "onTranslate",
    value: function onTranslate(dx, dy) {
      this.trigger('translatenode', {
        node: this.node,
        dx: dx,
        dy: dy
      });
    }
  }, {
    key: "onDrag",
    value: function onDrag(dx, dy) {
      var x = this._startPosition[0] + dx;
      var y = this._startPosition[1] + dy;
      this.translate(x, y);
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      var node = this.node;
      var params = {
        node: node,
        x: x,
        y: y
      };
      if (!this.trigger('nodetranslate', params)) return;

      var _node$position = _slicedToArray(node.position, 2),
          px = _node$position[0],
          py = _node$position[1];

      var prev = [px, py];
      node.position[0] = params.x;
      node.position[1] = params.y;
      this.update();
      this.trigger('nodetranslated', {
        node: node,
        prev: prev
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this$node$position = _slicedToArray(this.node.position, 2),
          x = _this$node$position[0],
          y = _this$node$position[1];

      this.el.style.transform = "translate3D(".concat(x, "px, ").concat(y, "px, 0)");
    }
  }, {
    key: "remove",
    value: function remove() {}
  }]);

  return NodeView;
}(Emitter);

var EditorView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(EditorView, _Emitter);

  function EditorView(container, components, emitter) {
    var _this;

    _classCallCheck(this, EditorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditorView).call(this, emitter));

    _defineProperty(_assertThisInitialized(_this), "container", void 0);

    _defineProperty(_assertThisInitialized(_this), "components", void 0);

    _defineProperty(_assertThisInitialized(_this), "nodes", new Map());

    _defineProperty(_assertThisInitialized(_this), "connections", new Map());

    _defineProperty(_assertThisInitialized(_this), "area", void 0);

    _this.container = container;
    _this.components = components;
    _this.container.style.overflow = 'hidden';

    _this.container.addEventListener('click', _this.click.bind(_assertThisInitialized(_this)));

    _this.container.addEventListener('contextmenu', function (e) {
      return _this.trigger('contextmenu', {
        e: e,
        view: _assertThisInitialized(_this)
      });
    });

    emitter.on('destroy', listenWindow('resize', _this.resize.bind(_assertThisInitialized(_this))));

    _this.on('nodetranslated', _this.updateConnections.bind(_assertThisInitialized(_this)));

    _this.area = new Area(container, _assertThisInitialized(_this));

    _this.container.appendChild(_this.area.el);

    return _this;
  }

  _createClass(EditorView, [{
    key: "addNode",
    value: function addNode(node) {
      var component = this.components.get(node.name);
      if (!component) throw new Error("Component ".concat(node.name, " not found"));
      var nodeView = new NodeView(node, component, this);
      this.nodes.set(node, nodeView);
      this.area.appendChild(nodeView.el);
    }
  }, {
    key: "removeNode",
    value: function removeNode(node) {
      var nodeView = this.nodes.get(node);
      this.nodes["delete"](node);
      if (nodeView) this.area.removeChild(nodeView.el);
    }
  }, {
    key: "addConnection",
    value: function addConnection(connection) {
      if (!connection.input.node || !connection.output.node) throw new Error('Connection input or output not added to node');
      var viewInput = this.nodes.get(connection.input.node);
      var viewOutput = this.nodes.get(connection.output.node);
      if (!viewInput || !viewOutput) throw new Error('View node not fount for input or output');
      var connView = new ConnectionView(connection, viewInput, viewOutput, this);
      this.connections.set(connection, connView);
      this.area.appendChild(connView.el);
    }
  }, {
    key: "removeConnection",
    value: function removeConnection(connection) {
      var connView = this.connections.get(connection);
      this.connections["delete"](connection);
      if (connView) this.area.removeChild(connView.el);
    }
  }, {
    key: "updateConnections",
    value: function updateConnections(_ref) {
      var _this2 = this;

      var node = _ref.node;
      node.getConnections().forEach(function (conn) {
        var connView = _this2.connections.get(conn);

        if (!connView) throw new Error('Connection view not found');
        connView.update();
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var container = this.container;
      if (!container.parentElement) throw new Error('Container doesn\'t have parent element');
      var width = container.parentElement.clientWidth;
      var height = container.parentElement.clientHeight;
      container.style.width = width + 'px';
      container.style.height = height + 'px';
    }
  }, {
    key: "click",
    value: function click(e) {
      var container = this.container;
      if (container !== e.target) return;
      if (!this.trigger('click', {
        e: e,
        container: container
      })) return;
    }
  }]);

  return EditorView;
}(Emitter);

var Selected =
/*#__PURE__*/
function () {
  function Selected() {
    _classCallCheck(this, Selected);

    _defineProperty(this, "list", []);
  }

  _createClass(Selected, [{
    key: "add",
    value: function add(item) {
      var accumulate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!accumulate) this.list = [item];else if (!this.contains(item)) this.list.push(item);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.list = [];
    }
  }, {
    key: "remove",
    value: function remove(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }
  }, {
    key: "contains",
    value: function contains(item) {
      return this.list.indexOf(item) !== -1;
    }
  }, {
    key: "each",
    value: function each(callback) {
      this.list.forEach(callback);
    }
  }]);

  return Selected;
}();

var Events = function Events(handlers) {
  _classCallCheck(this, Events);

  _defineProperty(this, "handlers", void 0);

  this.handlers = _objectSpread({
    warn: [console.warn],
    error: [console.error],
    componentregister: [],
    destroy: []
  }, handlers);
};

var EditorEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(EditorEvents, _Events);

  function EditorEvents() {
    _classCallCheck(this, EditorEvents);

    return _possibleConstructorReturn(this, _getPrototypeOf(EditorEvents).call(this, {
      nodecreate: [],
      nodecreated: [],
      noderemove: [],
      noderemoved: [],
      connectioncreate: [],
      connectioncreated: [],
      connectionremove: [],
      connectionremoved: [],
      translatenode: [],
      nodetranslate: [],
      nodetranslated: [],
      nodedraged: [],
      selectnode: [],
      nodeselect: [],
      nodeselected: [],
      rendernode: [],
      rendersocket: [],
      rendercontrol: [],
      renderconnection: [],
      updateconnection: [],
      keydown: [],
      keyup: [],
      translate: [],
      translated: [],
      zoom: [],
      zoomed: [],
      click: [],
      mousemove: [],
      contextmenu: [],
      "import": [],
      "export": [],
      process: []
    }));
  }

  return EditorEvents;
}(Events);

var NodeEditor =
/*#__PURE__*/
function (_Context) {
  _inherits(NodeEditor, _Context);

  function NodeEditor(id, container) {
    var _this;

    _classCallCheck(this, NodeEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeEditor).call(this, id, new EditorEvents()));

    _defineProperty(_assertThisInitialized(_this), "nodes", []);

    _defineProperty(_assertThisInitialized(_this), "selected", new Selected());

    _defineProperty(_assertThisInitialized(_this), "view", void 0);

    _this.view = new EditorView(container, _this.components, _assertThisInitialized(_this));

    _this.on('destroy', listenWindow('keydown', function (e) {
      return _this.trigger('keydown', e);
    }));

    _this.on('destroy', listenWindow('keyup', function (e) {
      return _this.trigger('keyup', e);
    }));

    _this.on('selectnode', function (_ref) {
      var node = _ref.node,
          accumulate = _ref.accumulate;
      return _this.selectNode(node, accumulate);
    });

    _this.on('nodeselected', function () {
      return _this.selected.each(function (n) {
        var nodeView = _this.view.nodes.get(n);

        nodeView && nodeView.onStart();
      });
    });

    _this.on('translatenode', function (_ref2) {
      var dx = _ref2.dx,
          dy = _ref2.dy;
      return _this.selected.each(function (n) {
        var nodeView = _this.view.nodes.get(n);

        nodeView && nodeView.onDrag(dx, dy);
      });
    });

    return _this;
  }

  _createClass(NodeEditor, [{
    key: "addNode",
    value: function addNode(node) {
      if (!this.trigger('nodecreate', node)) return;
      this.nodes.push(node);
      this.view.addNode(node);
      this.trigger('nodecreated', node);
    }
  }, {
    key: "removeNode",
    value: function removeNode(node) {
      var _this2 = this;

      if (!this.trigger('noderemove', node)) return;
      node.getConnections().forEach(function (c) {
        return _this2.removeConnection(c);
      });
      this.nodes.splice(this.nodes.indexOf(node), 1);
      this.view.removeNode(node);
      this.trigger('noderemoved', node);
    }
  }, {
    key: "connect",
    value: function connect(output, input) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!this.trigger('connectioncreate', {
        output: output,
        input: input
      })) return;

      try {
        var connection = output.connectTo(input);
        connection.data = data;
        this.view.addConnection(connection);
        this.trigger('connectioncreated', connection);
      } catch (e) {
        this.trigger('warn', e);
      }
    }
  }, {
    key: "removeConnection",
    value: function removeConnection(connection) {
      if (!this.trigger('connectionremove', connection)) return;
      this.view.removeConnection(connection);
      connection.remove();
      this.trigger('connectionremoved', connection);
    }
  }, {
    key: "selectNode",
    value: function selectNode(node) {
      var accumulate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.nodes.indexOf(node) === -1) throw new Error('Node not exist in list');
      if (!this.trigger('nodeselect', node)) return;
      this.selected.add(node, accumulate);
      this.trigger('nodeselected', node);
    }
  }, {
    key: "getComponent",
    value: function getComponent(name) {
      var component = this.components.get(name);
      if (!component) throw "Component ".concat(name, " not found");
      return component;
    }
  }, {
    key: "register",
    value: function register(component) {
      _get(_getPrototypeOf(NodeEditor.prototype), "register", this).call(this, component);

      component.editor = this;
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this3 = this;

      _toConsumableArray(this.nodes).forEach(function (node) {
        return _this3.removeNode(node);
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var data = {
        id: this.id,
        nodes: {}
      };
      this.nodes.forEach(function (node) {
        return data.nodes[node.id] = node.toJSON();
      });
      this.trigger('export', data);
      return data;
    }
  }, {
    key: "beforeImport",
    value: function beforeImport(json) {
      var checking = Validator.validate(this.id, json);

      if (!checking.success) {
        this.trigger('warn', checking.msg);
        return false;
      }

      this.silent = true;
      this.clear();
      this.trigger('import', json);
      return true;
    }
  }, {
    key: "afterImport",
    value: function afterImport() {
      this.silent = false;
      return true;
    }
  }, {
    key: "fromJSON",
    value: function () {
      var _fromJSON = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(json) {
        var _this4 = this;

        var nodes;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.beforeImport(json)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", false);

              case 2:
                nodes = {};
                _context2.prev = 3;
                _context2.next = 6;
                return Promise.all(Object.keys(json.nodes).map(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(id) {
                    var node, component;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            node = json.nodes[id];
                            component = _this4.getComponent(node.name);
                            _context.next = 4;
                            return component.build(Node.fromJSON(node));

                          case 4:
                            nodes[id] = _context.sent;

                            _this4.addNode(nodes[id]);

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 6:
                Object.keys(json.nodes).forEach(function (id) {
                  var jsonNode = json.nodes[id];
                  var node = nodes[id];
                  Object.keys(jsonNode.outputs).forEach(function (key) {
                    var outputJson = jsonNode.outputs[key];
                    outputJson.connections.forEach(function (jsonConnection) {
                      var nodeId = jsonConnection.node;
                      var data = jsonConnection.data;
                      var targetOutput = node.outputs.get(key);
                      var targetInput = nodes[nodeId].inputs.get(jsonConnection.input);

                      if (!targetOutput || !targetInput) {
                        return _this4.trigger('error', "IO not found for node ".concat(node.id));
                      }

                      _this4.connect(targetOutput, targetInput, data);
                    });
                  });
                });
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](3);
                this.trigger('warn', _context2.t0);
                return _context2.abrupt("return", !this.afterImport());

              case 13:
                return _context2.abrupt("return", this.afterImport());

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 9]]);
      }));

      function fromJSON(_x) {
        return _fromJSON.apply(this, arguments);
      }

      return fromJSON;
    }()
  }]);

  return NodeEditor;
}(Context);

var Output =
/*#__PURE__*/
function (_IO) {
  _inherits(Output, _IO);

  function Output(key, title, socket) {
    var multiConns = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, Output);

    return _possibleConstructorReturn(this, _getPrototypeOf(Output).call(this, key, title, socket, multiConns));
  }

  _createClass(Output, [{
    key: "hasConnection",
    value: function hasConnection() {
      return this.connections.length > 0;
    }
  }, {
    key: "connectTo",
    value: function connectTo(input) {
      if (!this.socket.compatibleWith(input.socket)) throw new Error('Sockets not compatible');
      if (!input.multipleConnections && input.hasConnection()) throw new Error('Input already has one connection');
      if (!this.multipleConnections && this.hasConnection()) throw new Error('Output already has one connection');
      var connection = new Connection(this, input);
      this.connections.push(connection);
      return connection;
    }
  }, {
    key: "connectedTo",
    value: function connectedTo(input) {
      return this.connections.some(function (item) {
        return item.input === input;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        'connections': this.connections.map(function (c) {
          if (!c.input.node) throw new Error('Node not added to Input');
          return {
            node: c.input.node.id,
            input: c.input.key,
            data: c.data
          };
        })
      };
    }
  }]);

  return Output;
}(IO);

var Socket =
/*#__PURE__*/
function () {
  function Socket(name) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Socket);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "compatible", []);

    this.name = name;
    this.data = data;
    this.compatible = [];
  }

  _createClass(Socket, [{
    key: "combineWith",
    value: function combineWith(socket) {
      this.compatible.push(socket);
    }
  }, {
    key: "compatibleWith",
    value: function compatibleWith(socket) {
      return this === socket || this.compatible.includes(socket);
    }
  }]);

  return Socket;
}();

function intersect(array1, array2) {
  return array1.filter(function (value) {
    return -1 !== array2.indexOf(value);
  });
}

var Recursion =
/*#__PURE__*/
function () {
  function Recursion(nodes) {
    _classCallCheck(this, Recursion);

    _defineProperty(this, "nodes", void 0);

    this.nodes = nodes;
  }

  _createClass(Recursion, [{
    key: "extractInputNodes",
    value: function extractInputNodes(node) {
      var _this = this;

      return Object.keys(node.inputs).reduce(function (acc, key) {
        var connections = node.inputs[key].connections;
        var nodesData = (connections || []).reduce(function (b, c) {
          return [].concat(_toConsumableArray(b), [_this.nodes[c.node]]);
        }, []);
        return [].concat(_toConsumableArray(acc), _toConsumableArray(nodesData));
      }, []);
    }
  }, {
    key: "findSelf",
    value: function findSelf(list, inputNodes) {
      var inters = intersect(list, inputNodes);
      if (inters.length) return inters[0];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = inputNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var node = _step.value;
          var l = [node].concat(_toConsumableArray(list));
          var inter = this.findSelf(l, this.extractInputNodes(node));
          if (inter) return inter;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
  }, {
    key: "detect",
    value: function detect() {
      var _this2 = this;

      var nodesArr = Object.keys(this.nodes).map(function (id) {
        return _this2.nodes[id];
      });
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = nodesArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var node = _step2.value;
          var inters = this.findSelf([node], this.extractInputNodes(node));
          if (inters) return inters;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }
  }]);

  return Recursion;
}();

var State = {
  AVAILABLE: 0,
  PROCESSED: 1,
  ABORT: 2
};

var EngineEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(EngineEvents, _Events);

  function EngineEvents() {
    _classCallCheck(this, EngineEvents);

    return _possibleConstructorReturn(this, _getPrototypeOf(EngineEvents).call(this, {}));
  }

  return EngineEvents;
}(Events);

var Engine =
/*#__PURE__*/
function (_Context) {
  _inherits(Engine, _Context);

  function Engine(id) {
    var _this;

    _classCallCheck(this, Engine);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Engine).call(this, id, new EngineEvents()));

    _defineProperty(_assertThisInitialized(_this), "args", []);

    _defineProperty(_assertThisInitialized(_this), "data", null);

    _defineProperty(_assertThisInitialized(_this), "state", State.AVAILABLE);

    _defineProperty(_assertThisInitialized(_this), "onAbort", function () {});

    return _this;
  }

  _createClass(Engine, [{
    key: "clone",
    value: function clone() {
      var engine = new Engine(this.id);
      this.components.forEach(function (c) {
        return engine.register(c);
      });
      return engine;
    }
  }, {
    key: "throwError",
    value: function () {
      var _throwError = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(message) {
        var data,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                _context.next = 3;
                return this.abort();

              case 3:
                this.trigger('error', {
                  message: message,
                  data: data
                });
                this.processDone();
                return _context.abrupt("return", 'error');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function throwError(_x) {
        return _throwError.apply(this, arguments);
      }

      return throwError;
    }()
  }, {
    key: "processStart",
    value: function processStart() {
      if (this.state === State.AVAILABLE) {
        this.state = State.PROCESSED;
        return true;
      }

      if (this.state === State.ABORT) {
        return false;
      }

      console.warn("The process is busy and has not been restarted.\n                Use abort() to force it to complete");
      return false;
    }
  }, {
    key: "processDone",
    value: function processDone() {
      var success = this.state !== State.ABORT;
      this.state = State.AVAILABLE;

      if (!success) {
        this.onAbort();

        this.onAbort = function () {};
      }

      return success;
    }
  }, {
    key: "abort",
    value: function () {
      var _abort = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (ret) {
                  if (_this2.state === State.PROCESSED) {
                    _this2.state = State.ABORT;
                    _this2.onAbort = ret;
                  } else if (_this2.state === State.ABORT) {
                    _this2.onAbort();

                    _this2.onAbort = ret;
                  } else ret();
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function abort() {
        return _abort.apply(this, arguments);
      }

      return abort;
    }()
  }, {
    key: "lock",
    value: function () {
      var _lock = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(node) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (res) {
                  node.unlockPool = node.unlockPool || [];
                  if (node.busy && !node.outputData) node.unlockPool.push(res);else res();
                  node.busy = true;
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function lock(_x2) {
        return _lock.apply(this, arguments);
      }

      return lock;
    }()
  }, {
    key: "unlock",
    value: function unlock(node) {
      node.unlockPool.forEach(function (a) {
        return a();
      });
      node.unlockPool = [];
      node.busy = false;
    }
  }, {
    key: "extractInputData",
    value: function () {
      var _extractInputData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(node) {
        var _this3 = this;

        var obj, _i, _Object$keys, key, input, conns, connData;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                obj = {};
                _i = 0, _Object$keys = Object.keys(node.inputs);

              case 2:
                if (!(_i < _Object$keys.length)) {
                  _context5.next = 13;
                  break;
                }

                key = _Object$keys[_i];
                input = node.inputs[key];
                conns = input.connections;
                _context5.next = 8;
                return Promise.all(conns.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee4(c) {
                    var prevNode, outputs;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            prevNode = _this3.data.nodes[c.node];
                            _context4.next = 3;
                            return _this3.processNode(prevNode);

                          case 3:
                            outputs = _context4.sent;

                            if (outputs) {
                              _context4.next = 8;
                              break;
                            }

                            _this3.abort();

                            _context4.next = 9;
                            break;

                          case 8:
                            return _context4.abrupt("return", outputs[c.output]);

                          case 9:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x4) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 8:
                connData = _context5.sent;
                obj[key] = connData;

              case 10:
                _i++;
                _context5.next = 2;
                break;

              case 13:
                return _context5.abrupt("return", obj);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function extractInputData(_x3) {
        return _extractInputData.apply(this, arguments);
      }

      return extractInputData;
    }()
  }, {
    key: "processWorker",
    value: function () {
      var _processWorker = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(node) {
        var inputData, component, outputData;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.extractInputData(node);

              case 2:
                inputData = _context6.sent;
                component = this.components.get(node.name);
                outputData = {};
                _context6.prev = 5;
                _context6.next = 8;
                return component.worker.apply(component, [node, inputData, outputData].concat(_toConsumableArray(this.args)));

              case 8:
                _context6.next = 14;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](5);
                this.abort();
                this.trigger('warn', _context6.t0);

              case 14:
                return _context6.abrupt("return", outputData);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[5, 10]]);
      }));

      function processWorker(_x5) {
        return _processWorker.apply(this, arguments);
      }

      return processWorker;
    }()
  }, {
    key: "processNode",
    value: function () {
      var _processNode = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(node) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(this.state === State.ABORT || !node)) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return", null);

              case 2:
                _context7.next = 4;
                return this.lock(node);

              case 4:
                if (node.outputData) {
                  _context7.next = 8;
                  break;
                }

                _context7.next = 7;
                return this.processWorker(node);

              case 7:
                node.outputData = _context7.sent;

              case 8:
                this.unlock(node);
                return _context7.abrupt("return", node.outputData);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function processNode(_x6) {
        return _processNode.apply(this, arguments);
      }

      return processNode;
    }()
  }, {
    key: "forwardProcess",
    value: function () {
      var _forwardProcess = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(node) {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(this.state === State.ABORT)) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt("return", null);

              case 2:
                _context10.next = 4;
                return Promise.all(Object.keys(node.outputs).map(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee9(key) {
                    var output;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            output = node.outputs[key];
                            _context9.next = 3;
                            return Promise.all(output.connections.map(
                            /*#__PURE__*/
                            function () {
                              var _ref3 = _asyncToGenerator(
                              /*#__PURE__*/
                              regeneratorRuntime.mark(function _callee8(c) {
                                var nextNode;
                                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                  while (1) {
                                    switch (_context8.prev = _context8.next) {
                                      case 0:
                                        nextNode = _this4.data.nodes[c.node];
                                        _context8.next = 3;
                                        return _this4.processNode(nextNode);

                                      case 3:
                                        _context8.next = 5;
                                        return _this4.forwardProcess(nextNode);

                                      case 5:
                                      case "end":
                                        return _context8.stop();
                                    }
                                  }
                                }, _callee8);
                              }));

                              return function (_x9) {
                                return _ref3.apply(this, arguments);
                              };
                            }()));

                          case 3:
                            return _context9.abrupt("return", _context9.sent);

                          case 4:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x8) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 4:
                return _context10.abrupt("return", _context10.sent);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function forwardProcess(_x7) {
        return _forwardProcess.apply(this, arguments);
      }

      return forwardProcess;
    }()
  }, {
    key: "copy",
    value: function copy(data) {
      data = Object.assign({}, data);
      data.nodes = Object.assign({}, data.nodes);
      Object.keys(data.nodes).forEach(function (key) {
        data.nodes[key] = Object.assign({}, data.nodes[key]);
      });
      return data;
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(data) {
        var checking, recursion, recurrentNode;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                checking = Validator.validate(this.id, data);
                recursion = new Recursion(data.nodes);

                if (checking.success) {
                  _context11.next = 6;
                  break;
                }

                _context11.next = 5;
                return this.throwError(checking.msg);

              case 5:
                return _context11.abrupt("return", _context11.sent);

              case 6:
                recurrentNode = recursion.detect();

                if (!recurrentNode) {
                  _context11.next = 11;
                  break;
                }

                _context11.next = 10;
                return this.throwError('Recursion detected', recurrentNode);

              case 10:
                return _context11.abrupt("return", _context11.sent);

              case 11:
                return _context11.abrupt("return", true);

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function validate(_x10) {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "processStartNode",
    value: function () {
      var _processStartNode = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(id) {
        var startNode;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (id) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt("return");

              case 2:
                startNode = this.data.nodes[id];

                if (startNode) {
                  _context12.next = 7;
                  break;
                }

                _context12.next = 6;
                return this.throwError('Node with such id not found');

              case 6:
                return _context12.abrupt("return", _context12.sent);

              case 7:
                _context12.next = 9;
                return this.processNode(startNode);

              case 9:
                _context12.next = 11;
                return this.forwardProcess(startNode);

              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function processStartNode(_x11) {
        return _processStartNode.apply(this, arguments);
      }

      return processStartNode;
    }()
  }, {
    key: "processUnreachable",
    value: function () {
      var _processUnreachable = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13() {
        var data, i, node;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                data = this.data;
                _context13.t0 = regeneratorRuntime.keys(data.nodes);

              case 2:
                if ((_context13.t1 = _context13.t0()).done) {
                  _context13.next = 12;
                  break;
                }

                i = _context13.t1.value;
                // process nodes that have not been reached
                node = data.nodes[i];

                if (!(typeof node.outputData === 'undefined')) {
                  _context13.next = 10;
                  break;
                }

                _context13.next = 8;
                return this.processNode(node);

              case 8:
                _context13.next = 10;
                return this.forwardProcess(node);

              case 10:
                _context13.next = 2;
                break;

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function processUnreachable() {
        return _processUnreachable.apply(this, arguments);
      }

      return processUnreachable;
    }()
  }, {
    key: "process",
    value: function () {
      var _process = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14(data) {
        var startId,
            _len,
            args,
            _key,
            _args14 = arguments;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                startId = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : null;

                if (this.processStart()) {
                  _context14.next = 3;
                  break;
                }

                return _context14.abrupt("return");

              case 3:
                if (this.validate(data)) {
                  _context14.next = 5;
                  break;
                }

                return _context14.abrupt("return");

              case 5:
                this.data = this.copy(data);

                for (_len = _args14.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                  args[_key - 2] = _args14[_key];
                }

                this.args = args;
                _context14.next = 10;
                return this.processStartNode(startId);

              case 10:
                _context14.next = 12;
                return this.processUnreachable();

              case 12:
                return _context14.abrupt("return", this.processDone() ? 'success' : 'aborted');

              case 13:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function process(_x12) {
        return _process.apply(this, arguments);
      }

      return process;
    }()
  }]);

  return Engine;
}(Context);

var index = {
  Engine: Engine,
  Recursion: Recursion,
  Component: Component$1,
  Control: Control,
  Connection: Connection,
  Emitter: Emitter,
  Input: Input,
  IO: IO,
  Node: Node,
  NodeEditor: NodeEditor,
  Output: Output,
  Socket: Socket
};

exports.Component = Component$1;
exports.Connection = Connection;
exports.Control = Control;
exports.Emitter = Emitter;
exports.Engine = Engine;
exports.IO = IO;
exports.Input = Input;
exports.Node = Node;
exports.NodeEditor = NodeEditor;
exports.Output = Output;
exports.Recursion = Recursion;
exports.Socket = Socket;
exports.default = index;
//# sourceMappingURL=rete.common.js.map
