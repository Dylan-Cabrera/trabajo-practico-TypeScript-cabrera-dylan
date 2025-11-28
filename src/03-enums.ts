//Tipos literales 
console.log('Tipos literales');

let orderStatus: "pending" | "shipped" | "delivered";
orderStatus = "shipped";
console.log(orderStatus)

console.log("----------------")

//enum
console.log("Enums \n");

enum LogLevel {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
};

function logMessage(level: LogLevel, message: string): void {
    console.log(`${level}: ${message}`)
};
logMessage(LogLevel.Warning, "30° de sensación térmica a las 9pm💀");
