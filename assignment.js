// Convert KilometerToMeter Function start//

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;

}
var result = kilometerToMeter(10);
console.log(result);

// Convert KilometerToMeter Function End//


// budget Calculator Function start //
function budgetCalculator(watch, phone, laptop) {

    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalShoppingCost = watchPrice + phonePrice + laptopPrice;
    return totalShoppingCost;
}
var result = budgetCalculator(2, 3, 4);
console.log(result);

// budget Calculator Function end //

// Hotel Cost Function Start //
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    } else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var totalCost = hotelCost(25);
console.log(totalCost);
// Hotel Cost Function End //


// megaFriend Function start //
function megaFriend(friends) {
    var largeFriend = "";
    for (var i = 0; i < friends.length; i++) {
        if (largeFriend.length < friends[i].length) {
            largeFriend = friends[i];
        }
    }
    return largeFriend;
}
var result = megaFriend(['Ariful Islam', 'Hridoy', 'Somrat', 'Nafis'])
console.log(result);

// megaFriend Function start //