// Создаем интерфейс Product
interface Product {
  readonly id: number;       // Поле id только для чтения
  title: string;
  description?: string;     // Поле description необязательное (?)
}

// Типизируем объект переменной product, свойства оставляем без изменений
const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);