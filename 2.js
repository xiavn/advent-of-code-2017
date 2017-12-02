// Day 2: Corruption Checksum

const input = [
  [
    62,
    1649,
    1731,
    76,
    51,
    1295,
    349,
    719,
    52,
    1984,
    2015,
    2171,
    981,
    1809,
    181,
    1715
  ],
  [
    161,
    99,
    1506,
    1658,
    84,
    78,
    533,
    242,
    1685,
    86,
    107,
    1548,
    670,
    960,
    1641,
    610
  ],
  [
    95,
    2420,
    2404,
    2293,
    542,
    2107,
    2198,
    121,
    109,
    209,
    2759,
    1373,
    1446,
    905,
    1837,
    111
  ],
  [
    552,
    186,
    751,
    527,
    696,
    164,
    114,
    530,
    558,
    307,
    252,
    200,
    481,
    142,
    205,
    479
  ],
  [
    581,
    1344,
    994,
    1413,
    120,
    112,
    656,
    1315,
    1249,
    193,
    1411,
    1280,
    110,
    103,
    74,
    1007
  ],
  [
    2536,
    5252,
    159,
    179,
    4701,
    1264,
    1400,
    2313,
    4237,
    161,
    142,
    4336,
    1061,
    3987,
    2268,
    4669
  ],
  [
    3270,
    1026,
    381,
    185,
    293,
    3520,
    1705,
    1610,
    3302,
    628,
    3420,
    524,
    3172,
    244,
    295,
    39
  ],
  [
    4142,
    1835,
    4137,
    3821,
    3730,
    2094,
    468,
    141,
    150,
    3982,
    147,
    4271,
    1741,
    2039,
    4410,
    179
  ],
  [
    1796,
    83,
    2039,
    1252,
    84,
    1641,
    2165,
    1218,
    1936,
    335,
    1807,
    2268,
    66,
    102,
    1977,
    2445
  ],
  [96, 65, 201, 275, 257, 282, 233, 60, 57, 200, 216, 134, 72, 105, 81, 212],
  [
    3218,
    5576,
    5616,
    5253,
    178,
    3317,
    6147,
    5973,
    2424,
    274,
    4878,
    234,
    200,
    4781,
    5372,
    276
  ],
  [
    4171,
    2436,
    134,
    3705,
    3831,
    3952,
    2603,
    115,
    660,
    125,
    610,
    152,
    4517,
    587,
    1554,
    619
  ],
  [
    2970,
    128,
    2877,
    1565,
    1001,
    167,
    254,
    2672,
    59,
    473,
    2086,
    181,
    1305,
    162,
    1663,
    2918
  ],
  [
    271,
    348,
    229,
    278,
    981,
    1785,
    2290,
    516,
    473,
    2037,
    737,
    2291,
    2521,
    1494,
    1121,
    244
  ],
  [
    2208,
    2236,
    1451,
    621,
    1937,
    1952,
    865,
    61,
    1934,
    49,
    1510,
    50,
    1767,
    59,
    194,
    1344
  ],
  [
    94,
    2312,
    2397,
    333,
    1192,
    106,
    2713,
    2351,
    2650,
    2663,
    703,
    157,
    89,
    510,
    1824,
    125
  ]
];

// Part One

// Take a spreadsheet with rows of random numbers, and calculate the checksum.
// For each row determine the difference between the highest and lowest number.
// The checksum is the sum of each of these difference.

// Example
// 5 1 9 5
// 7 5 3
// 2 4 6 8
// The first row's largest and smallest values are 9 and 1, and their difference is 8.
// The second row's largest and smallest values are 7 and 3, and their difference is 4.
// The third row's difference is 6.
// In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.

const calculateChecksum = input => {
  const differences = input.map(row => {
    const totals = row.reduce(
      (acc, curr) => ({
        high: curr > acc.high ? curr : acc.high,
        low: curr < acc.low ? curr : acc.low
      }),
      { high: 0, low: Infinity }
    );
    return totals.high - totals.low;
  });
  return differences.reduce((acc, curr) => acc + curr, 0);
};

console.log(calculateChecksum(input)); // 44216

// Part Two

// Find the only two numbers on each row where one evenly divides the other - i.e. where the result of the division is a whole number.
// Divide the two numbers, then add up the results of each row.

// Example
// 5 9 2 8
// 9 4 7 3
// 3 8 6 5
// In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.
// In the second row, the two numbers are 9 and 3; the result is 3.
// In the third row, the result is 2.
// In this example, the sum of the results would be 4 + 3 + 2 = 9.

const totalOfEqualDivisions = input => {
  const divideTotals = input.map(row => {
    let first;
    let second;
    let current = 0;
    let dividedBy = 1;
    while (typeof first === "undefined" && typeof second === "undefined") {
      if (row[current] % row[dividedBy] === 0) {
        first = row[current];
        second = row[dividedBy];
      }
      if (dividedBy < row.length) {
        if (dividedBy + 1 === current) {
          dividedBy += 2;
        } else {
          dividedBy++;
        }
      } else {
        dividedBy = 0;
        current++;
      }
    }
    return first / second;
  });
  return divideTotals.reduce((acc, curr) => acc + curr, 0);
};

console.log(totalOfEqualDivisions(input)); // 320
