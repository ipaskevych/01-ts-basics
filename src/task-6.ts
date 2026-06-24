// Делаем функцию обобщенной с типом <T>. 
// Она принимает массив элементов типа T и возвращает элемент типа T
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Добавляем явную типизацию дженериков при вызове функции через угловые скобки
const num = getFirstElement<number>([1, 2, 3]);       // Возвращает число 1
const str = getFirstElement<string>(["a", "b", "c"]);   // Возвращает строку "a"
const bool = getFirstElement<boolean>([true, false, true]); // Возвращает boolean true

// Выводим результаты в консоль, чтобы убедиться в правильности работы
console.log("First number:", num);
console.log("First string:", str);
console.log("First boolean:", bool);