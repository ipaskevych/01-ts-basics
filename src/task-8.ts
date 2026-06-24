import axios from "axios";

// Создаем интерфейс Post, описывающий объект поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// Типизируем axios.get через дженерик <Post[]>, указывая, что вернется массив постов
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

// Оставляем выполнение без изменений
fetchPosts().then((posts) => {
  console.log(posts[0].title);
});