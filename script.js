//your code here
let touristSpots = [
  "The Virupaksha Temple",
  "Victoria Memorial",
  "Tajmahal",
  "An RedFort",
  "A Temple",
];

let arr = {};
for (let i in touristSpots) {
  let str = touristSpots[i].split(" ")[0];
  switch (str) {
    case "The":
      arr[touristSpots[i].substring(4)] = touristSpots[i];
      touristSpots[i] = touristSpots[i].substring(4);
      break;
    case "A":
      arr[touristSpots[i].substring(2)] = touristSpots[i];
      touristSpots[i] = touristSpots[i].substring(2);
      break;
    case "An":
      arr[touristSpots[i].substring(3)] = touristSpots[i];
      touristSpots[i] = touristSpots[i].substring(3);
      break;
    default:
      arr[touristSpots[i]] = touristSpots[i];
  }
}

function findPivot(s, e, arr) {
  let pivot = arr[e];
  let i = s;
  for (let j = s; j < e; j++) {
    if (arr[j] <= pivot) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
    }
  }
  let temp = arr[i];
  arr[i] = pivot;
  arr[e] = temp;
  return i;
}
function quickSort(s, e, arr) {
  if (s >= e) return;

  let pivot = findPivot(s, e, arr);
  quickSort(s, pivot - 1, arr);
  quickSort(pivot + 1, e, arr);
}
quickSort(0, touristSpots.length-1, touristSpots);

 for(let i in touristSpots){
  touristSpots[i]=arr[touristSpots[i]];
}
let list = document.getElementById("band");
        for(let i in touristSpots){
	         let li = document.createElement('li');
            li.innerText = touristSpots[i];
            list.appendChild(li);
		}





