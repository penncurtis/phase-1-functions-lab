// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue)
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination) * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distancedFare = distanceTravelledInFeet(start, destination)
    if (distancedFare < 400) {
        return 0;
    } else if (distancedFare >= 400 && distancedFare <= 2000) {
        return (distancedFare - 400) * 0.02;
    } else if (distancedFare > 2000 && distancedFare < 2500) {
        return 25;
    } else if (distancedFare > 2500) {
        return "cannot travel that far";
    }
  }