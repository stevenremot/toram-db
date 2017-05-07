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

