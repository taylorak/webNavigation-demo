// chrome.webNavigation.onHistoryStateUpdated.addListener(function(data) {
//   console.log("HISTORY UPDATE", data);
// });

// chrome.webNavigation.onCompleted.addListener(function(data) {
//   console.log("COMPLETED", data);
// });
localStorage.setItem('hello', 'hello');

chrome.webNavigation.onBeforeNavigate.addListener(function(data) {
  console.log("ON BEFORE", data);
});

chrome.webNavigation.onCommitted.addListener(function(data) {

  console.log("COMMITTED", data);
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:3000/data",
    dataType: 'json',
    data: {
      committedData: data
    },
    success: function(data) {
      console.log(data);
    }
  });

});