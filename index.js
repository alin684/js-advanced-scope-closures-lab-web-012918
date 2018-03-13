function produceDrivingRange(blockRange) {
  return function(location1, location2) {
    let loc1 = parseInt(location1.slice(0,-2));
    let loc2 = parseInt(location2.slice(0,-2));
    let dist = (Math.abs(loc1-loc2))
    if (dist > blockRange) {
      return `${dist-blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange-dist}`
    }
  }
}

function produceTipCalculator(percent){
  return function(tip) {
    return tip * percent
  }
}
