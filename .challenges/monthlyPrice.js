function monthlyPrice(tier){
    switch(tier){
        case "basic": 
            return 10000;
        case "premium":
            return 15000;
        case "enterprice":
            return 25000;
        default: 
            return 0;
    }
}

console.log(monthlyPrice("basic"))