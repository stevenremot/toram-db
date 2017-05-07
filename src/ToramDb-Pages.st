Smalltalk createPackage: 'ToramDb-Pages'!
(Smalltalk packageAt: 'ToramDb-Pages') imports: {'amber-toramdb/ToramDb-Widgets'}!
Widget subclass: #ToramDbEditPage
	instanceVariableNames: 'name monsters places submitBlock'
	package: 'ToramDb-Pages'!

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

Widget subclass: #ToramDbListPage
	instanceVariableNames: 'records itemElements node'
	package: 'ToramDb-Pages'!

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

Widget subclass: #ToramDbViewPage
	instanceVariableNames: 'record removeBlock'
	package: 'ToramDb-Pages'!

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

