define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber-toramdb/ToramDb-Widgets"
//>>excludeEnd("imports");
, "amber/web/Web"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("ToramDb-Pages");
$core.packages["ToramDb-Pages"].innerEval = function (expr) { return eval(expr); };
$core.packages["ToramDb-Pages"].imports = ["amber-toramdb/ToramDb-Widgets"];
$core.packages["ToramDb-Pages"].transport = {"type":"amd","amdNamespace":"amber-toramdb"};

$core.addClass("ToramDbEditPage", $globals.Widget, ["name", "monsters", "places", "submitBlock"], "ToramDb-Pages");
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



$core.addClass("ToramDbListPage", $globals.Widget, ["records", "itemElements", "node"], "ToramDb-Pages");
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



$core.addClass("ToramDbViewPage", $globals.Widget, ["record", "removeBlock"], "ToramDb-Pages");
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
