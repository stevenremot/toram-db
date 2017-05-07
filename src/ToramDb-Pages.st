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

renderOn: html
	| form formCanvas |
	form := html form
		class: 'col s12';
		onSubmit: [ :event |
			submitBlock value: name value: monsters value: places.
			event preventDefault
		].
	
	form with: (
		ToramDbTextInput
			label: 'Name'
			value: name
			onChange: [ :event | name := event target value ]
		).
	
	form with: (
		ToramDbTextInput
			label: 'Monsters'
			value: monsters
			onChange: [ :event | monsters := event target value ]
		).
	
	form with: (
		ToramDbTextInput
			label: 'Places'
			value: places
			onChange: [ :event | places := event target value ]
		).
		
	form with: (html div
		class: 'row';
		with: (
			html div
				class: 'input-field col s12';
				with: (
					ToramDbButton
						label: (name = '' ifTrue: 'Create' ifFalse: 'Edit')
						type: 'submit'
				)
		)
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
		with: (html div
			class: 'row';
			with: (html div
				class: 'col s6';
				with: (ToramDbLinkButton label: 'Edit' href: '#edit/', record name)
			);
			with: (html div
				class: 'col s6';
				with: (ToramDbButton label: 'Delete' type: 'button' onClick: removeBlock)
			)
		)
! !

