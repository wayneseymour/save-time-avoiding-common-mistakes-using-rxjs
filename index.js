const length$ = Rx.Observable.of(5);
const width$ = Rx.Observable.of(7);
const height$ = Rx.Observable.of(2.8, 2.5);

// const volume$ = Rx.Observable
//   .zip(length$, width$, height$,
//     (l, w, h) => l * w * h
//   );
const volume$ = Rx.Observable.combineLatest(
  length$,
  width$,
  height$,
  (l, w, h) => l * w * h
);

volume$.subscribe(console.log.bind(console));
