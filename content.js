
// var center = document.querySelector("body");

// console.log("CENTER COL", center);

// var bestAnswer = document.createElement('div');
// bestAnswer.id = 'muststache-bestAnswer';
// console.log("HELLO", bestAnswer);

// center.appendChild(bestAnswer);




window.addEventListener('load', inject, false);

var viewport = document.querySelector('#viewport');
// viewport.addEventListener('DOMNodeRemoved', function(evt) {
viewport.addEventListener('DOMAttrModified', function(evt) {
  console.log("DELETED", evt.target.id);
  if(evt.target.id === 'rso') {
    console.log('RSO REMOVED');
    inject();
  }
});

function inject(evt) {
  console.log("EVENT", evt);
  var jsInitChecker = setInterval(checkForJS, 111);

  function checkForJS() {
    console.log('check');
    var center = document.querySelector("#rso");
    if(center) {
      center.addEventListener('DOMAttrModified', function(evt) {
        console.log('MODIFIED');
      });
      clearInterval(jsInitChecker);
      console.log("CENTER COL", center);

      var bestAnswer = document.createElement('div');
      bestAnswer.id = 'muststache-bestAnswer';
      console.log("HELLO", bestAnswer);

      center.insertBefore(bestAnswer, center.firstChild);
    }
  }
}