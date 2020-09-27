const calculateCombinations = (candies, pineapple, apple, totalWeight) => {
    // Створюємо змінну для зберігання кількості комбінацій
    let combinations = 0;
    // Створюємо масив можливих комбінацій
    const combinationTypes = [
      candies + pineapple,
      candies + apple,
      pineapple + apple,
      candies + pineapple + apple
    ]
    // перебираємо ймовірні комбінації 
    combinationTypes.forEach(e => e <= totalWeight && combinations++);
    
    console.log(combinations);
    return combinations;
  };
  
  calculateCombinations(10, 25, 15, 40);