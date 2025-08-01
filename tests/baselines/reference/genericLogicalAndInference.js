//// [tests/cases/conformance/types/typeRelationships/typeInference/genericLogicalAndInference.ts] ////

//// [genericLogicalAndInference.ts]
// Repro from #62133

function test1<T>(x: T) {
    var r1 = x && x;
    return r1;
}

function test2<T extends string | null>(x: T) {
    var r2 = x && x;
    return r2;
}

function test3<T extends object>(x: T) {
    var r3 = x && x;
    return r3;
}

function test4<T>(x: T, y: string) {
    var r4 = x && y;
    return r4;
}

var r1 = test1("hello");
var r2 = test1(null);
var r3 = test1(undefined);
var r4 = test1(42);

var r5 = test2("test");
var r6 = test2(null);

var r7 = test3({a: 1});

var r8 = test4(null, "hello");

var f1 = <T>(x: T) => x && x;
var f2 = <T extends string | null>(x: T) => x && x;

var f3 = <T extends undefined>(x: (() => void) | T) => x && (() => x());
var f4 = <T extends undefined, U extends undefined>(x: (() => void) | T, y: (() => void) | U) => x && y && (() => { x(); y() });


//// [genericLogicalAndInference.js]
// Repro from #62133
function test1(x) {
    var r1 = x && x;
    return r1;
}
function test2(x) {
    var r2 = x && x;
    return r2;
}
function test3(x) {
    var r3 = x && x;
    return r3;
}
function test4(x, y) {
    var r4 = x && y;
    return r4;
}
var r1 = test1("hello");
var r2 = test1(null);
var r3 = test1(undefined);
var r4 = test1(42);
var r5 = test2("test");
var r6 = test2(null);
var r7 = test3({ a: 1 });
var r8 = test4(null, "hello");
var f1 = function (x) { return x && x; };
var f2 = function (x) { return x && x; };
var f3 = function (x) { return x && (function () { return x(); }); };
var f4 = function (x, y) { return x && y && (function () { x(); y(); }); };
