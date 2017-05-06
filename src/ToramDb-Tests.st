Smalltalk createPackage: 'ToramDb-Tests'!
TestCase subclass: #ToramDbModelTest
	instanceVariableNames: ''
	package: 'ToramDb-Tests'!

!ToramDbModelTest methodsFor: 'testing'!

testAdd
	| model record |
	model := ToramDbModel new.
	record := ToramDbRecord
		withName: 'a'
		monsters: ''
		places: ''.
		
	model add: record.
	
	self assert: (model records at: 1) equals: record.
!

testAt
	| model record |
	model := ToramDbModel new.
	record := ToramDbRecord withName: 'a' monsters: '' places: '' .
	
	model records: {
		record .
		ToramDbRecord withName: 'b' monsters: '' places: ''
	}.
	
	self assert: (model at: 'a') equals: record.
!

testRecords
	| model |
	model := ToramDbModel new.
	
	self assert: model records size equals: 0.
	
	model records: {
		ToramDbRecord withName: 'a' monsters: '' places: '' .
		ToramDbRecord withName: 'b' monsters: '' places: ''
	}.
	
	self assert: model records size equals: 2.
!

testRemove
	| model record |
	model := ToramDbModel new.
	record := ToramDbRecord
		withName: 'a'
		monsters: ''
		places: ''.
		
	model add: record.
	model remove: record.
	
	self assert: (model records size) equals: 0.
! !

TestCase subclass: #ToramDbStorageTest
	instanceVariableNames: ''
	package: 'ToramDb-Tests'!

!ToramDbStorageTest methodsFor: 'as yet unclassified'!

testReadRecords
	| storage record |
	storage := ToramDbStorage new.
	record := storage readRecord: #{
		'@name' -> 'My name'.
		'@monsters' -> 'Monsters'.
		'@places' -> 'Places'
	}.
	
	self assert: record equals: (
		ToramDbRecord
			withName: 'My name'
			monsters: 'Monsters'
			places: 'Places'
	).
! !

