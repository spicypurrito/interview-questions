/*Given a list of menu items and prices. Print all combinations that match a target price.
Eg: target = $3, Menu( A:$1 , B:$2)

Print
A,A,A
A,B*/

// CSV Parser
// input: csv
// output: array of objects where aech
// object is mapped from heading (key) to value per row of csv
// also need to pass in sort by attribute
function parseCSV(csv, attributeSortBy) {
  var lines = csv.split('\n');
  // split lines up
  var heading = lines[0].split(',');
  var headingLength = heading.length;
  // further split up the heading by comma separated values
  var result = [];

  for (var i = 1; i < lines.length; i++) {
    var map = {};
    var row = lines[i].split(',');
    for (var j = 0; j < headingLength; j++) {
      // we know that for each heading we want to just process if it has a key
      map[heading[j]] = row[j];
    }
    // after setting up map, push in the result
    result.push(map);
  }

  // sort by attribute
  result.sort(function(value1, value2) {
    // override sort comparator
    return value1.attributeSortBy > value2.attributeSortBy;
  });

  console.log(result);
}


var csv = "heading1,heading2,heading3,heading4,heading5\nvalue1_1,value2_1,value3_1,value4_1,value5_2\nvalue1_2,value2_2,value3_2,value4_2,value5_1";
parseCSV(csv, 'heading5');
