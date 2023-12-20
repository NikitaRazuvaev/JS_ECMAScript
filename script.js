//Task 1
function getUserData(userID) {
    // Формирование URL для запроса к API
    const apiUrl = `https://reqres.in/api/users/${userID}`;
  
    // Использование fetch для отправки запроса
    return fetch(apiUrl)
      .then(response => {
        // Проверка на успешность запроса (код 200)
        if (!response.ok) {
          // Если запрос неуспешен, отклоняем промис с сообщением об ошибке
          throw new Error(`Не удалось получить данные пользователя. Код ошибки: ${response.status}`);
        }
  
        // Извлечение данных из ответа и возврат объекта с данными о пользователе
        return response.json();
      })
      .then(userData => {
        // Возвращаем объект с данными о пользователе
        return userData;
      })
      .catch(error => {
        // Обработка ошибок при выполнении запроса
        throw new Error(`Произошла ошибка: ${error.message}`);
      });
  }
  
  // Пример использования
  const userID = 1;
  getUserData(userID)
    .then(userData => {
      console.log('Данные о пользователе:', userData);
    })
    .catch(error => {
      console.error(error.message);
    });

  //Task 2
    function saveUserData(userData) {
        // Замените 'https://reqres.in/api/users' на фактический URL вашего удаленного сервера
        const apiUrl = 'https://reqres.in/api/users';
      
        return fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to save user data: ${response.status} ${response.statusText}`);
            }
      
            // Возвращаем успешный промис
            return response.json();
          })
          .then(data => {
            // Здесь вы можете выполнить дополнительные действия с ответом сервера, если это необходимо
            console.log('Server response:', data);
      
            // Возвращаем успешный промис
            return data;
          })
          .catch(error => {
            // Отклоняем промис в случае ошибки
            throw new Error(`Error saving user data: ${error.message}`);
          });
      }
      
      // Пример использования функции
      const user = {
        name: 'John Doe',
        job: 'unknown',
      };
      
      saveUserData(user)
        .then(() => {
          console.log('User data saved successfully');
        })
        .catch(error => {
          console.error(error.message);
        });
      