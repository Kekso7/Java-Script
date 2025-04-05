let dayOfTheWeek = "Sunday";

if(dayOfTheWeek == "Sunday" || dayOfTheWeek == "Saturday"){
    console.log("Weekend");
}
else if(dayOfTheWeek == "Friday"){
    console.log("Weekend is coming");
}
else{
    console.log("Work");
}

switch (dayOfTheWeek) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    case "Friday":
        console.log("Weekend is coming");
        break;
    default:
        console.log("Work Work");
        break;
}