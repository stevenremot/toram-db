Smalltalk createPackage: 'ToramDb-Model'!
(Smalltalk packageAt: 'ToramDb-Model') imports: {'amber/web/Web'}!
Object subclass: #ToramDbModel
	instanceVariableNames: 'records changeBlock'
	package: 'ToramDb-Model'!

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
	package: 'ToramDb-Model'!

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
	package: 'ToramDb-Model'!

!ToramDbStorage methodsFor: 'accessing'!

read
	| entry |
	entry := storage getItem: 'toram-records'.
	
	^ entry ifNil: [ #() ]
		ifNotNil: [ 
			(JSON parse: entry)
				collect: [ :rawRecord | self readRecord: rawRecord ]
		]
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

