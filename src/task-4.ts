// Добавляем типы параметров, делаем email необязательным (?) и указываем тип возврата void
function printUserInfo(name: string, age: number, email?: string): void {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

// Оставляем вызовы функции без изменений
printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");