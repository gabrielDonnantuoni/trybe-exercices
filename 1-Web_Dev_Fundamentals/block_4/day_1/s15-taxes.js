let salary = 3000, ir, netSalary;

netSalary = salary;

if (salary < 0){
    console.log("Invalid value!");
} else if (netSalary <= 1556.94) {
    netSalary *= 0.92;
} else if (netSalary <= 2594.92) {
    netSalary *= 0.91;
} else if (netSalary <= 5189.82) {
    netSalary *= 0.89;
} else {
    netSalary -= 570.88;
}

if (netSalary <= 1903.98) {
    ir = 0;
} else if (netSalary <= 2826.65) {
    ir = netSalary*0.075 - 142.80;
} else if (netSalary <= 3751.05) {
    ir = netSalary*0.15 - 354.80;
} else if (netSalary <= 4664.68) {
    ir = netSalary*0.225 - 636.13;
} else {
    ir = netSalary*0.275 - 869.36;
}

netSalary -= ir;

console.log("Net salary: " + netSalary);