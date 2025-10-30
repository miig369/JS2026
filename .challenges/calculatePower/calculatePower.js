const calculatePower = (base, exponant) => {
   if(typeof base !== "number" || typeof exponant !== "number") {
    throw new Error("Base and exponant must a number");
   }

   return base ** exponant;
}

console.log(calculatePower(2,2))