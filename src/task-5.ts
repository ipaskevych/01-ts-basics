// Типизируем статус через литеральный Union и указываем возвращаемое значение void
function logStatus(status: "loading" | "success" | "error"): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

// Оставляем вызов функции без изменений
logStatus("loading");