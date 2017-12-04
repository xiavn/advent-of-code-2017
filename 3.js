// Day 3: Spiral Memory

const input = 347991;

// Part One

// Take a grid formed of ever increasing numbers that starts from 1 and spirals outwards.
// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...
// Calculate the Manhattan Distance between the input and 1.

// Example
// The distance from an input of 1 is 0.
// The distance from 12 is 3 - down, left, left.
// The distance from 23 is 2 - up, up.
// The distance from 1024 is 31.

const findCenter = input => {
  // SE Diagonal numbers can be worked out using formula (2n+1)².
  // The length of each square is (2n+1).
  // Find size of square with input included.
  let n = 1;
  let length = 1;
  let se = 1;
  while (se < input) {
    n++;
    length = 2 * n + 1;
    se = Math.pow(length, 2);
  }
  // Now we know the SE corner value we can calculate the midpoint values of each square side.
  let halfLength = Math.floor(length / 2);
  let midpoint = se - halfLength;
  // Now we want to find the closest midpoint to the input value
  while (input < midpoint - halfLength) {
    midpoint -= length - 1;
  }
  // Now we work out exactly how far away that midpoint is
  let distance = Math.abs(input - midpoint);
  // Then we add the distance to reach the center of the spiral
  return distance + halfLength;
};

console.log(findCenter(input));
