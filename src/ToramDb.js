define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
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
$core.packages["ToramDb"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
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


$core.addClass("ToramDbAddButton", $globals.Widget, ["node"], "ToramDb");
$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "as yet unclassified",
fn: function(html){
var self=this,$self=this;
var container,link;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5;
container=$recv($recv(html)._div())._class_("fixed-action-btn");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$1=container;
$3=$recv(html)._a();
$recv($3)._class_("btn-floating btn-large red");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
link=$recv($3)._href_("#add");
$2=link;
$recv($1)._with_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$4=link;
$6=$recv(html)._tag_("i");
$recv($6)._class_("large material-icons");
$5=$recv($6)._with_("add");
$recv($4)._with_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,container:container,link:link},$globals.ToramDbAddButton)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| container link |\x0a\x09container := html div\x0a\x09\x09class: 'fixed-action-btn'.\x0a\x09\x09\x0a\x09container with: (\x0a\x09\x09link := html a\x0a\x09\x09\x09class: 'btn-floating btn-large red';\x0a\x09\x09\x09href: '#add'\x0a\x09).\x0a\x09\x0a\x09link with: (\x0a\x09\x09(html tag: 'i')\x0a\x09\x09\x09class: 'large material-icons';\x0a\x09\x09\x09with: 'add'\x0a\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "a", "href:", "tag:"]
}),
$globals.ToramDbAddButton);



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



$core.addClass("ToramDbEditPage", $globals.Widget, ["name", "monsters", "places", "submitBlock"], "ToramDb");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "instance creation",
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
$globals.ToramDbEditPage);

