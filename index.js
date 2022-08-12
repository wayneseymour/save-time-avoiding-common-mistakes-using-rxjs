const userData$ = Rx.Observable.ajax({
  url: "https://api.quotable.io/random",
  method: "GET",
});
const click$ = Rx.Observable
  .fromEvent(document, "click");

const resWhenClick$$ = click$
  // .mergeMap((ev) => userData$)
  .flatMap((ev) => userData$)

/*
-----c--------------c-------
     \              \
      ---r----       ---r--

      mergeAll OR flatMap

--------r------------r------
*/

resWhenClick$$.subscribe({
  next: function fetchOnClick(data) {
    const pretty = JSON.stringify(data, null, 2);
    console.log(`\n### pretty: \n${pretty}`)
  },
});

function displayInPreview(string) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(string);
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}
