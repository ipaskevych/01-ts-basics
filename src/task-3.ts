// Добавляем тип для массива строк (синтаксис Type[])
const usernames: string[] = ["alice", "bob", "charlie"];

// Добавляем тип для массива чисел (синтаксис Type[])
const ratings: number[] = [4.5, 3.8, 5];

// Создаем отдельный интерфейс Product для элементов массива
interface Product {
  id: number;
  title: string;
}

// Типизируем сам массив объектов с помощью созданного интерфейса Product[]
const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

// Свойства элементов массива products оставляем без изменений
console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);