let cost = 10, selling = 15,realCost, profit;

realCost = cost*1.2;

profit = selling - realCost;

if (cost < 0 || selling < 0){
    console.log("Invalid value!");
} else {
    console.log("Profit: " + profit);
}