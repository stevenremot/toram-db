Smalltalk createPackage: 'ToramDb-Widgets'!
(Smalltalk packageAt: 'ToramDb-Widgets') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Widget subclass: #ToramDbAddButton
	instanceVariableNames: 'node'
	package: 'ToramDb-Widgets'!

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

Widget subclass: #ToramDbButton
	instanceVariableNames: 'label type clickBlock'
	package: 'ToramDb-Widgets'!

!ToramDbButton methodsFor: 'accessing'!

label: aLabel
	label := aLabel
!

type: aType
	type := aType
! !

!ToramDbButton methodsFor: 'event handling'!

onClick: aBlock
	clickBlock := aBlock
! !

!ToramDbButton methodsFor: 'initialization'!

initialize
	label := ''.
	clickBlock := nil.
	type := 'button'.
! !

!ToramDbButton methodsFor: 'rendering'!

renderOn: html
	| button |
	button := html button
		class: 'btn waves-effet waves-light';
		style: 'width: 100%';
		type: type;
		with: label.
		
	clickBlock ifNotNil: [ button onClick: clickBlock ]
! !

!ToramDbButton class methodsFor: 'instance creation'!

label: aLabel type: aType
	^ self new
		label: aLabel;
		type: aType
!

label: aLabel type: aType onClick: aBlock
	^ self new
		label: aLabel;
		type: aType;
		onClick: aBlock
! !

Widget subclass: #ToramDbLinkButton
	instanceVariableNames: 'label href'
	package: 'ToramDb-Widgets'!

!ToramDbLinkButton methodsFor: 'accessing'!

href: anUrl
	href := anUrl
!

label: aLabel
	label := aLabel
! !

!ToramDbLinkButton methodsFor: 'initialization'!

initialize
	label := ''.
	href := ''.
! !

!ToramDbLinkButton methodsFor: 'rendering'!

renderOn: html
	html a 
		class: 'btn';
		style: 'width: 100%';
		href: href;
		with: label
! !

!ToramDbLinkButton class methodsFor: 'instance creation'!

label: aLabel href: anUrl
	^ self new
		label: aLabel;
		href: anUrl
! !

Widget subclass: #ToramDbListItem
	instanceVariableNames: 'node record'
	package: 'ToramDb-Widgets'!

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

Widget subclass: #ToramDbTextInput
	instanceVariableNames: 'label value changeBlock'
	package: 'ToramDb-Widgets'!

!ToramDbTextInput methodsFor: 'accessing'!

label: aLabel
	label := aLabel
!

value: aValue
	value := aValue
! !

!ToramDbTextInput methodsFor: 'event handling'!

onChange: aBlock
	changeBlock := aBlock
! !

!ToramDbTextInput methodsFor: 'initialization'!

initialize
	label := ''.
	value := ''.
	changeBlock := nil.
! !

!ToramDbTextInput methodsFor: 'rendering'!

renderOn: html
	| input |
	html div
		class: 'row';
		with: (
			html div
				class: 'input-field col s12';
				with: (
					input := html input
						type: 'text';
						id: label;
						value: value
				);
				with: (
					html label
						for: label;
						with: label
				)
		).
	changeBlock ifNotNil: [ input onChange: changeBlock ]
! !

!ToramDbTextInput class methodsFor: 'instance creation'!

label: aLabel value: aValue onChange: aBlock
	^ self new
		label: aLabel;
		value: aValue;
		onChange: aBlock
! !

