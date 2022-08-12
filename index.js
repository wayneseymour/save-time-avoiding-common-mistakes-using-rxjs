const userData$ = Rx.Observable.ajax({
  url: "https://api.quotable.io/random",
  method: "GET",
});
const click$ = Rx.Observable
  .fromEvent(document, "click");

const resWhenClick$$ = click$
  .map((ev) => userData$)
  .mergeAll();

/*
-----c--------------c-------
     \              \
      ---r----       ---r--

      mergeAll

--------r------------r------
*/

resWhenClick$$.subscribe({
  next: function fetchOnClick(data) {
    const pretty = JSON.stringify(data, null, 2);
    console.log(`\n### x: \n\t${pretty}`) || displayInPreview(pretty);
  },
});

function displayInPreview(string) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(string);
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}
