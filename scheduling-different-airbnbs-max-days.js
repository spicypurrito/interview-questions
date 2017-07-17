// For a list of requests, where index = requested day and value is the number of days the guest wants to book, determine
// maximum bookings for the length of the requested days (requests.length)

function bookings(requests, idx, scheduled) {
  var maxRequests = 0;

  if (idx > requests.length-1) {
    return {
      total: 0,
      scheduled: scheduled
    }
  }

  for (var i = idx; i < requests.length; i++) {
    var currRequests = 0;
    var chosenIdx = 0;
    if (requests[i] > requests.length || requests[i] === 0) {
      // skip and don't count this day as possible booking
      continue;
    } else {
      currRequests += requests[i] + bookings(requests, requests[i] + i, scheduled).total;

      if (currRequests > maxRequests) {
        maxRequests = currRequests;
        chosenIdx = i;
      }

      scheduled[chosenIdx] = true;
    }
  }

  return {'total': maxRequests, 'scheduled': scheduled};
}

/*
console.log(bookings([],0));
console.log(bookings([2,3,1,2,0], 0));
console.log(bookings([3,6,1,2,0], 0));*/
//console.log(bookings([1,2,1,1,0,9,0,0,0,0,0], 0, {}));
//console.log(bookings([2,3,1,2,0], 0, {}));


/***** WITH MEMOIZATION ******/

function bookings2(requests, idx, scheduled, cache) {
  var maxRequests = 0;

  if (idx > requests.length-1) {
    return {
      total: 0,
      scheduled: scheduled
    }
  }

  for (var i = idx; i < requests.length; i++) {
    var currRequests = 0;
    var chosenIdx = 0;
    if (requests[i] > requests.length || requests[i] === 0) {
      // skip and don't count this day as possible booking
      continue;
    } else {
      var key = requests[i] + i;
      if (cache[key] === undefined) {
        var booking = bookings(requests, requests[i] + i, scheduled, cache).total;
        currRequests += requests[i] + booking;
        cache[key] = booking;
      } else {
        currRequests += requests[i] + cache[key];
      }

      if (currRequests > maxRequests) {
        maxRequests = currRequests;
        chosenIdx = i;
      }

      scheduled[chosenIdx] = true;
    }
  }

  return {'total': maxRequests, 'scheduled': scheduled};
}

/*
console.log(bookings([],0));
console.log(bookings([2,3,1,2,0], 0));
console.log(bookings([3,6,1,2,0], 0));*/
console.log(bookings2([1,2,1,1,0,9,0,0,0,0,0], 0, {}, {}));
console.log(bookings2([2,3,1,2,0], 0, {}, {}));
