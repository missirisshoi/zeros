module.exports = function zeros(expression) {
  // задаем начальные значения; в numStr записываем все входящие числа и восклицательные знаки
  let numStr = expression.split('*');
  let nullNum = 0;
  let count2 = 0;
  let count5 = 0;
  
  for (let i=0; i<numStr.length; i++) {
    // если факториал двойной (число с !!), перебираем числа от заданного до 1 с шагом 2
    if (numStr[i].indexOf('!!') != -1) {
      for (let j=numStr[i].slice(0, (numStr[i].length - 2)); j>0; j-=2) {
        // считаем, сколько раз каждое полученное число делится на 2 и на 5
        let num5 = j;
        let num2 = j;
        while (num5 % 5 == 0) {
          count5++;
          num5 = num5/5;
        }
        while (num2 % 2 == 0) {
          count2++;
          num2 = num2/2;
        }
      }
    }
        
    else {
      // если факториал обычный (число с !), перебираем числа от заданного до 1 с шагом 1
      for (let j=numStr[i].slice(0, (numStr[i].length - 1)); j>0; j-=1) {
        // считаем, сколько раз каждое полученное число делится на 2 и на 5
        let num5 = j;
        let num2 = j;
        while (num5 % 5 == 0) {
          count5++;
          num5 = num5/5;
        }
        while (num2 % 2 == 0) {
          count2++;
          num2 = num2/2;
        }
      }
    }
  }

  // поскольку 0 в конце получается при перемножении 2 и 5, их должно быть одинаковое количество
  if (count2>count5) {
    nullNum = count5;
  }
  else {
    nullNum = count2;
  }

  // возвращаем количество нулей
  return nullNum;
}
