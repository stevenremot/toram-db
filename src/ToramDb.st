Smalltalk createPackage: 'ToramDb'!
(Smalltalk packageAt: 'ToramDb') imports: {'amber-toramdb/ToramDb-Model'. 'amber-toramdb/ToramDb-Pages'}!
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

