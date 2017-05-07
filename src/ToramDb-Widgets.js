define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber/web/Web"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("ToramDb-Widgets");
$core.packages["ToramDb-Widgets"].innerEval = function (expr) { return eval(expr); };
$core.packages["ToramDb-Widgets"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["ToramDb-Widgets"].transport = {"type":"amd","amdNamespace":"amber-toramdb"};

$core.addClass("ToramDbAddButton", $globals.Widget, ["node"], "ToramDb-Widgets");
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



$core.addClass("ToramDbButton", $globals.Widget, ["label", "type", "clickBlock"], "ToramDb-Widgets");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function(){
var self=this,$self=this;
$self["@label"]="";
$self["@clickBlock"]=nil;
$self["@type"]="button";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09label := ''.\x0a\x09clickBlock := nil.\x0a\x09type := 'button'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbButton);

$core.addMethod(
$core.method({
selector: "label:",
protocol: "accessing",
fn: function(aLabel){
var self=this,$self=this;
$self["@label"]=aLabel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLabel"],
source: "label: aLabel\x0a\x09label := aLabel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbButton);

$core.addMethod(
$core.method({
selector: "onClick:",
protocol: "event handling",
fn: function(aBlock){
var self=this,$self=this;
$self["@clickBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onClick: aBlock\x0a\x09clickBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbButton);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function(html){
var self=this,$self=this;
var button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv(html)._button();
$recv($1)._class_("btn waves-effet waves-light");
$recv($1)._style_("width: 100%");
$recv($1)._type_($self["@type"]);
button=$recv($1)._with_($self["@label"]);
$2=$self["@clickBlock"];
if(($receiver = $2) == null || $receiver.a$nil){
$2;
} else {
$recv(button)._onClick_($self["@clickBlock"]);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,button:button},$globals.ToramDbButton)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| button |\x0a\x09button := html button\x0a\x09\x09class: 'btn waves-effet waves-light';\x0a\x09\x09style: 'width: 100%';\x0a\x09\x09type: type;\x0a\x09\x09with: label.\x0a\x09\x09\x0a\x09clickBlock ifNotNil: [ button onClick: clickBlock ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "style:", "type:", "with:", "ifNotNil:", "onClick:"]
}),
$globals.ToramDbButton);

$core.addMethod(
$core.method({
selector: "type:",
protocol: "accessing",
fn: function(aType){
var self=this,$self=this;
$self["@type"]=aType;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aType"],
source: "type: aType\x0a\x09type := aType",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbButton);


$core.addMethod(
$core.method({
selector: "label:type:",
protocol: "instance creation",
fn: function(aLabel,aType){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._label_(aLabel);
return $recv($1)._type_(aType);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label:type:",{aLabel:aLabel,aType:aType},$globals.ToramDbButton.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLabel", "aType"],
source: "label: aLabel type: aType\x0a\x09^ self new\x0a\x09\x09label: aLabel;\x0a\x09\x09type: aType",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label:", "new", "type:"]
}),
$globals.ToramDbButton.a$cls);

$core.addMethod(
$core.method({
selector: "label:type:onClick:",
protocol: "instance creation",
fn: function(aLabel,aType,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._label_(aLabel);
$recv($1)._type_(aType);
return $recv($1)._onClick_(aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label:type:onClick:",{aLabel:aLabel,aType:aType,aBlock:aBlock},$globals.ToramDbButton.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLabel", "aType", "aBlock"],
source: "label: aLabel type: aType onClick: aBlock\x0a\x09^ self new\x0a\x09\x09label: aLabel;\x0a\x09\x09type: aType;\x0a\x09\x09onClick: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label:", "new", "type:", "onClick:"]
}),
$globals.ToramDbButton.a$cls);


$core.addClass("ToramDbLinkButton", $globals.Widget, ["label", "href"], "ToramDb-Widgets");
$core.addMethod(
$core.method({
selector: "href:",
protocol: "accessing",
fn: function(anUrl){
var self=this,$self=this;
$self["@href"]=anUrl;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUrl"],
source: "href: anUrl\x0a\x09href := anUrl",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbLinkButton);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function(){
var self=this,$self=this;
$self["@label"]="";
$self["@href"]="";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09label := ''.\x0a\x09href := ''.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbLinkButton);

$core.addMethod(
$core.method({
selector: "label:",
protocol: "accessing",
fn: function(aLabel){
var self=this,$self=this;
$self["@label"]=aLabel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLabel"],
source: "label: aLabel\x0a\x09label := aLabel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbLinkButton);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function(html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._a();
$recv($1)._class_("btn");
$recv($1)._style_("width: 100%");
$recv($1)._href_($self["@href"]);
$recv($1)._with_($self["@label"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ToramDbLinkButton)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html a \x0a\x09\x09class: 'btn';\x0a\x09\x09style: 'width: 100%';\x0a\x09\x09href: href;\x0a\x09\x09with: label",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "a", "style:", "href:", "with:"]
}),
$globals.ToramDbLinkButton);


$core.addMethod(
$core.method({
selector: "label:href:",
protocol: "instance creation",
fn: function(aLabel,anUrl){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._label_(aLabel);
return $recv($1)._href_(anUrl);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label:href:",{aLabel:aLabel,anUrl:anUrl},$globals.ToramDbLinkButton.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLabel", "anUrl"],
source: "label: aLabel href: anUrl\x0a\x09^ self new\x0a\x09\x09label: aLabel;\x0a\x09\x09href: anUrl",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label:", "new", "href:"]
}),
$globals.ToramDbLinkButton.a$cls);


$core.addClass("ToramDbListItem", $globals.Widget, ["node", "record"], "ToramDb-Widgets");
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



$core.addClass("ToramDbTextInput", $globals.Widget, ["label", "value", "changeBlock"], "ToramDb-Widgets");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function(){
var self=this,$self=this;
$self["@label"]="";
$self["@value"]="";
$self["@changeBlock"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09label := ''.\x0a\x09value := ''.\x0a\x09changeBlock := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbTextInput);

$core.addMethod(
$core.method({
selector: "label:",
protocol: "accessing",
fn: function(aLabel){
var self=this,$self=this;
$self["@label"]=aLabel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLabel"],
source: "label: aLabel\x0a\x09label := aLabel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbTextInput);

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
$globals.ToramDbTextInput);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "rendering",
fn: function(html){
var self=this,$self=this;
var input;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$6,$5,$9,$8,$7,$3,$2,$10,$receiver;
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
$recv($6)._id_($self["@label"]);
input=$recv($6)._value_($self["@value"]);
$5=input;
$recv($4)._with_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$9=$recv(html)._label();
$recv($9)._for_($self["@label"]);
$8=$recv($9)._with_($self["@label"]);
$7=$recv($4)._with_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$3=$7;
$2=$recv($1)._with_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$10=$self["@changeBlock"];
if(($receiver = $10) == null || $receiver.a$nil){
$10;
} else {
$recv(input)._onChange_($self["@changeBlock"]);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,input:input},$globals.ToramDbTextInput)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| input |\x0a\x09html div\x0a\x09\x09class: 'row';\x0a\x09\x09with: (\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'input-field col s12';\x0a\x09\x09\x09\x09with: (\x0a\x09\x09\x09\x09\x09input := html input\x0a\x09\x09\x09\x09\x09\x09type: 'text';\x0a\x09\x09\x09\x09\x09\x09id: label;\x0a\x09\x09\x09\x09\x09\x09value: value\x0a\x09\x09\x09\x09);\x0a\x09\x09\x09\x09with: (\x0a\x09\x09\x09\x09\x09html label\x0a\x09\x09\x09\x09\x09\x09for: label;\x0a\x09\x09\x09\x09\x09\x09with: label\x0a\x09\x09\x09\x09)\x0a\x09\x09).\x0a\x09changeBlock ifNotNil: [ input onChange: changeBlock ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "type:", "input", "id:", "value:", "for:", "label", "ifNotNil:", "onChange:"]
}),
$globals.ToramDbTextInput);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "accessing",
fn: function(aValue){
var self=this,$self=this;
$self["@value"]=aValue;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ToramDbTextInput);


$core.addMethod(
$core.method({
selector: "label:value:onChange:",
protocol: "instance creation",
fn: function(aLabel,aValue,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._label_(aLabel);
$recv($1)._value_(aValue);
return $recv($1)._onChange_(aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"label:value:onChange:",{aLabel:aLabel,aValue:aValue,aBlock:aBlock},$globals.ToramDbTextInput.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLabel", "aValue", "aBlock"],
source: "label: aLabel value: aValue onChange: aBlock\x0a\x09^ self new\x0a\x09\x09label: aLabel;\x0a\x09\x09value: aValue;\x0a\x09\x09onChange: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["label:", "new", "value:", "onChange:"]
}),
$globals.ToramDbTextInput.a$cls);

});
