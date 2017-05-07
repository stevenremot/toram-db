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


});
