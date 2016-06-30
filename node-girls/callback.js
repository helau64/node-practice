function getStuffFromDatabase (callback) {
  setTimeout(function() {
    var results = "database data";
    callback(results);
  }, 5000);
};

function displayData(data) {
  console.log(data);
}

getStuffFromDatabase(displayData);
