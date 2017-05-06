Smalltalk createPackage: 'ToramDb'!
(Smalltalk packageAt: 'ToramDb') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #ToramDb
	instanceVariableNames: ''
	package: 'ToramDb'!

!ToramDb methodsFor: 'starting'!

augmentPage
	| model app |
	model := ToramDbModel new
		records: ToramDbStorage local read.
		
	model onChange: [ :records |
		ToramDbStorage local write: records
	].
		
	app := ToramDbApp new
		model: model;
		appendToJQuery: (document getElementById: 'page-content') asJQuery.
		
	app location: location.
	
	window addEventListener: 'popstate' do: [ app location: location ]
! !

!ToramDb class methodsFor: 'helpers'!

clear
	"Helper function to clear the screen."
	self pageContent innerHTML: ''.
!

pageContent
	^ document getElementById: 'page-content'
! !

!ToramDb class methodsFor: 'starting'!

start
	self new augmentPage
! !

Widget subclass: #ToramDbAddButton
	instanceVariableNames: 'node'
	package: 'ToramDb'!

!ToramDbAddButton methodsFor: 'as yet unclassified'!

renderOn: html
	| container link |
	container := html div
		class: 'fixed-action-btn'.
		
	container with: (
		link := html a
			class: 'btn-floating btn-large red';
			href: '#add'
	).
	
	link with: (
		(html tag: 'i')
			class: 'large material-icons';
			with: 'add'
	)
! !

Widget subclass: #ToramDbApp
	instanceVariableNames: 'node model'
	package: 'ToramDb'!

!ToramDbApp methodsFor: 'accessing'!

model: aModel
	model := aModel
! !

!ToramDbApp methodsFor: 'pages'!

addPage
	self title: 'New record'.
	
	ToramDbEditPage new
		onSubmit: [ :name :monsters :places |
			model add: (ToramDbRecord withName: name monsters: monsters places: places).
			location hash: ''.
		];
		appendToJQuery: node asJQuery.
!

editPage: recordName
	| record |
	record := model at: recordName.
	
	self title: record name.
	
	ToramDbEditPage new
		record: record;
		onSubmit: [ :name :monsters :places |
			Transcript show: name; show: monsters; show: places; cr.
			model add: (ToramDbRecord withName: name monsters: monsters places: places).
			location hash: ''.
		];
		appendToJQuery: node asJQuery.
!

listPage
	self title: 'Toram DB'.
	
	ToramDbListPage new
		records: model records;
		appendToJQuery: node asJQuery.
!

viewPage: recordName
	| record |
	record := model at: recordName.
	
	self title: record name.
	
	ToramDbViewPage new
		record: record;
		onRemove: [
			model remove: record.
			window location hash: ''.
		];
		appendToJQuery: node asJQuery.
! !

!ToramDbApp methodsFor: 'rendering'!

clear
	node innerHTML: ''
!

renderOn: html
	node := html root asDomNode
!

title: aTitle
	(document querySelector: 'nav a') textContent: aTitle
! !

!ToramDbApp methodsFor: 'routing'!

location: aLocation
    | path routes route pageName |
	routes := #{
		'#view' -> [ self viewPage: (path at: 2) ].
		'#edit' -> [ self editPage: (path at: 2) ].
		'#add' -> [ self addPage ].
		'#list' -> [ self listPage ]
	}.
	
	self clear.
	
	path := aLocation hash tokenize: '/'.

	pageName := path at: 1.
	
	route := routes at: pageName ifAbsent: (routes at: '#list').
	route value.
! !

Widget subclass: #ToramDbEditPage
	instanceVariableNames: 'name monsters places submitBlock'
	package: 'ToramDb'!

!ToramDbEditPage methodsFor: 'accessing'!

record: aRecord
	name := aRecord name.
	monsters := aRecord monsters.
	places := aRecord places.
! !

!ToramDbEditPage methodsFor: 'event handling'!

onSubmit: aBlock
	submitBlock := aBlock
! !

!ToramDbEditPage methodsFor: 'instance creation'!

initialize
	name := ''.
	monsters := ''.
	places := ''.
! !

!ToramDbEditPage methodsFor: 'rendering'!

renderInput: inputName callback: aBlock value: aValue on: html
	html div
		class: 'row';
		with: (
			html div
				class: 'input-field col s12';
				with: (
					html input
						type: 'text';
						id: inputName;
						value: aValue;
						onChange: aBlock
				);
				with: (
					html label
						for: inputName;
						with: inputName
				)
		)
!

renderOn: html
	| form formCanvas |
	form := html form
		class: 'col s12';
		onSubmit: [ :event |
			submitBlock value: name value: monsters value: places.
			event preventDefault
		].
		
	formCanvas := HTMLCanvas onJQuery: form asJQuery.
	
	self 
		renderInput: 'Name'
		callback: [ :event | name := event target value ]
		value: name
		on: formCanvas;
		
		renderInput: 'Monsters'
		callback: [ :event | monsters := event target value ]
		value: monsters
		on: formCanvas;
		
		renderInput: 'Places'
		callback: [ :event | places := event target value ]
		value: places
		on: formCanvas.
		
	formCanvas div
		class: 'container';
		with: (
			formCanvas button
				class: 'btn waves-effet waves-light';
				type: 'submit';
				with: (name = '' ifTrue: 'Create' ifFalse: 'Edit')
		).
		
	window Materialize updateTextFields
! !

Object subclass: #ToramDbGuiElement
	instanceVariableNames: 'node'
	package: 'ToramDb'!
!ToramDbGuiElement commentStamp!
I am the abstract class of all graphical elements in the app.

My lifecycle is the following:

