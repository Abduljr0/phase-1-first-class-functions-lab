// Code your solution in this file!
const returnFirstTwoDrivers= function (drivers)  {(['Antonia', 'Nuru', 'Amari', 'Mo'] )
 return drivers.slice(0, 2)
}
returnFirstTwoDrivers ;

const returnLastTwoDrivers= function (drivers) {(['Antonia', 'Nuru', 'Amari', 'Mo'])
return drivers.slice(2,4)
}
 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

 function createFareMultiplier(multiplier) {
    
    return function(fare) {
      return fare * multiplier
    }
}
const  fareDoubler = createFareMultiplier(2)
const  fareTripler = createFareMultiplier(3)

 function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}

    
    

