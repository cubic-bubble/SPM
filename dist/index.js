"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var all_localstorage_1 = __importDefault(require("all-localstorage"));
var lps_1 = require("@cubic-bubble/lps");
/**
 * Check metadata schema
 *
 */
function isValidMetadata(metadata) {
    return true;
}
/**
 * Check process data schema
 *
 */
function isValidProcess(process) {
    return true;
}
function isEmpty(entry) {
    // Test empty array or object
    if (typeof entry !== 'object')
        return false;
    return Array.isArray(entry) ?
        !entry.length
        : Object.keys(entry).length === 0 && entry.constructor === Object;
}
var CPRConnect = /** @class */ (function () {
    function CPRConnect(options) {
        this.version = 1;
        if (options.version)
            this.version = options.version;
        if (options.hostname)
            this.hostname = options.hostname;
        if (options.accessToken)
            this.accessToken = options.accessToken;
        if (options.anchorToken)
            this.anchorToken = options.anchorToken;
        this.scope = [];
        this.manifest = {};
        this.baseURL = "".concat(this.hostname, "/v").concat(this.version);
    }
    CPRConnect.prototype.connect = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var options, url, _e, error, message, scope, manifest, _f, _g, error_1;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _h.trys.push([0, 7, , 8]);
                        options = {
                            method: 'GET',
                            headers: {
                                'Authorization': "Bearer ".concat(this.accessToken),
                                'Content-Type': 'application/json'
                            }
                        }, url = "".concat(this.baseURL, "/pipe?atoken=").concat(this.anchorToken);
                        return [4 /*yield*/, window.fetch(url, options)];
                    case 1: return [4 /*yield*/, (_h.sent()).json()];
                    case 2:
                        _e = _h.sent(), error = _e.error, message = _e.message, scope = _e.scope, manifest = _e.manifest;
                        if (error) {
                            console.error(message);
                            return [2 /*return*/, false];
                        }
                        this.scope = scope;
                        this.manifest = manifest;
                        _f = ((_b = (_a = this.manifest) === null || _a === void 0 ? void 0 : _a.js) === null || _b === void 0 ? void 0 : _b.length);
                        if (!_f) return [3 /*break*/, 4];
                        return [4 /*yield*/, Promise.all(this.manifest.js.map(function (src) {
                                return new Promise(function (resolve, reject) {
                                    var _a;
                                    var script = document.createElement('script');
                                    script.type = 'module';
                                    script.src = src;
                                    script.defer = true;
                                    script.onload = resolve;
                                    script.onerror = reject;
                                    (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.appendChild(script);
                                });
                            }))];
                    case 3:
                        _f = (_h.sent());
                        _h.label = 4;
                    case 4:
                        _f;
                        _g = ((_d = (_c = this.manifest) === null || _c === void 0 ? void 0 : _c.css) === null || _d === void 0 ? void 0 : _d.length);
                        if (!_g) return [3 /*break*/, 6];
                        return [4 /*yield*/, Promise.all(this.manifest.css.map(function (href) {
                                return new Promise(function (resolve, reject) {
                                    var _a;
                                    var link = document.createElement('link');
                                    link.rel = 'type/css';
                                    link.href = href;
                                    link.onload = resolve;
                                    link.onerror = reject;
                                    (_a = document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.appendChild(link);
                                });
                            }))];
                    case 5:
                        _g = (_h.sent());
                        _h.label = 6;
                    case 6:
                        _g;
                        return [2 /*return*/, true];
                    case 7:
                        error_1 = _h.sent();
                        console.log('Failed connecting to repository. Check your credentials or your internet: ', error_1);
                        return [2 /*return*/, false];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return CPRConnect;
}());
var emiter = new events_1.EventEmitter;
var EventHanlder = /** @class */ (function (_super) {
    __extends(EventHanlder, _super);
    function EventHanlder() {
        var _this = _super.call(this) || this;
        // public on = emiter.on
        _this.emit = emiter.emit;
        return _this;
    }
    return EventHanlder;
}(events_1.EventEmitter));
var SPM = /** @class */ (function (_super) {
    __extends(SPM, _super);
    /**
     * Initialize process manager state
     * variables, cache, fetch & load installed
     * packages.
     *
     * @param {Object} options
     *    - CPR   Access configuration to Cubic Package
     *            Repository: { server, version, anchorToken }
     *    - LPS   Locale Package Store client
     *    - UAT   User Account Type
     */
    function SPM(options) {
        var _this = _super.call(this) || this;
        if (!options.CPR)
            throw new Error('Undefined <CPR> configuration');
        if (!options.UAT)
            throw new Error('Undefined <UAT> configuration');
        _this.UAT = options.UAT;
        // Local Package Storage
        _this.LPS = new lps_1.Client(options.LPS);
        // Connect to provided package repository
        _this.CPR = new CPRConnect(options.CPR);
        // In-browser environment cache
        _this.cache = new all_localstorage_1.default({ prefix: 'cpm-cache', encrypt: true });
        _this.cacheName = "".concat(_this.UAT.toLowerCase(), "-process");
        _this.__PROCESS_THREADS = _this.cache.get(_this.cacheName) || {};
        _this.__ACTIVE_APPLICATIONS = {};
        _this.__FLASH_APPLICATIONS = _this.cache.get("".concat(_this.cacheName, "-temp")) || {};
        _this.__MIMETYPE_SUPPORT = {};
        return _this;
    }
    /**
     * Fetch and register all installed packages
     * to process threads list
     */
    SPM.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.LPS.fetch()];
                    case 1:
                        list = _b.sent();
                        _a = Array.isArray(list);
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, Promise.all(list.map(function (metadata) {
                                var process = {
                                    loaded: false,
                                    status: 'LATENT',
                                    metadata: metadata,
                                    argv: {},
                                    stats: {}
                                };
                                _this.register.bind(_this)(process);
                            }))
                            // Close all temporary loaded apps
                        ];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        _a;
                        // Close all temporary loaded apps
                        Object.keys(this.__FLASH_APPLICATIONS).map(this.quit.bind(this));
                        // Connect to package repository
                        return [4 /*yield*/, this.CPR.connect()];
                    case 4:
                        // Connect to package repository
                        _b.sent();
                        this.emit('ready');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Return all existing process threads
     * state details
     */
    SPM.prototype.threads = function () { return Object.values(this.__PROCESS_THREADS); };
    /**
     * Return all loaded process theads
     * state details
     */
    SPM.prototype.loaded = function () { return Object.values(this.__PROCESS_THREADS).filter(function (_a) {
        var loaded = _a.loaded;
        return loaded;
    }); };
    /**
     * Return a list of process theads
     * state details by their current status
     *
     * @param {String} status   Process status: `LATENT`, `ACTIVE`, `STALLED`
     *
     */
    SPM.prototype.filter = function (status) { return Object.values(this.__PROCESS_THREADS).filter(function (each) { return each.status == status; }); };
    /**
     * Check whether a given process thread
     * exists
     *
     * @param {String} sid   Store id of installed package
     *
     */
    SPM.prototype.exists = function (sid) { return !!this.__PROCESS_THREADS[sid]; };
    /**
     * Check whether an application requires
     * or have a missing permissions
     *
     * @param {Object} metadata
     *
     */
    SPM.prototype.requirePermission = function (_a) {
        var resource = _a.resource;
        return resource
            && resource.permissions
            && resource.permissions.scope
            && resource.permissions.scope.length
            && resource.permissions.scope.filter(function (each) {
                return typeof each == 'string'
                    || (typeof each == 'object' && each.type && !each.access);
            }).length;
    };
    /**
     * Make an external request to get
     * authorization for mandatory permissions
     *
     * @param {String} type        Type of permission: `scope`, `feat`, `context`, ...
     * @param {Object} requestor   Metadata of package requesting permissions
     * @param {Array} list        List of mandatory permissions
     *
     */
    SPM.prototype.askPermission = function (type, requestor, list) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.emit('permission-request', { type: type, requestor: requestor, list: list }, resolve);
        });
    };
    /**
     * Generate public access URL of a favicon
     * asset deployed on a CPR
     *
     * @param {Object} metadata
     *
     */
    SPM.prototype.favicon = function (metadata) {
        if (!isValidMetadata(metadata))
            return '';
        var namespace = metadata.namespace, nsi = metadata.nsi, version = metadata.version, favicon = metadata.favicon;
        return "".concat(this.CPR.hostname, "/").concat(namespace, "/").concat(nsi, "~").concat(version, "/").concat(favicon);
    };
    /**
     * Register new process thread
     *
     * @param {Object} process
     *
     * NOTE: Requires & await for mandatory
     *       permissions to complete the registration
     */
    SPM.prototype.register = function (process) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, sid, type, name, runscript, resource, list;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!isValidProcess(process))
                            return [2 /*return*/, false];
                        _b = process.metadata, sid = _b.sid, type = _b.type, name = _b.name, runscript = _b.runscript, resource = _b.resource;
                        if (!sid)
                            return [2 /*return*/, false];
                        if (this.__ACTIVE_APPLICATIONS[name]) {
                            // Throw process already exist alert
                            this.emit('alert', 'PROCESS_EXIST', process.metadata);
                            return [2 /*return*/, false];
                        }
                        if (!((resource === null || resource === void 0 ? void 0 : resource.permissions) && this.requirePermission(process.metadata))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.askPermission('scope', process.metadata, (_a = resource === null || resource === void 0 ? void 0 : resource.permissions) === null || _a === void 0 ? void 0 : _a.scope)];
                    case 1:
                        list = _c.sent();
                        if (!Array.isArray(list)) return [3 /*break*/, 3];
                        resource.permissions.scope = list;
                        return [4 /*yield*/, this.LPS.update(sid, { resource: resource })];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        this.__PROCESS_THREADS[sid] = process;
                        // Maintain a dedicated list of applications process ids: Auto-loadable or not
                        if (type == 'application') {
                            this.__ACTIVE_APPLICATIONS[name] = sid;
                            if (resource && resource.services && !isEmpty(resource.services)) {
                                // Application that can `EDIT` file or data
                                Array.isArray(resource.services.editor)
                                    && resource.services.editor.map(function (mime) {
                                        if (!_this.__MIMETYPE_SUPPORT[mime])
                                            _this.__MIMETYPE_SUPPORT[mime] = [];
                                        _this.__MIMETYPE_SUPPORT[mime].push({ sid: sid, name: name, type: 'editor' });
                                    });
                                // Application that can `READ` file or data
                                Array.isArray(resource.services.reader)
                                    && resource.services.reader.map(function (mime) {
                                        if (!_this.__MIMETYPE_SUPPORT[mime])
                                            _this.__MIMETYPE_SUPPORT[mime] = [];
                                        _this.__MIMETYPE_SUPPORT[mime].push({ sid: sid, name: name, type: 'reader' });
                                    });
                            }
                        }
                        /**
                         * Register globally all auto-loadable processes
                         * define by "runscript" configurations.
                         */
                        if (runscript
                            && ((runscript[this.UAT] && runscript[this.UAT].autoload) // Specific account
                                || (runscript['*'] && runscript['*'].autoload))) { // All account
                            this.__PROCESS_THREADS[sid].loaded = true;
                            this.emit('refresh', { loaded: this.loaded(), actives: this.filter('ACTIVE') });
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Unregister a process
     *
     * @param {String} sid   Store id of installed package
     *                       Use as process ID as well
     *
     */
    SPM.prototype.unregister = function (sid) {
        if (!this.__PROCESS_THREADS[sid])
            return;
        var _a = this.__PROCESS_THREADS[sid], loaded = _a.loaded, metadata = _a.metadata;
        delete this.__PROCESS_THREADS[sid];
        // Close auto-loaded application if running
        if (!loaded || !this.quit(metadata.name))
            return;
        delete this.__ACTIVE_APPLICATIONS[metadata.name];
        this.emit('refresh', { loaded: this.loaded(), actives: this.filter('ACTIVE') });
    };
    /**
     * Return a given process metadata
     *
     * @param {String} query   Match metadata `sid`, `name` or `nsi`
     *
     */
    SPM.prototype.metadata = function (query) {
        // Retreive a given process metadata by sid or name or nsi
        for (var sid in this.__PROCESS_THREADS) {
            var metadata = this.__PROCESS_THREADS[sid].metadata;
            if (query == sid
                || metadata.nsi == query
                || metadata.name == query)
                return __assign(__assign({}, metadata), { favicon: this.favicon(metadata) });
        }
        // Workspace alert message
        this.emit('alert', 'PROCESS_NOT_FOUND', query);
        return null;
    };
    /**
     * Unregister a process
     *
     * @param {String} type   Opening data or file MIME type
     * @param {Object} argv   Input argument variables to run the process
     *
     */
    SPM.prototype.open = function (type, argv) {
        if (argv === void 0) { argv = {}; }
        if (!Array.isArray(this.__MIMETYPE_SUPPORT[type])) {
            console.log('[EXT]: No process to read this datatype found');
            return false;
        }
        for (var o = 0; o < this.__MIMETYPE_SUPPORT[type].length; o++)
            if (this.__MIMETYPE_SUPPORT[type][o].defaultHandler) {
                this.run(this.__MIMETYPE_SUPPORT[type][o].name, argv);
                return true;
            }
        // Select first handler by default
        this.run(this.__MIMETYPE_SUPPORT[type][0].name, argv);
        return true;
    };
    /**
     * Spawn a new process
     *
     * @param {String} sid    User installed package store ID as process ID
     * @param {Object} argv   Input argument variables to run the process
     *
     */
    SPM.prototype.spawn = function (sid, argv) {
        if (argv === void 0) { argv = {}; }
        if (!this.__PROCESS_THREADS[sid])
            throw new Error("Process <".concat(sid, "> not found"));
        var ActiveProcesses = this.filter('ACTIVE'), hightIndex = ActiveProcesses.length > 1 ? Math.max.apply(Math, (ActiveProcesses.map(function (_a) {
            var index = _a.index;
            return index;
        }))) : ActiveProcesses.length;
        // Clear notification badge event
        this.emit('notification-clear', sid);
        // Default workspace view mode
        var WSMode = false;
        // Activate a new process
        if (this.__PROCESS_THREADS[sid].status !== 'ACTIVE') {
            this.__PROCESS_THREADS[sid] = __assign(__assign({}, this.__PROCESS_THREADS[sid]), { status: 'ACTIVE', argv: argv });
            // Process has a default workspace view mode
            var runscript = this.__PROCESS_THREADS[sid].metadata.runscript;
            WSMode = runscript
                && (runscript.workspace
                    || (runscript[this.UAT] && runscript[this.UAT].workspace)
                    || (runscript['*'] && runscript['*'].workspace));
        }
        // No re-indexing required when 0 or only 1 process thread is active
        else if (hightIndex <= 1) {
            // Update the `argv` of this active process
            if (argv) {
                this.__PROCESS_THREADS[sid].argv = argv;
                this.cache.set(this.cacheName, this.__PROCESS_THREADS);
                this.emit('refresh', { loaded: this.loaded(), actives: this.filter('ACTIVE') });
            }
            return;
        }
        this.__PROCESS_THREADS[sid].index = hightIndex + 1; // Position targeted view block to the top
        this.cache.set(this.cacheName, this.__PROCESS_THREADS);
        this.emit('refresh', { loaded: this.loaded(), actives: this.filter('ACTIVE') });
        (!ActiveProcesses.length || WSMode) && this.emit('ws-mode', { mode: WSMode || 'auto' });
    };
    /**
     * Refresh a running process in-memory
     * metadata with LPS metadata
     *
     * @param {String} sid    Installed package store ID used as process ID
     *
     */
    SPM.prototype.refresh = function (sid) {
        return __awaiter(this, void 0, void 0, function () {
            var metadata, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.LPS.get({ sid: sid })];
                    case 1:
                        metadata = _a.sent();
                        if (!metadata)
                            throw new Error('Unexpected Error Occured');
                        // Replace process metadata
                        this.__PROCESS_THREADS[sid].metadata = metadata;
                        // Re-run the process with current argv if active
                        this.__PROCESS_THREADS[sid].status == 'ACTIVE'
                            && this.spawn(sid, this.__PROCESS_THREADS[sid].argv);
                        this.emit('refresh', { loaded: this.loaded(), actives: this.filter('ACTIVE') });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log('Failed Refreshing Process: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Kill a running process
     *
     * @param {String} sid    Installed package store ID used as process ID
     *
     */
    SPM.prototype.kill = function (sid) {
        // Is not active
        if (this.__PROCESS_THREADS[sid].status !== 'ACTIVE')
            return false;
        // Send quit signal to the application
        this.emit('signal', sid, 'USER:QUIT');
        this.__PROCESS_THREADS[sid] = __assign(__assign({}, this.__PROCESS_THREADS[sid]), { status: 'LATENT', argv: {} });
        this.cache.set(this.cacheName, this.__PROCESS_THREADS);
        // Delete process in case it has flash flag
        if (this.__FLASH_APPLICATIONS[sid]) {
            this.__PROCESS_THREADS[sid].loaded = false;
            delete this.__FLASH_APPLICATIONS[sid];
            this.cache.set("".concat(this.cacheName, "-temp"), this.__FLASH_APPLICATIONS);
        }
        this.emit('refresh', { loaded: this.loaded(), actives: this.filter('ACTIVE') });
        this.emit('ws-mode', { mode: !this.filter('ACTIVE').length ? 'ns' : 'auto' });
        return true;
    };
    /**
     * Run an application
     *
     * @param {String} name    App name
     * @param {Object} argv    Input argument variables to run the app
     *
     */
    SPM.prototype.run = function (name, argv) {
        var _this = this;
        if (argv === void 0) { argv = {}; }
        if (!this.__ACTIVE_APPLICATIONS[name]) {
            this.emit('alert', 'APPLICATION_NOT_FOUND', name);
            return false;
        }
        var sid = this.__ACTIVE_APPLICATIONS[name];
        // Start new process
        this.spawn(sid, argv);
        // Temporary load application to loaded list: Get removed when quit
        if (!this.__PROCESS_THREADS[sid].loaded) {
            this.__PROCESS_THREADS[sid].loaded = true;
            this.__FLASH_APPLICATIONS[sid] = this.__PROCESS_THREADS[sid].metadata.name;
            this.cache.set("".concat(this.cacheName, "-temp"), this.__FLASH_APPLICATIONS);
            this.cache.set(this.cacheName, this.__PROCESS_THREADS);
            this.emit('refresh', { loaded: this.loaded(), actives: this.filter('ACTIVE') });
        }
        // Provide chain control methods of running process
        return {
            quit: function () { return _this.quit.bind(_this)(name); },
            refresh: function () { return _this.refresh.bind(_this)(sid); }
        };
    };
    /**
     * Quit an application
     *
     * @param {String} name    App name
     *
     */
    SPM.prototype.quit = function (name) {
        if (!this.__ACTIVE_APPLICATIONS[name]) {
            // Throw no found process alert
            this.emit('alert', 'APPLICATION_NOT_FOUND', name);
            return false;
        }
        this.kill(this.__ACTIVE_APPLICATIONS[name]);
        return true;
    };
    return SPM;
}(EventHanlder));
exports.default = SPM;
