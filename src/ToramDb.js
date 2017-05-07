define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber-toramdb/ToramDb-Model", "amber-toramdb/ToramDb-Pages"
//>>excludeEnd("imports");
, "amber/web/Web", "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("ToramDb");
$core.packages["ToramDb"].innerEval = function (expr) { return eval(expr); };
$core.packages["ToramDb"].imports = ["amber-toramdb/ToramDb-Model", "amber-toramdb/ToramDb-Pages"];
$core.packages["ToramDb"].transport = {"type":"amd","amdNamespace":"amber-toramdb"};

$core.addClass("ToramDb", $globals.Object, [], "ToramDb");
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
fn: function(){
var self=this,$self=this;
var model,app;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
$1=$recv($globals.ToramDbModel)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.ToramDbStorage)._local();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["local"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._read();
model=$recv($1)._records_($2);
$recv(model)._onChange_((function(records){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($globals.ToramDbStorage)._local())._write_(records);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({records:records},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv($globals.ToramDbApp)._new();
$recv($4)._model_(model);
app=$recv($4)._appendToJQuery_($recv($recv(document)._getElementById_("page-content"))._asJQuery());
$recv(app)._location_(location);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["location:"]=1;
//>>excludeEnd("ctx");
$recv(window)._addEventListener_do_("popstate",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(app)._location_(location);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{model:model,app:app},$globals.ToramDb)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09| model app |\x0a\x09model := ToramDbModel new\x0a\x09\x09records: ToramDbStorage local read.\x0a\x09\x09\x0a\x09model onChange: [ :records |\x0a\x09\x09ToramDbStorage local write: records\x0a\x09].\x0a\x09\x09\x0a\x09app := ToramDbApp new\x0a\x09\x09model: model;\x0a\x09\x09appendToJQuery: (document getElementById: 'page-content') asJQuery.\x0a\x09\x09\x0a\x09app location: location.\x0a\x09\x0a\x09window addEventListener: 'popstate' do: [ app location: location ]",
referencedClasses: ["ToramDbModel", "ToramDbStorage", "ToramDbApp"],
//>>excludeEnd("ide");
messageSends: ["records:", "new", "read", "local", "onChange:", "write:", "model:", "appendToJQuery:", "asJQuery", "getElementById:", "location:", "addEventListener:do:"]
}),
$globals.ToramDb);


$core.addMethod(
$core.method({
selector: "clear",
protocol: "helpers",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._pageContent())._innerHTML_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.ToramDb.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09\x22Helper function to clear the screen.\x22\x0a\x09self pageContent innerHTML: ''.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["innerHTML:", "pageContent"]
}),
$globals.ToramDb.a$cls);

$core.addMethod(
$core.method({
selector: "pageContent",
protocol: "helpers",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(document)._getElementById_("page-content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pageContent",{},$globals.ToramDb.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pageContent\x0a\x09^ document getElementById: 'page-content'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getElementById:"]
}),
$globals.ToramDb.a$cls);

$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.ToramDb.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.ToramDb.a$cls);


