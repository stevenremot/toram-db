define(["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("ToramDb-Tests");
$core.packages["ToramDb-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["ToramDb-Tests"].transport = {"type":"amd","amdNamespace":"amber-toramdb"};

$core.addClass("ToramDbModelTest", $globals.TestCase, [], "ToramDb-Tests");
$core.addMethod(
$core.method({
selector: "testAdd",
protocol: "testing",
fn: function(){
var self=this,$self=this;
var model,record;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
model=$recv($globals.ToramDbModel)._new();
record=$recv($globals.ToramDbRecord)._withName_monsters_places_("a","","");
$recv(model)._add_(record);
$self._assert_equals_($recv($recv(model)._records())._at_((1)),record);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAdd",{model:model,record:record},$globals.ToramDbModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAdd\x0a\x09| model record |\x0a\x09model := ToramDbModel new.\x0a\x09record := ToramDbRecord\x0a\x09\x09withName: 'a'\x0a\x09\x09monsters: ''\x0a\x09\x09places: ''.\x0a\x09\x09\x0a\x09model add: record.\x0a\x09\x0a\x09self assert: (model records at: 1) equals: record.",
referencedClasses: ["ToramDbModel", "ToramDbRecord"],
//>>excludeEnd("ide");
messageSends: ["new", "withName:monsters:places:", "add:", "assert:equals:", "at:", "records"]
}),
$globals.ToramDbModelTest);

$core.addMethod(
$core.method({
selector: "testAt",
protocol: "testing",
fn: function(){
var self=this,$self=this;
var model,record;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
model=$recv($globals.ToramDbModel)._new();
record=$recv($globals.ToramDbRecord)._withName_monsters_places_("a","","");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withName:monsters:places:"]=1;
//>>excludeEnd("ctx");
$recv(model)._records_([record,$recv($globals.ToramDbRecord)._withName_monsters_places_("b","","")]);
$self._assert_equals_($recv(model)._at_("a"),record);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAt",{model:model,record:record},$globals.ToramDbModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAt\x0a\x09| model record |\x0a\x09model := ToramDbModel new.\x0a\x09record := ToramDbRecord withName: 'a' monsters: '' places: '' .\x0a\x09\x0a\x09model records: {\x0a\x09\x09record .\x0a\x09\x09ToramDbRecord withName: 'b' monsters: '' places: ''\x0a\x09}.\x0a\x09\x0a\x09self assert: (model at: 'a') equals: record.\x0a\x09\x09",
referencedClasses: ["ToramDbModel", "ToramDbRecord"],
//>>excludeEnd("ide");
messageSends: ["new", "withName:monsters:places:", "records:", "assert:equals:", "at:"]
}),
$globals.ToramDbModelTest);

$core.addMethod(
$core.method({
selector: "testRecords",
protocol: "testing",
fn: function(){
var self=this,$self=this;
var model;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
model=$recv($globals.ToramDbModel)._new();
$2=$recv(model)._records();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["records"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$3=model;
$5=$recv($globals.ToramDbRecord)._withName_monsters_places_("a","","");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withName:monsters:places:"]=1;
//>>excludeEnd("ctx");
$4=[$5,$recv($globals.ToramDbRecord)._withName_monsters_places_("b","","")];
$recv($3)._records_($4);
$self._assert_equals_($recv($recv(model)._records())._size(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRecords",{model:model},$globals.ToramDbModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRecords\x0a\x09| model |\x0a\x09model := ToramDbModel new.\x0a\x09\x0a\x09self assert: model records size equals: 0.\x0a\x09\x0a\x09model records: {\x0a\x09\x09ToramDbRecord withName: 'a' monsters: '' places: '' .\x0a\x09\x09ToramDbRecord withName: 'b' monsters: '' places: ''\x0a\x09}.\x0a\x09\x0a\x09self assert: model records size equals: 2.\x0a\x09\x09",
referencedClasses: ["ToramDbModel", "ToramDbRecord"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:equals:", "size", "records", "records:", "withName:monsters:places:"]
}),
$globals.ToramDbModelTest);

$core.addMethod(
$core.method({
selector: "testRemove",
protocol: "testing",
fn: function(){
var self=this,$self=this;
var model,record;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
model=$recv($globals.ToramDbModel)._new();
record=$recv($globals.ToramDbRecord)._withName_monsters_places_("a","","");
$recv(model)._add_(record);
$recv(model)._remove_(record);
$self._assert_equals_($recv($recv(model)._records())._size(),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemove",{model:model,record:record},$globals.ToramDbModelTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemove\x0a\x09| model record |\x0a\x09model := ToramDbModel new.\x0a\x09record := ToramDbRecord\x0a\x09\x09withName: 'a'\x0a\x09\x09monsters: ''\x0a\x09\x09places: ''.\x0a\x09\x09\x0a\x09model add: record.\x0a\x09model remove: record.\x0a\x09\x0a\x09self assert: (model records size) equals: 0.",
referencedClasses: ["ToramDbModel", "ToramDbRecord"],
//>>excludeEnd("ide");
messageSends: ["new", "withName:monsters:places:", "add:", "remove:", "assert:equals:", "size", "records"]
}),
$globals.ToramDbModelTest);



$core.addClass("ToramDbStorageTest", $globals.TestCase, [], "ToramDb-Tests");
$core.addMethod(
$core.method({
selector: "testReadRecords",
protocol: "as yet unclassified",
fn: function(){
var self=this,$self=this;
var storage,record;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
storage=$recv($globals.ToramDbStorage)._new();
record=$recv(storage)._readRecord_($globals.HashedCollection._newFromPairs_(["@name","My name","@monsters","Monsters","@places","Places"]));
$self._assert_equals_(record,$recv($globals.ToramDbRecord)._withName_monsters_places_("My name","Monsters","Places"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReadRecords",{storage:storage,record:record},$globals.ToramDbStorageTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReadRecords\x0a\x09| storage record |\x0a\x09storage := ToramDbStorage new.\x0a\x09record := storage readRecord: #{\x0a\x09\x09'@name' -> 'My name'.\x0a\x09\x09'@monsters' -> 'Monsters'.\x0a\x09\x09'@places' -> 'Places'\x0a\x09}.\x0a\x09\x0a\x09self assert: record equals: (\x0a\x09\x09ToramDbRecord\x0a\x09\x09\x09withName: 'My name'\x0a\x09\x09\x09monsters: 'Monsters'\x0a\x09\x09\x09places: 'Places'\x0a\x09).",
referencedClasses: ["ToramDbStorage", "ToramDbRecord"],
//>>excludeEnd("ide");
messageSends: ["new", "readRecord:", "assert:equals:", "withName:monsters:places:"]
}),
$globals.ToramDbStorageTest);


});
