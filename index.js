const userData$ = Rx.Observable.ajax({
  url: "https://api.quotable.io/random",
  method: "GET",
});
const click$ = Rx.Observable.fromEvent(document, "click");

const resWhenClick$$ = click$.map(ev => userData$)

resWhenClick$$.subscribe({
  next: (res$) => {
    res$.subscribe({
      next: x => {
        console.log(`\n### x: \n\t${x}`) || displayInPreview(JSON.stringify(x, null, 2))
      }
    })
  }
});

function displayInPreview(string) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(string);
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}
