// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий: getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

function getUserData(id) {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((result) => {
        if (result.status !== 200) {
          throw new Error("Ошибка!");
        } else return result.json();
      })
      .then((users) => {
        if (users.length < id) {
          throw new Error("Пользователь не найден!");
        } else {
          for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
              console.log(users[i]);
            }
          }
        }
      });
  } catch (error) {
    return Promise.reject(error.message);
  }
}
getUserData(1);

// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка * // Пример использования функции const user = { name: 'John Smith', age: 30, email: 'john@example.com' };

// saveUserData(user) .then(() => { console.log('User data saved successfully'); }) .catch(error => { console.log(error.message); });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

const obj = {
  name: "Nik",
  lastname: "Flo",
  age: 33,
  cool: true,
};

function saveUserData(obj) {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "app/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => {
      console.log(response.json());
      console.log("User data saved successfully");
    })
    .catch((error) => {
      new Error('Ошибка!')
    });
}

saveUserData(obj)

// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

const idElement = document.querySelector('.section')
function changeStyleDelayed(id, sec){
  setTimeout(()=> {
    (id.style.backgroundColor = 'green'),
    (id.style.display = 'flex'),
    (id.style.gap = '25px'),
    (id.style.padding = '20px')
  }, sec*1000)
}

changeStyleDelayed(idElement, 2)