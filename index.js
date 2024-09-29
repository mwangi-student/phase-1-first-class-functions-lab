// Code your solution in this file!
// returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// fareDoubler
const fareDoubler = createFareMultiplier(2);

// fareTripler
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers
const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
};
