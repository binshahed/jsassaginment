//* JavaScript program to Convert Feet unit to Mile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile
}
var result = feetToMile(6280);
console.log(result)

//* JavaScript program to determine amount of wood
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        console.log("Please! Enter valid input.");
    }

    totalWood = (chair * 1) + (table * 3) + (bed * 5);
    console.log("Total wood needed : " + totalWood + "cf.");
}
// Constructor Calculator Program
function brickCalculator(BuildingSize) {
    var firstToTen = 15;
    var elevenToTwenty = 12;
    var TwentyOneToAll = 10;
    if (BuildingSize <= 0) {
        console.log("Building Size cannot be negative or zero"); //when building size less then or equal to zero
    } else {
        if (BuildingSize <= 10) {
            firstToTen = BuildingSize * firstToTen;
            var totalBricks = firstToTen * 1000;
        } else if (BuildingSize <= 20) {
            firstToTen = firstToTen * 10;
            elevenToTwenty = BuildingSize - 10;
            var totalBuildingSize = firstToTen + (elevenToTwenty * 12);
            var totalBricks = totalBuildingSize * 1000;
        } else {
            firstToTen = firstToTen * 10;
            elevenToTwenty = elevenToTwenty * 10;
            TwentyOneToAll = BuildingSize - 20;
            var totalBuildingSize = firstToTen + elevenToTwenty + (TwentyOneToAll * 10);
            var totalBricks = totalBuildingSize * 1000;
        }
    }
    return totalBricks;
}
var building = brickCalculator(27);
console.log(building);
//* JavaScript program to find Tiny Friend
function tinyFriend(friends) {
    if (friends.length == 0) {
        console.log("Please enter a valid list.");
        return;
    }

    let tiny = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length < tiny.length) {
            tiny = friends[i];
        }
    }
    console.log("Tiny friend is: " + tiny);
}
//! Output check
tinyFriend(['jahed', 'omi', 'bush']);