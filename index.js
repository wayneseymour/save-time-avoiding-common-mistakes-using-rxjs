// 1. Identify sources of data (subjects)
// 2. Covert to Observables
// 3. Compose

const click$ = Rx.Observable.fromEvent(document, "click");
const res$ = Rx.Observable.from(
  fetch("https://api.quotable.io/random").then((x) => x.json())
);

const one$ = Rx.Observable.merge(click$, res$).map(
  function makeThemBothOutput1() {
    return 1;
  }
);

const count$ = one$.scan((acc, x) => acc + x, 0);

count$.subscribe((x) => {
  console.log(`\n### x: \n\t${x}`) || displayInPreview(x);
});
function displayInPreview(string) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(string);
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}
