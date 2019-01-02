"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Promise
var timerPromise = new Promise(function (resolve, reject) {
    console.log('async function of promise is running');
    setTimeout(function () {
        resolve('hello world');
        // reject(new Error('dfsgsdfg'));
    }, 1000);
});
// listener to the promise
var returnedFromThen = timerPromise.then(
//success - resolve
function (msg) {
    console.log(msg);
    // return msg.length
    // Promise<Response>
    return fetch('https://www.google.com');
}, 
// fail - reject
function (err) {
    throw new Error('another error');
}).then(function (res) {
    return true;
}, function () {
});
timerPromise
    .then()
    .then()
    .then();
// Observable
var intervalObservable = rxjs_1.Observable.create(function (observer) {
    console.log('async function of observable is running');
    var counter = 0;
    var intervalId = setInterval(function () {
        observer.next(counter);
        if (counter > 5) {
            observer.error(new Error('error'));
        }
        // observer.error(new Error('error happened'))
        // observer.complete();
        counter++;
    }, 1000);
    return function tearDownFunction() {
        clearInterval(intervalId);
    };
});
// listener to observable
var myIntervalSubscription = intervalObservable.subscribe(
// next
function (counter) { console.log(counter); }, 
// error
function (err) {
    console.log('error function!!!');
}, 
// complete
function () {
    console.log('closing the data stream');
});
// Observable VS Promise
// Observable is lazy
// Promise is eager
var sub2 = intervalObservable.subscribe();
// Observable VS Promise
// observable duplicates data stream for every listener
// promise there is one data stream
// Observable VS Promise
// Observable is cancelable
// Promise is not cancelable
// how do we close data stream / observable? 
// from the observable
// 1 - complete
// 2 - error
// from the outside
// 3 - unsubscribe
setTimeout(function () {
    console.log('closing the second subscription');
    sub2.unsubscribe();
}, 3000);
// Operators
//
// this operator will transform the data of the interval observable from number to string
var intervalObservable2 = rxjs_1.interval(1000);
var intervalStringObs = intervalObservable2.pipe(operators_1.map(function (num) { return num.toString(); }));
// Subject
// represents data stream like observable
// subject does not wrap async function
// i call the next error complete throught the subject instance
// subject is like promise one for many listeners - data stream is not duplicated
var intervalSubject = new rxjs_1.Subject();
var counterForSubject = 0;
setInterval(function () {
    intervalSubject.next(counterForSubject);
    counterForSubject++;
}, 1000);
intervalSubject.subscribe(function (counter) {
    console.log(counter);
});
intervalSubject.subscribe();
intervalSubject.complete();
intervalSubject.unsubscribe();
// when to use promise and when observable
// from observable to promise
intervalObservable2.toPromise();
function veriatyOfPromises() {
    return __awaiter(this, void 0, void 0, function () {
        var num, res, items, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, timerPromise];
                case 1:
                    num = _a.sent();
                    console.log(num);
                    return [4 /*yield*/, fetch('https://sadfds.safa')];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    items = _a.sent();
                    return [2 /*return*/, true];
                case 4:
                    err_1 = _a.sent();
                    return [2 /*return*/, 10];
                case 5: return [2 /*return*/];
            }
        });
    });
}
