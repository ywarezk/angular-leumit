## Component communication

In this lesson we will go over angular components and different ways for them to communicate.
We will create a parent component hosting a child and practice communication between the two.

### Lesson Plan

- @Input
- ngOnInit
- OnChanges
- DoCheck
- @Output
- TRV
- @ViewChild
- ngAfterViewInit
- Transclusion
- @ContentChild
- ngAfterContentInit
- Services
- ngAfterViewChecked, ngAfterContentChecked

### Student EX

The pyramid of communication. 
You will have to create the following pyramid:
- AppComponent
- Child1, Child2
- Grand1, Grand2

- child1 and child2 will be placed in the app component template. 
- Grand1 will be placed in child1 through transclusion. 
- Grand2 will be placed in the child2 template and the instance will be grabbed in child2 and a method will be called to get a string from grand2. 
- App component will pass message input to child 1 and child1 will display that message.
- Child2 will emit an output event that happens every interval of 1 second with a counter. AppComponent will print that counter. 
- Grand1 and Grand2 will communicate with a service that will pass string data between them which every one of them can alter and send the other. 
- child1 will print with content child a property from the grand1