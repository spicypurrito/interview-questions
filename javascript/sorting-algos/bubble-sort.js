// Bubble sort

var bubbleSort = function (arr) {
  var length = arr.length;
  for (var i = 0 ; i < length; i++) {
      for (j = 0; j < arr.length-1; j++) {
        if (arr[j] > arr[j+1]) {
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
  }
  console.log(arr);
}

bubbleSort([5,2,3,1,8,10]);
bubbleSort([8,10,5,1]);
