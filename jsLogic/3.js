const drinks = {
    "Cappuccino": {
      "coffee": 0.01,
      "water": 0.035,
      "milk": 0.09
    },
    "Espresso": {
      "coffee": 0.01,
      "water": 0.035
    },
    "Latte": {
      "coffee": 0.01,
      "water": 0.035,
      "milk": 0.135
    },
    "Flat White": {
      "coffee": 0.02,
      "water": 0.04,
      "milk": 0.11
    },
    "Macchiato": {
      "coffee": 0.01,
      "water": 0.035,
      "milk": 0.015
    }
}

  const employees = [
    {
        "id":1,
        "name":"Mildred Carson",
        "drinks":["Macchiato"]
    },
    {"id":2,"name":"Clifford Brown","drinks":["Latte"]},
    {"id":3,"name":"Kellie Fletcher","drinks":["Flat White","Espresso"]},
    {"id":4,"name":"Don Parsons","drinks":["Espresso"]},
    {"id":5,"name":"Renee Reynolds","drinks":["Cappuccino","Macchiato"]},
    {"id":6,"name":"Rudolph Bishop","drinks":["Latte","Macchiato","Flat White"]},
    {"id":7,"name":"Geraldine Carpenter","drinks":["Espresso"]},
    {"id":8,"name":"Hilda Jimenez","drinks":["Latte","Macchiato","Espresso"]},
    {"id":9,"name":"Pauline Roberson","drinks":["Espresso"]},
    {"id":10,"name":"Vanessa Barrett","drinks":["Flat White","Cappuccino","Latte"]} 
]

const prices = {
    "coffee": 3.6,
    "water": 1,
    "milk": 1.5
}

// Створюємо функцію для отримання ціни напою, яка перевіряє чи є в рецепті молоко і в залежності від цього рахує його ціну
const getDrinkPrice = (drink) => {
    const { coffee, water, milk } = prices;

    const selectedDrink = drinks[drink]

    let totalPrice = 0;
    if (selectedDrink.milk) {
        totalPrice = coffee * selectedDrink.coffee + water * selectedDrink.water + milk * selectedDrink.milk;
    } else {
        totalPrice = coffee *selectedDrink.coffee + water * selectedDrink.water;
    }

    // console.log('totalPrice: ', totalPrice);   
    return totalPrice;
}
// Створюємо функцію, яка перебирає працівників, рахує скільки необходно кожному працівнику на обрані ним напої, а потом виходячи з цих данних сортує їх.
const getSortedEmployees = () => {
    const employeesPriced = employees.map(guest => {
        const drinksPrice = +guest.drinks.reduce((sum, drink) => sum += getDrinkPrice(drink), 0).toFixed(2)
    
        return {
            ...guest,
            drinksPrice
        }
    })

    return employeesPriced.sort((a,b) => a.drinksPrice - b.drinksPrice)
}

// Створюємо функцію, яка приймає в себе відсортований список гостів і повертає список лише тих гостів, сума за напої яких задовільняє бюджет.
const main = (budget) => {
    const sortedEmployees = getSortedEmployees();

    let guestsPrice = 0;
    let guests = [];

    for(let i=0; i < sortedEmployees.length; i++){
        const newPrice = +(guestsPrice + sortedEmployees[i].drinksPrice).toFixed(2);
        if (newPrice <= budget){
            guestsPrice = newPrice
            guests.push(sortedEmployees[i])
        } else break;
    }

    // Спочатку робив через forEach для перебору, але потім вирішив робити через for, так як перший варіант не можна перервати до кінця всіх ітерацій.
    
    // sortedEmployees.forEach(employee => {
    //     const newPrice = +(guestsPrice + employee.drinksPrice).toFixed(2);
    //     if (newPrice <= budget){
    //         guestsPrice = newPrice
    //         guests.push(employee)
    //     } else return null;
    // })

    console.log('guests', guests)
    return guests;
}

main(0.21);
