const printer = (x, y, N) => {
    let time = 0;
    let flag = 0;
    const fast = x < y ? x : y;
    const slow = x > y ? x : y;
    // Співвідношення для визначення долі документу, надрукованого повільним принтером за одиницю часу роботи швидкого
    const ratio = fast / slow;
    time += fast;
    while (N - 1 > 0) {
        //Друкуємо 1 екземпляр на швидкому принтері
        time += fast;
        N -= 1;
        flag += ratio;
        //Перевіряємо, чи був надрукований документ на повільному принтері
        if (flag >= 1) {
            N -= 1;
            flag = 0;
        }
    }
    console.log(time);
};
printer(1,1,4)