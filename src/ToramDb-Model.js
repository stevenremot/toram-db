define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/web/Web"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("ToramDb-Model");
$core.packages["ToramDb-Model"].innerEval = function (expr) { return eval(expr); };
$core.packages["ToramDb-Model"].imports = ["amber/web/Web"];
$core.packages["ToramDb-Model"].transport = {"type":"amd","amdNamespace":"amber-toramdb"};

$core.addClass("ToramDbModel", $globals.Object, ["records", "changeBlock"], "ToramDb-Model");
$core.addMethod(
$core.method({
selector: "add:",
protocol: "adding / removing",
fn: function(aRecord){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@records"])._at_put_($recv(aRecord)._name(),aRecord);
$self._triggerChange();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{aRecord:aRecord},$globals.ToramDbModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRecord"],
source: "add: aRecord\x0a\x09records at: (aRecord name) put: aRecord.\x0a\x09self triggerChange",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "name", "triggerChange"]
}),
$globals.ToramDbModel);

$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
fn: function(aRecordName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@records"])._at_(aRecordName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aRecordName:aRecordName},$globals.ToramDbModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRecordName"],
source: "at: aRecordName\x0a\x09^ records at: aRecordName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.ToramDbModel);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@records"]=$recv($globals.HashedCollection)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ToramDbModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09records := HashedCollection new",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.ToramDbModel);

