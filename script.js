let userInputDate = document.getElementById("date");
userInputDate.max = new Date().toISOString().split("T")[0];
let resultDisplay = document.getElementById("result");

function calculateAge(){
    let birthDate = new Date(userInputDate.value);

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;  
    let birthYear = birthDate.getFullYear();
    
    let todayDate = new Date();

    let todayDay = todayDate.getDate();
    let todayMonth = todayDate.getMonth() + 1;
    let todayYear = todayDate.getFullYear();

    let ageDays, ageMonths, ageYears;

    ageYears = todayYear - birthYear;
    if(todayMonth >= birthMonth){
        ageMonths = todayMonth - birthMonth;
    } else {
        ageYears--;
        ageMonths = 12 + todayMonth - birthMonth;
    }

    if(todayDay >= birthDay){
        ageDays = todayDay - birthDay;
    } else {
        ageMonths--;
        ageDays = daysInMonth(birthYear, birthMonth) + todayDay - birthDay;
    }

    if(ageMonths < 0){
        ageMonths = 11;
        ageYears--;
    }
    
    document.getElementById("years").innerHTML = "Years: " + ageYears;
    document.getElementById("months").innerHTML = "Months: " + ageMonths;
    document.getElementById("days").innerHTML = "Days: " + ageDays;
}


function daysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