* I am created
* I receive the message createNode. My HTML node is create from my corresponding template.
* I am populated with data
* I receive the message setup. I set the initial state of my DOM node according to my data
* My node is added to the DOM
* I receive the message attach to setup my listeners
* When my node is removed from the DOM, I receive the message detach to delete my listeners!

!ToramDbGuiElement methodsFor: 'DOM'!

appendTo: anElement
	anElement appendChild: node.
	self attach.
!

remove
	self detach.
	node parentNode removeChild: node.
! !

!ToramDbGuiElement methodsFor: 'accessing'!

node
	^ node
! !

!ToramDbGuiElement methodsFor: 'constants'!

templateID
	"Return the ID of the template that contains the HTML of the element."
	^ self subclassResponsibility
! !

!ToramDbGuiElement methodsFor: 'initialization'!

createNode
	| template |
	template := document getElementById: self templateID.
	node := document importNode: template content deep: true.
!

initialize
	super initialize.
	self createNode.
! !

!ToramDbGuiElement methodsFor: 'life cycle'!

attach
!

detach
!

setup
	^ self subclassResponsibility
! !

Widget subclass: #ToramDbListItem
	instanceVariableNames: 'node record'
	package: 'ToramDb'!

!ToramDbListItem methodsFor: 'accessing'!

record: aRecord
	record := aRecord
! !

!ToramDbListItem methodsFor: 'rendering'!

renderOn: html
	node := html a
		href: '#view/', record name;
		with: record name;
		class: 'collection-item';
		yourself.
! !

Widget subclass: #ToramDbListPage
	instanceVariableNames: 'records itemElements node'
	package: 'ToramDb'!

!ToramDbListPage methodsFor: 'accessing'!

records: aRecordList
	records := aRecordList
! !

!ToramDbListPage methodsFor: 'rendering'!

renderOn: html
	node := html div
		class: 'collection';
		with: ToramDbAddButton new;
		yourself.

	itemElements := (records
		sorted: [ :a :b | a name < b name ])
		collect: [ :record |
			ToramDbListItem new
				record: record;
				appendToBrush: node;
				yourself 
			]
! !

Object subclass: #ToramDbModel
	instanceVariableNames: 'records changeBlock'
	package: 'ToramDb'!

!ToramDbModel methodsFor: 'accessing'!

at: aRecordName
	^ records at: aRecordName
!

records
	^ records values
!

records: recordList
	records := HashedCollection new.
	
	recordList do: [ :record |
		records at: record name put: record.
	].
	
	self triggerChange.
! !

!ToramDbModel methodsFor: 'adding / removing'!

add: aRecord
	records at: (aRecord name) put: aRecord.
	self triggerChange
!

remove: aRecord
	records removeKey: aRecord name.
	self triggerChange
! !

!ToramDbModel methodsFor: 'event handling'!

onChange: aBlock
	changeBlock := aBlock
! !

!ToramDbModel methodsFor: 'initialization'!

initialize
	records := HashedCollection new
! !

!ToramDbModel methodsFor: 'private'!

triggerChange
	changeBlock ifNotNil: [ changeBlock value: self records ]
! !

Object subclass: #ToramDbRecord
	instanceVariableNames: 'name monsters places'
	package: 'ToramDb'!

!ToramDbRecord methodsFor: 'accessing'!

monsters
	^ monsters
!

monsters: aString
	monsters := aString
!

name
	^ name
!

name: aName
	name := aName
!

places
	^ places
!

places: aString
	places := aString
! !

!ToramDbRecord methodsFor: 'comparing'!

= aRecord
	^ name = aRecord name and: [ places = aRecord places and: [ monsters = aRecord monsters ] ]
! !

!ToramDbRecord methodsFor: 'initialization'!

initialize
	name := ''.
	monsters := ''.
	places := ''.
! !

!ToramDbRecord class methodsFor: 'instance creation'!

withName: name monsters: monsters places: places
	^ self new
		name: name;
		monsters: monsters;
		places: places;
		yourself.
! !

Object subclass: #ToramDbStorage
	instanceVariableNames: 'storage'
	package: 'ToramDb'!

!ToramDbStorage methodsFor: 'accessing'!

read
	^ (JSON parse: (storage getItem: 'toram-records'))
		collect: [ :rawRecord | self readRecord: rawRecord ]
!

readRecord: aRawRecord
	^ ToramDbRecord
		withName: (aRawRecord at: '@name')
		monsters: (aRawRecord at: '@monsters')
		places: (aRawRecord at: '@places')
!

storage
	^ storage
!

storage: aStorage
	storage := aStorage
!

write: aRecordList
	storage setItem: 'toram-records' value: (JSON stringify: aRecordList)
! !

!ToramDbStorage class methodsFor: 'instance creation'!

local
	^ self new storage: window localStorage
! !

Widget subclass: #ToramDbViewPage
	instanceVariableNames: 'record removeBlock'
	package: 'ToramDb'!

!ToramDbViewPage methodsFor: 'accessing'!

record: aRecord
	record := aRecord
! !

!ToramDbViewPage methodsFor: 'event handling'!

onRemove: aBlock
	removeBlock := aBlock
! !

!ToramDbViewPage methodsFor: 'rendering'!

renderOn: html
	| container |
	container := html div class: 'container'.
	container 
		with: (html h2 with: 'Monsters');
		with: (html p with: record monsters);
		with: (html h2 with: 'Places');
		with: (html p with: record places);
		with: (html a 
			class: 'btn';
			href: '#edit/', record name;
			with: 'Edit');
	
		with: (html button
			class: 'btn';
			onClick: removeBlock;
			with: 'Delete')
! !

