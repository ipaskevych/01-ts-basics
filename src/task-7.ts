// Указываем, что функция возвращает Promise, внутри которого будет строка <string>
function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

// Оставляем вызов и обработку промиса без изменений
getMessage().then(result => console.log(result));