$core.addMethod(
$core.method({
selector: "onSubmit:",
protocol: "event handling",
fn: function(aBlock){
var self=this,$self=this;
$self["@submitBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onSubmit: aBlock\x0a\x09submitBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbEditPage);

$core.addMethod(
$core.method({
selector: "record:",
protocol: "accessing",
fn: function(aRecord){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@name"]=$recv(aRecord)._name();
$self["@monsters"]=$recv(aRecord)._monsters();
$self["@places"]=$recv(aRecord)._places();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"record:",{aRecord:aRecord},$globals.ToramDbEditPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRecord"],
source: "record: aRecord\x0a\x09name := aRecord name.\x0a\x09monsters := aRecord monsters.\x0a\x09places := aRecord places.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name", "monsters", "places"]
}),
$globals.ToramDbEditPage);

$core.addMethod(
$core.method({
selector: "renderInput:callback:value:on:",
protocol: "rendering",
fn: function(inputName,aBlock,aValue,html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$6,$5,$9,$8,$7,$3,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("row");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$4=$recv(html)._div();
$recv($4)._class_("input-field col s12");
$6=$recv(html)._input();
$recv($6)._type_("text");
$recv($6)._id_(inputName);
$recv($6)._value_(aValue);
$5=$recv($6)._onChange_(aBlock);
$recv($4)._with_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$9=$recv(html)._label();
$recv($9)._for_(inputName);
$8=$recv($9)._with_(inputName);
$7=$recv($4)._with_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$3=$7;
$2=$recv($1)._with_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderInput:callback:value:on:",{inputName:inputName,aBlock:aBlock,aValue:aValue,html:html},$globals.ToramDbEditPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["inputName", "aBlock", "aValue", "html"],
source: "renderInput: inputName callback: aBlock value: aValue on: html\x0a\x09html div\x0a\x09\x09class: 'row';\x0a\x09\x09with: (\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'input-field col s12';\x0a\x09\x09\x09\x09with: (\x0a\x09\x09\x09\x09\x09html input\x0a\x09\x09\x09\x09\x09\x09type: 'text';\x0a\x09\x09\x09\x09\x09\x09id: inputName;\x0a\x09\x09\x09\x09\x09\x09value: aValue;\x0a\x09\x09\x09\x09\x09\x09onChange: aBlock\x0a\x09\x09\x09\x09);\x0a\x09\x09\x09\x09with: (\x0a\x09\x09\x09\x09\x09html label\x0a\x09\x09\x09\x09\x09\x09for: inputName;\x0a\x09\x09\x09\x09\x09\x09with: inputName\x0a\x09\x09\x09\x09)\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "type:", "input", "id:", "value:", "onChange:", "for:", "label"]
}),
$globals.ToramDbEditPage);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function(html){
var self=this,$self=this;
var form,formCanvas;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$7,$9,$8,$6,$5;
$1=$recv(html)._form();
$recv($1)._class_("col s12");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
form=$recv($1)._onSubmit_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($self["@submitBlock"])._value_value_value_($self["@name"],$self["@monsters"],$self["@places"]);
return $recv(event)._preventDefault();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
formCanvas=$recv($globals.HTMLCanvas)._onJQuery_($recv(form)._asJQuery());
$self._renderInput_callback_value_on_("Name",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(event)._target();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["target"]=1;
//>>excludeEnd("ctx");
$self["@name"]=$recv($2)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=1;
//>>excludeEnd("ctx");
return $self["@name"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)});
//>>excludeEnd("ctx");
}),$self["@name"],formCanvas);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderInput:callback:value:on:"]=1;
//>>excludeEnd("ctx");
$self._renderInput_callback_value_on_("Monsters",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(event)._target();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["target"]=2;
//>>excludeEnd("ctx");
$self["@monsters"]=$recv($3)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=2;
//>>excludeEnd("ctx");
return $self["@monsters"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)});
//>>excludeEnd("ctx");
}),$self["@monsters"],formCanvas);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderInput:callback:value:on:"]=2;
//>>excludeEnd("ctx");
$self._renderInput_callback_value_on_("Places",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self["@places"]=$recv($recv(event)._target())._value();
return $self["@places"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,4)});
//>>excludeEnd("ctx");
}),$self["@places"],formCanvas);
$4=$recv(formCanvas)._div();
$recv($4)._class_("container");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$7=$recv(formCanvas)._button();
$recv($7)._class_("btn waves-effet waves-light");
$recv($7)._type_("submit");
$9=$recv($self["@name"]).__eq("");
$8=$recv($9)._ifTrue_ifFalse_("Create","Edit");
$6=$recv($7)._with_($8);
$5=$recv($4)._with_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(window)._Materialize())._updateTextFields();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,form:form,formCanvas:formCanvas},$globals.ToramDbEditPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| form formCanvas |\x0a\x09form := html form\x0a\x09\x09class: 'col s12';\x0a\x09\x09onSubmit: [ :event |\x0a\x09\x09\x09submitBlock value: name value: monsters value: places.\x0a\x09\x09\x09event preventDefault\x0a\x09\x09].\x0a\x09\x09\x0a\x09formCanvas := HTMLCanvas onJQuery: form asJQuery.\x0a\x09\x0a\x09self \x0a\x09\x09renderInput: 'Name'\x0a\x09\x09callback: [ :event | name := event target value ]\x0a\x09\x09value: name\x0a\x09\x09on: formCanvas;\x0a\x09\x09\x0a\x09\x09renderInput: 'Monsters'\x0a\x09\x09callback: [ :event | monsters := event target value ]\x0a\x09\x09value: monsters\x0a\x09\x09on: formCanvas;\x0a\x09\x09\x0a\x09\x09renderInput: 'Places'\x0a\x09\x09callback: [ :event | places := event target value ]\x0a\x09\x09value: places\x0a\x09\x09on: formCanvas.\x0a\x09\x09\x0a\x09formCanvas div\x0a\x09\x09class: 'container';\x0a\x09\x09with: (\x0a\x09\x09\x09formCanvas button\x0a\x09\x09\x09\x09class: 'btn waves-effet waves-light';\x0a\x09\x09\x09\x09type: 'submit';\x0a\x09\x09\x09\x09with: (name = '' ifTrue: 'Create' ifFalse: 'Edit')\x0a\x09\x09).\x0a\x09\x09\x0a\x09window Materialize updateTextFields",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["class:", "form", "onSubmit:", "value:value:value:", "preventDefault", "onJQuery:", "asJQuery", "renderInput:callback:value:on:", "value", "target", "div", "with:", "button", "type:", "ifTrue:ifFalse:", "=", "updateTextFields", "Materialize"]
}),
$globals.ToramDbEditPage);



