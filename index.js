// const userData$ = Rx.Observable.ajax({
//   url: "https://api.quotable.io/random",
//   method: "GET",
// });
const click$ = Rx.Observable
  .fromEvent(document, "click");

const tickWhenClick$ = click$
  .flatMap((ev) => Rx.Observable.interval(500))

tickWhenClick$.subscribe((data) => {
  console.log(`\n### data: \n\t${data}`)
})
/*
-----c--------------c-------
     \              \
      ---r----       ---r--

      mergeAll OR flatMap

--------r------------r------
*/

function displayInPreview(string) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(string);
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}
