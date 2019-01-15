## Angular Change Detection

In this lesson we will learn about angular change detection and how to improve it.
We will create App component 2 children and 2 grandchild and learn when they are re rendered

### Lesson Plan

- What is change detection
- when it happens
- zone.js
- what order are the components rerendered
- ChangeDetectorRef
- the pyramid of ChangeDetectorRef
- make the cd more strict with OnPush
- When is OnPush rerendered. 
- Summary and our Goal

### EX Zone.js

* The objective is of the task is to create a mini change detector like angular
* your change detector needs to identify after a timer has been run in the zone. 
* your will use the zone.js library that can run on node
* create a new zone, child of root called angular
* your zone should add a method in the onHasTask and determine when the timer is finished.
* run a timer in the zone and make sure your onHasTask is detecting when the queue is empty and then prints to the console that we are now running change detection.
