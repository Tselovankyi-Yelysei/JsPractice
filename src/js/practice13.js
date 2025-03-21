'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let allShopsPerimeter = 0;

    let { height, moneyPer1m3, budget, shops } = data;

    shops.forEach(shop => {
        allShopsPerimeter += shop.width * shop.length;
    });

    let allShopsPrice = allShopsPerimeter * height * moneyPer1m3;

    if (allShopsPrice < budget) {
        return `Бюджета достаточно`;
    }
    else {
        return `Бюджета недостаточно`;
    }

}

console.log(isBudgetEnough(shoppingMallData));