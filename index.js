// 1. Identify sources of data (subjects)
// 2. Covert to Observables
// 3. Compose

const click$ = Rx.Observable.fromEvent(document, "click");

const res$ = Rx.Observable.from(
  fetch("https://api.quotable.io/random")
    .then((x) => x.json())
    .then(x => {
      console.log(`\n### x: \n${JSON.stringify(x, null, 2)}`)
      return x
    })
);

const count$ = Rx.Observable.merge(click$, res$)
  .map(function mapBothStreamsTo1() {
    return 1;
  })
  .scan((acc, x) => acc + x, 0);

count$.subscribe((x) => {
  console.log(`\n### x: \n\t${x}`) || displayInPreview(x);
});

function displayInPreview(string) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(string);
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}
