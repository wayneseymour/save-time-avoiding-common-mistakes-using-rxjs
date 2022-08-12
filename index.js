const subject = new Rx.Subject()

// 1. Identify sources of data (subjects)
// 2. Covert to Observables
// 3. Compose

document.addEventListener('click', function (ev) {
  subject.next(1);
})

fetch('https://api.quotable.io/random')
  .then(x => x.json())
  .then(x => {
    setTimeout(() => {
      console.log(`\n### : \n${JSON.stringify(x, null, 2)}`) 
      subject.next(1)
    }, 2000) 
  })

const count$ = subject.scan((acc, x) => acc + x, 0)

count$.subscribe(x => {
  console.log(`\n### x: \n\t${x}`) || displayInPreview(x)
})
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}