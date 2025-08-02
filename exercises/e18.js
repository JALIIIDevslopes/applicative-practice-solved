
export function maxBy(array, cb) {
 let max = null;
  let curr = undefined;

  for (let element of array) {
      if( max == null ||  cb(element)> max){
          max=cb(element);
          curr=element;
      }
    }
    return curr;

}

export function minBy(array, cb) {
  // Your code goes here...
  let min = null;
  let curr = undefined;

  for (let element of array) {
      if( min == null ||  cb(element)< min){
          min=cb(element);
          curr=element;
      }
    }
    return curr;
  }


export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  let newArray=[];
  let currMin=0;
  let temp=0;
  let start=minBy(data.asteroids, (asteroid) => asteroid.discoveryYear).discoveryYear;
  let end=maxBy(data.asteroids, (asteroid) => asteroid.discoveryYear).discoveryYear;

  for (let i=start; i<=end; i++) {
   
     let numDiscoveries = data.asteroids.filter((asteroid) => {
      return asteroid.discoveryYear==i;
     }).length;

    if (numDiscoveries > 0) {
    newArray.push({year: i, countDiscoveries:  numDiscoveries});
  }
}
    return maxBy(newArray, (element) => element.countDiscoveries).year;
    
  }