$core.addClass("ToramDbGuiElement", $globals.Object, ["node"], "ToramDb");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ToramDbGuiElement.comment="I am the abstract class of all graphical elements in the app.\x0a\x0aMy lifecycle is the following:\x0a\x0a* I am created\x0a* I receive the message createNode. My HTML node is create from my corresponding template.\x0a* I am populated with data\x0a* I receive the message setup. I set the initial state of my DOM node according to my data\x0a* My node is added to the DOM\x0a* I receive the message attach to setup my listeners\x0a* When my node is removed from the DOM, I receive the message detach to delete my listeners";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "appendTo:",
protocol: "DOM",
fn: function(anElement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anElement)._appendChild_($self["@node"]);
$self._attach();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendTo:",{anElement:anElement},$globals.ToramDbGuiElement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "appendTo: anElement\x0a\x09anElement appendChild: node.\x0a\x09self attach.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendChild:", "attach"]
}),
$globals.ToramDbGuiElement);

$core.addMethod(
$core.method({
selector: "attach",
protocol: "life cycle",
fn: function(){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "attach",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbGuiElement);

$core.addMethod(
$core.method({
selector: "createNode",
protocol: "initialization",
fn: function(){
var self=this,$self=this;
var template;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
template=$recv(document)._getElementById_($self._templateID());
$self["@node"]=$recv(document)._importNode_deep_($recv(template)._content(),true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createNode",{template:template},$globals.ToramDbGuiElement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createNode\x0a\x09| template |\x0a\x09template := document getElementById: self templateID.\x0a\x09node := document importNode: template content deep: true.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getElementById:", "templateID", "importNode:deep:", "content"]
}),
$globals.ToramDbGuiElement);

$core.addMethod(
$core.method({
selector: "detach",
protocol: "life cycle",
fn: function(){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "detach",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbGuiElement);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ToramDbGuiElement.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self._createNode();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ToramDbGuiElement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self createNode.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "createNode"]
}),
$globals.ToramDbGuiElement);

$core.addMethod(
$core.method({
selector: "node",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
return $self["@node"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "node\x0a\x09^ node",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbGuiElement);

$core.addMethod(
$core.method({
selector: "remove",
protocol: "DOM",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._detach();
$recv($recv($self["@node"])._parentNode())._removeChild_($self["@node"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.ToramDbGuiElement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09self detach.\x0a\x09node parentNode removeChild: node.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detach", "removeChild:", "parentNode"]
}),
$globals.ToramDbGuiElement);

$core.addMethod(
$core.method({
selector: "setup",
protocol: "life cycle",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.ToramDbGuiElement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.ToramDbGuiElement);

$core.addMethod(
$core.method({
selector: "templateID",
protocol: "constants",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"templateID",{},$globals.ToramDbGuiElement)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "templateID\x0a\x09\x22Return the ID of the template that contains the HTML of the element.\x22\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.ToramDbGuiElement);



$core.addClass("ToramDbListItem", $globals.Widget, ["node", "record"], "ToramDb");
$core.addMethod(
$core.method({
selector: "record:",
protocol: "accessing",
fn: function(aRecord){
var self=this,$self=this;
$self["@record"]=aRecord;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRecord"],
source: "record: aRecord\x0a\x09record := aRecord",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbListItem);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function(html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$recv(html)._a();
$3=$recv($self["@record"])._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$2="#view/".__comma($3);
$recv($1)._href_($2);
$recv($1)._with_($recv($self["@record"])._name());
$recv($1)._class_("collection-item");
$self["@node"]=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ToramDbListItem)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09node := html a\x0a\x09\x09href: '#view/', record name;\x0a\x09\x09with: record name;\x0a\x09\x09class: 'collection-item';\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["href:", "a", ",", "name", "with:", "class:", "yourself"]
}),
$globals.ToramDbListItem);



$core.addClass("ToramDbListPage", $globals.Widget, ["records", "itemElements", "node"], "ToramDb");
$core.addMethod(
$core.method({
selector: "records:",
protocol: "accessing",
fn: function(aRecordList){
var self=this,$self=this;
$self["@records"]=aRecordList;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRecordList"],
source: "records: aRecordList\x0a\x09records := aRecordList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbListPage);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function(html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv(html)._div();
$recv($1)._class_("collection");
$2=$recv($globals.ToramDbAddButton)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_($2);
$3=$recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$self["@node"]=$3;
$self["@itemElements"]=$recv($recv($self["@records"])._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(a)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($4).__lt($recv(b)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._collect_((function(record){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv($globals.ToramDbListItem)._new();
$recv($5)._record_(record);
$recv($5)._appendToBrush_($self["@node"]);
return $recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({record:record},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ToramDbListPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09node := html div\x0a\x09\x09class: 'collection';\x0a\x09\x09with: ToramDbAddButton new;\x0a\x09\x09yourself.\x0a\x0a\x09itemElements := (records\x0a\x09\x09sorted: [ :a :b | a name < b name ])\x0a\x09\x09collect: [ :record |\x0a\x09\x09\x09ToramDbListItem new\x0a\x09\x09\x09\x09record: record;\x0a\x09\x09\x09\x09appendToBrush: node;\x0a\x09\x09\x09\x09yourself \x0a\x09\x09\x09]",
referencedClasses: ["ToramDbAddButton", "ToramDbListItem"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "new", "yourself", "collect:", "sorted:", "<", "name", "record:", "appendToBrush:"]
}),
$globals.ToramDbListPage);



$core.addClass("ToramDbModel", $globals.Object, ["records", "changeBlock"], "ToramDb");
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



$core.addClass("ToramDbRecord", $globals.Object, ["name", "monsters", "places"], "ToramDb");
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


$core.addClass("ToramDbStorage", $globals.Object, ["storage"], "ToramDb");
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


$core.addClass("ToramDbViewPage", $globals.Widget, ["record", "removeBlock"], "ToramDb");
$core.addMethod(
$core.method({
selector: "onRemove:",
protocol: "event handling",
fn: function(aBlock){
var self=this,$self=this;
$self["@removeBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onRemove: aBlock\x0a\x09removeBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbViewPage);

$core.addMethod(
$core.method({
selector: "record:",
protocol: "accessing",
fn: function(aRecord){
var self=this,$self=this;
$self["@record"]=aRecord;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRecord"],
source: "record: aRecord\x0a\x09record := aRecord",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbViewPage);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function(html){
var self=this,$self=this;
var container;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$4,$6,$7,$9,$10,$8,$13,$12,$11;
container=$recv($recv(html)._div())._class_("container");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$1=container;
$3=$recv(html)._h2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["h2"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._with_("Monsters");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv($1)._with_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$5=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._with_($recv($self["@record"])._monsters());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($1)._with_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6=$recv($recv(html)._h2())._with_("Places");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$recv($1)._with_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$7=$recv($recv(html)._p())._with_($recv($self["@record"])._places());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
$recv($1)._with_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$9=$recv(html)._a();
$recv($9)._class_("btn");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($9)._href_("#edit/".__comma($recv($self["@record"])._name()));
$10=$recv($9)._with_("Edit");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
$8=$10;
$recv($1)._with_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
$13=$recv(html)._button();
$recv($13)._class_("btn");
$recv($13)._onClick_($self["@removeBlock"]);
$12=$recv($13)._with_("Delete");
$11=$recv($1)._with_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,container:container},$globals.ToramDbViewPage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| container |\x0a\x09container := html div class: 'container'.\x0a\x09container \x0a\x09\x09with: (html h2 with: 'Monsters');\x0a\x09\x09with: (html p with: record monsters);\x0a\x09\x09with: (html h2 with: 'Places');\x0a\x09\x09with: (html p with: record places);\x0a\x09\x09with: (html a \x0a\x09\x09\x09class: 'btn';\x0a\x09\x09\x09href: '#edit/', record name;\x0a\x09\x09\x09with: 'Edit');\x0a\x09\x0a\x09\x09with: (html button\x0a\x09\x09\x09class: 'btn';\x0a\x09\x09\x09onClick: removeBlock;\x0a\x09\x09\x09with: 'Delete')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h2", "p", "monsters", "places", "a", "href:", ",", "name", "button", "onClick:"]
}),
$globals.ToramDbViewPage);


});