$core.addClass("ToramDbApp", $globals.Widget, ["node", "model"], "ToramDb");
$core.addMethod(
$core.method({
selector: "addPage",
protocol: "pages",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self._title_("New record");
$1=$recv($globals.ToramDbEditPage)._new();
$recv($1)._onSubmit_((function(name,monsters,places){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($self["@model"])._add_($recv($globals.ToramDbRecord)._withName_monsters_places_(name,monsters,places));
return $recv(location)._hash_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({name:name,monsters:monsters,places:places},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($1)._appendToJQuery_($recv($self["@node"])._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addPage",{},$globals.ToramDbApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addPage\x0a\x09self title: 'New record'.\x0a\x09\x0a\x09ToramDbEditPage new\x0a\x09\x09onSubmit: [ :name :monsters :places |\x0a\x09\x09\x09model add: (ToramDbRecord withName: name monsters: monsters places: places).\x0a\x09\x09\x09location hash: ''.\x0a\x09\x09];\x0a\x09\x09appendToJQuery: node asJQuery.",
referencedClasses: ["ToramDbEditPage", "ToramDbRecord"],
//>>excludeEnd("ide");
messageSends: ["title:", "onSubmit:", "new", "add:", "withName:monsters:places:", "hash:", "appendToJQuery:", "asJQuery"]
}),
$globals.ToramDbApp);

$core.addMethod(
$core.method({
selector: "clear",
protocol: "rendering",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@node"])._innerHTML_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{},$globals.ToramDbApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09node innerHTML: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["innerHTML:"]
}),
$globals.ToramDbApp);

$core.addMethod(
$core.method({
selector: "editPage:",
protocol: "pages",
fn: function(recordName){
var self=this,$self=this;
var record;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
record=$recv($self["@model"])._at_(recordName);
$self._title_($recv(record)._name());
$1=$recv($globals.ToramDbEditPage)._new();
$recv($1)._record_(record);
$recv($1)._onSubmit_((function(name,monsters,places){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_(name);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_(monsters);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["show:"]=2;
//>>excludeEnd("ctx");
$recv($globals.Transcript)._show_(places);
$recv($globals.Transcript)._cr();
$recv($self["@model"])._add_($recv($globals.ToramDbRecord)._withName_monsters_places_(name,monsters,places));
return $recv(location)._hash_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({name:name,monsters:monsters,places:places},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($1)._appendToJQuery_($recv($self["@node"])._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"editPage:",{recordName:recordName,record:record},$globals.ToramDbApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["recordName"],
source: "editPage: recordName\x0a\x09| record |\x0a\x09record := model at: recordName.\x0a\x09\x0a\x09self title: record name.\x0a\x09\x0a\x09ToramDbEditPage new\x0a\x09\x09record: record;\x0a\x09\x09onSubmit: [ :name :monsters :places |\x0a\x09\x09\x09Transcript show: name; show: monsters; show: places; cr.\x0a\x09\x09\x09model add: (ToramDbRecord withName: name monsters: monsters places: places).\x0a\x09\x09\x09location hash: ''.\x0a\x09\x09];\x0a\x09\x09appendToJQuery: node asJQuery.",
referencedClasses: ["ToramDbEditPage", "Transcript", "ToramDbRecord"],
//>>excludeEnd("ide");
messageSends: ["at:", "title:", "name", "record:", "new", "onSubmit:", "show:", "cr", "add:", "withName:monsters:places:", "hash:", "appendToJQuery:", "asJQuery"]
}),
$globals.ToramDbApp);

$core.addMethod(
$core.method({
selector: "listPage",
protocol: "pages",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self._title_("Toram DB");
$1=$recv($globals.ToramDbListPage)._new();
$recv($1)._records_($recv($self["@model"])._records());
$recv($1)._appendToJQuery_($recv($self["@node"])._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"listPage",{},$globals.ToramDbApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listPage\x0a\x09self title: 'Toram DB'.\x0a\x09\x0a\x09ToramDbListPage new\x0a\x09\x09records: model records;\x0a\x09\x09appendToJQuery: node asJQuery.",
referencedClasses: ["ToramDbListPage"],
//>>excludeEnd("ide");
messageSends: ["title:", "records:", "new", "records", "appendToJQuery:", "asJQuery"]
}),
$globals.ToramDbApp);

$core.addMethod(
$core.method({
selector: "location:",
protocol: "routing",
fn: function(aLocation){
var self=this,$self=this;
var path,routes,route,pageName;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
routes=$globals.HashedCollection._newFromPairs_(["#view",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(path)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
return $self._viewPage_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),"#edit",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(path)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
return $self._editPage_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),"#add",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._addPage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),"#list",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._listPage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
})]);
$self._clear();
path=$recv($recv(aLocation)._hash())._tokenize_("/");
pageName=$recv(path)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
route=$recv(routes)._at_ifAbsent_(pageName,$recv(routes)._at_("#list"));
$recv(route)._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"location:",{aLocation:aLocation,path:path,routes:routes,route:route,pageName:pageName},$globals.ToramDbApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLocation"],
source: "location: aLocation\x0a    | path routes route pageName |\x0a\x09routes := #{\x0a\x09\x09'#view' -> [ self viewPage: (path at: 2) ].\x0a\x09\x09'#edit' -> [ self editPage: (path at: 2) ].\x0a\x09\x09'#add' -> [ self addPage ].\x0a\x09\x09'#list' -> [ self listPage ]\x0a\x09}.\x0a\x09\x0a\x09self clear.\x0a\x09\x0a\x09path := aLocation hash tokenize: '/'.\x0a\x0a\x09pageName := path at: 1.\x0a\x09\x0a\x09route := routes at: pageName ifAbsent: (routes at: '#list').\x0a\x09route value.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["viewPage:", "at:", "editPage:", "addPage", "listPage", "clear", "tokenize:", "hash", "at:ifAbsent:", "value"]
}),
$globals.ToramDbApp);

$core.addMethod(
$core.method({
selector: "model:",
protocol: "accessing",
fn: function(aModel){
var self=this,$self=this;
$self["@model"]=aModel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbApp);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function(html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@node"]=$recv($recv(html)._root())._asDomNode();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ToramDbApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09node := html root asDomNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asDomNode", "root"]
}),
$globals.ToramDbApp);

$core.addMethod(
$core.method({
selector: "title:",
protocol: "rendering",
fn: function(aTitle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(document)._querySelector_("nav a"))._textContent_(aTitle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title:",{aTitle:aTitle},$globals.ToramDbApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTitle"],
source: "title: aTitle\x0a\x09(document querySelector: 'nav a') textContent: aTitle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["textContent:", "querySelector:"]
}),
$globals.ToramDbApp);

$core.addMethod(
$core.method({
selector: "viewPage:",
protocol: "pages",
fn: function(recordName){
var self=this,$self=this;
var record;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
record=$recv($self["@model"])._at_(recordName);
$self._title_($recv(record)._name());
$1=$recv($globals.ToramDbViewPage)._new();
$recv($1)._record_(record);
$recv($1)._onRemove_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($self["@model"])._remove_(record);
return $recv($recv(window)._location())._hash_("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($1)._appendToJQuery_($recv($self["@node"])._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"viewPage:",{recordName:recordName,record:record},$globals.ToramDbApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["recordName"],
source: "viewPage: recordName\x0a\x09| record |\x0a\x09record := model at: recordName.\x0a\x09\x0a\x09self title: record name.\x0a\x09\x0a\x09ToramDbViewPage new\x0a\x09\x09record: record;\x0a\x09\x09onRemove: [\x0a\x09\x09\x09model remove: record.\x0a\x09\x09\x09window location hash: ''.\x0a\x09\x09];\x0a\x09\x09appendToJQuery: node asJQuery.",
referencedClasses: ["ToramDbViewPage"],
//>>excludeEnd("ide");
messageSends: ["at:", "title:", "name", "record:", "new", "onRemove:", "remove:", "hash:", "location", "appendToJQuery:", "asJQuery"]
}),
$globals.ToramDbApp);


});
