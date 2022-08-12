const userData$ = Rx.Observable.ajax({
  url: "https://api.quotable.io/random",
  method: "GET",
});
const click$ = Rx.Observable.fromEvent(document, "click");

const resWhenClick$$ = click$.map(ev => userData$)

resWhenClick$$.subscribe({
  next: function fetchOnClick(res$) {
    res$.subscribe({
      next: (x) => {
        const pretty = JSON.stringify(x, null, 2);
        console.log(`\n### x: \n\t${pretty}`) || displayInPreview(pretty)
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
