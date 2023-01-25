let units = 150;
let cost = 0;
if (units < 50) {
  cost = units * 20;
} else if (units >= 50 && units < 100) {
  cost = 50 * 20 + (units - 50) * 25;
} else if (units >= 100 && units < 200) {
  cost = 50 * 20 + 50 * 25 + (units - 100) * 30;
} else {
  cost = 50 * 20 + 50 * 25 + 100 * 30 + (units - 200) * 35;
}
console.log(cost / 100);