$core.addMethod(
$core.method({
selector: "onChange:",
protocol: "event handling",
fn: function(aBlock){
var self=this,$self=this;
$self["@changeBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onChange: aBlock\x0a\x09changeBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbModel);

$core.addMethod(
$core.method({
selector: "records",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@records"])._values();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"records",{},$globals.ToramDbModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "records\x0a\x09^ records values",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["values"]
}),
$globals.ToramDbModel);

$core.addMethod(
$core.method({
selector: "records:",
protocol: "accessing",
fn: function(recordList){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@records"]=$recv($globals.HashedCollection)._new();
$recv(recordList)._do_((function(record){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@records"])._at_put_($recv(record)._name(),record);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({record:record},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._triggerChange();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"records:",{recordList:recordList},$globals.ToramDbModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["recordList"],
source: "records: recordList\x0a\x09records := HashedCollection new.\x0a\x09\x0a\x09recordList do: [ :record |\x0a\x09\x09records at: record name put: record.\x0a\x09].\x0a\x09\x0a\x09self triggerChange.",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "at:put:", "name", "triggerChange"]
}),
$globals.ToramDbModel);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: "adding / removing",
fn: function(aRecord){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@records"])._removeKey_($recv(aRecord)._name());
$self._triggerChange();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{aRecord:aRecord},$globals.ToramDbModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRecord"],
source: "remove: aRecord\x0a\x09records removeKey: aRecord name.\x0a\x09self triggerChange",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:", "name", "triggerChange"]
}),
$globals.ToramDbModel);

$core.addMethod(
$core.method({
selector: "triggerChange",
protocol: "private",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@changeBlock"];
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$recv($self["@changeBlock"])._value_($self._records());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"triggerChange",{},$globals.ToramDbModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "triggerChange\x0a\x09changeBlock ifNotNil: [ changeBlock value: self records ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "value:", "records"]
}),
$globals.ToramDbModel);



$core.addClass("ToramDbRecord", $globals.Object, ["name", "monsters", "places"], "ToramDb-Model");
$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
fn: function(aRecord){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($self["@name"]).__eq($recv(aRecord)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($self["@places"]).__eq($recv(aRecord)._places());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
return $recv($3)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self["@monsters"]).__eq($recv(aRecord)._monsters());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aRecord:aRecord},$globals.ToramDbRecord)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRecord"],
source: "= aRecord\x0a\x09^ name = aRecord name and: [ places = aRecord places and: [ monsters = aRecord monsters ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "name", "places", "monsters"]
}),
$globals.ToramDbRecord);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function(){
var self=this,$self=this;
$self["@name"]="";
$self["@monsters"]="";
$self["@places"]="";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09name := ''.\x0a\x09monsters := ''.\x0a\x09places := ''.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbRecord);

$core.addMethod(
$core.method({
selector: "monsters",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
return $self["@monsters"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "monsters\x0a\x09^ monsters",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbRecord);

$core.addMethod(
$core.method({
selector: "monsters:",
protocol: "accessing",
fn: function(aString){
var self=this,$self=this;
$self["@monsters"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "monsters: aString\x0a\x09monsters := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbRecord);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
return $self["@name"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbRecord);

$core.addMethod(
$core.method({
selector: "name:",
protocol: "accessing",
fn: function(aName){
var self=this,$self=this;
$self["@name"]=aName;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aName"],
source: "name: aName\x0a\x09name := aName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbRecord);

$core.addMethod(
$core.method({
selector: "places",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
return $self["@places"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "places\x0a\x09^ places",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbRecord);

$core.addMethod(
$core.method({
selector: "places:",
protocol: "accessing",
fn: function(aString){
var self=this,$self=this;
$self["@places"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "places: aString\x0a\x09places := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbRecord);


$core.addMethod(
$core.method({
selector: "withName:monsters:places:",
protocol: "instance creation",
fn: function(name,monsters,places){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._name_(name);
$recv($1)._monsters_(monsters);
$recv($1)._places_(places);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withName:monsters:places:",{name:name,monsters:monsters,places:places},$globals.ToramDbRecord.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["name", "monsters", "places"],
source: "withName: name monsters: monsters places: places\x0a\x09^ self new\x0a\x09\x09name: name;\x0a\x09\x09monsters: monsters;\x0a\x09\x09places: places;\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "monsters:", "places:", "yourself"]
}),
$globals.ToramDbRecord.a$cls);


$core.addClass("ToramDbStorage", $globals.Object, ["storage"], "ToramDb-Model");
$core.addMethod(
$core.method({
selector: "read",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
var entry;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
entry=$recv($self["@storage"])._getItem_("toram-records");
$1=entry;
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
return $recv($recv($globals.JSON)._parse_(entry))._collect_((function(rawRecord){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._readRecord_(rawRecord);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({rawRecord:rawRecord},$ctx1,3)});
//>>excludeEnd("ctx");
}));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read",{entry:entry},$globals.ToramDbStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "read\x0a\x09| entry |\x0a\x09entry := storage getItem: 'toram-records'.\x0a\x09\x0a\x09^ entry ifNil: [ #() ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09(JSON parse: entry)\x0a\x09\x09\x09\x09collect: [ :rawRecord | self readRecord: rawRecord ]\x0a\x09\x09]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["getItem:", "ifNil:ifNotNil:", "collect:", "parse:", "readRecord:"]
}),
$globals.ToramDbStorage);

$core.addMethod(
$core.method({
selector: "readRecord:",
protocol: "accessing",
fn: function(aRawRecord){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(aRawRecord)._at_("@name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv(aRawRecord)._at_("@monsters");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
return $recv($globals.ToramDbRecord)._withName_monsters_places_($1,$2,$recv(aRawRecord)._at_("@places"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readRecord:",{aRawRecord:aRawRecord},$globals.ToramDbStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRawRecord"],
source: "readRecord: aRawRecord\x0a\x09^ ToramDbRecord\x0a\x09\x09withName: (aRawRecord at: '@name')\x0a\x09\x09monsters: (aRawRecord at: '@monsters')\x0a\x09\x09places: (aRawRecord at: '@places')",
referencedClasses: ["ToramDbRecord"],
//>>excludeEnd("ide");
messageSends: ["withName:monsters:places:", "at:"]
}),
$globals.ToramDbStorage);

$core.addMethod(
$core.method({
selector: "storage",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
return $self["@storage"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "storage\x0a\x09^ storage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbStorage);

$core.addMethod(
$core.method({
selector: "storage:",
protocol: "accessing",
fn: function(aStorage){
var self=this,$self=this;
$self["@storage"]=aStorage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStorage"],
source: "storage: aStorage\x0a\x09storage := aStorage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbStorage);

$core.addMethod(
$core.method({
selector: "write:",
protocol: "accessing",
fn: function(aRecordList){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@storage"])._setItem_value_("toram-records",$recv($globals.JSON)._stringify_(aRecordList));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:",{aRecordList:aRecordList},$globals.ToramDbStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRecordList"],
source: "write: aRecordList\x0a\x09storage setItem: 'toram-records' value: (JSON stringify: aRecordList)",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["setItem:value:", "stringify:"]
}),
$globals.ToramDbStorage);


$core.addMethod(
$core.method({
selector: "local",
protocol: "instance creation",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._storage_($recv(window)._localStorage());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"local",{},$globals.ToramDbStorage.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "local\x0a\x09^ self new storage: window localStorage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["storage:", "new", "localStorage"]
}),
$globals.ToramDbStorage.a$cls);

});
