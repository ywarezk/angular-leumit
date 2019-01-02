import { Observable, Observer, timer, Subscription, interval, Subject } from 'rxjs';
import {map} from 'rxjs/operators';

// Promise

const timerPromise: Promise<string> = new Promise((resolve, reject) => {
    console.log('async function of promise is running');
    setTimeout(() => {
        resolve('hello world');
        // reject(new Error('dfsgsdfg'));
    }, 1000)
});

// listener to the promise

const returnedFromThen: Promise<boolean | void> = timerPromise.then(
    //success - resolve
    function(msg: string) {
        console.log(msg)
        // return msg.length

        // Promise<Response>
        return fetch('https://www.google.com');
    },

    // fail - reject
    function(err: Error) {
        throw new Error('another error')
    }
).then(
    function(res: Response | string) {
        return true;
    }, 

    function() {

    }
)

timerPromise
    .then()
    .then()
    .then();

// Observable

const intervalObservable: Observable<number> = Observable.create((observer: Observer<number>) => {
    console.log('async function of observable is running');
    let counter = 0;
    const intervalId = setInterval(() => {
        observer.next(counter);

        if (counter > 5) {
            observer.error(new Error('error'));
        }
        // observer.error(new Error('error happened'))
        // observer.complete();
        counter++;
    }, 1000);

    return function tearDownFunction() {
        clearInterval(intervalId);
    }
})

// listener to observable

const myIntervalSubscription : Subscription = intervalObservable.subscribe(
    // next
    function(counter: number) { console.log(counter); },

    // error
    function(err: Error) {
        console.log('error function!!!');
    },

    // complete
    function() {
        console.log('closing the data stream');
    }
);

// Observable VS Promise
// Observable is lazy
// Promise is eager

const sub2 : Subscription = intervalObservable.subscribe();

// Observable VS Promise
// observable duplicates data stream for every listener
// promise there is one data stream

// Observable VS Promise
// Observable is cancelable
// Promise is not cancelable

// how do we close data stream / observable? 
// from the observable
// 1 - complete
// 2 - error

// from the outside
// 3 - unsubscribe

setTimeout(() => {
    console.log('closing the second subscription');
    sub2.unsubscribe();
}, 3000);

// Operators


//
// this operator will transform the data of the interval observable from number to string
const intervalObservable2: Observable<number> =  interval(1000)

const intervalStringObs: Observable<string> = intervalObservable2.pipe(
    map((num: number) => num.toString())
)

// Subject

// represents data stream like observable
// subject does not wrap async function
// i call the next error complete throught the subject instance
// subject is like promise one for many listeners - data stream is not duplicated

const intervalSubject : Subject<number> = new Subject();

let counterForSubject = 0;
setInterval(() => {
    intervalSubject.next(counterForSubject);
    counterForSubject++;
}, 1000);

intervalSubject.subscribe((counter: number) => {
    console.log(counter);
});

intervalSubject.subscribe()

intervalSubject.complete();
intervalSubject.unsubscribe();

// when to use promise and when observable



// from observable to promise

intervalObservable2.toPromise()

async function veriatyOfPromises(): Promise<boolean | number> {
    try {
        const num: string = await timerPromise;
        console.log(num);
        const res = await fetch('https://sadfds.safa')
        const items = await res.json();
        return true;
    } catch(err) {
        return 10;
    }
    
}

