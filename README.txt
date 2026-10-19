IronCheck — Лабораторная работа №6

1. Разместите index.html, style.css, app.js в корне публичного GitHub-репозитория.
2. Settings -> Pages -> Deploy from a branch -> main -> /(root) -> Save.
3. Получите URL GitHub Pages вида https://username.github.io/repository/.
4. В bot.py добавьте кнопку ReplyKeyboardMarkup / KeyboardButton с WebAppInfo(url=URL).
5. Добавьте обработчик @bot.message_handler(content_types=['web_app_data']).
6. В обработчике читайте message.web_app_data.data, разбирайте JSON и извлекайте game.
7. Проверьте game через get_game_by_code(game_code) и получите ПК через get_pc(message.from_user.id).
8. Вызовите calculate_fps(cpu,gpu,ram,game_code), отправьте результат пользователю.

ВАЖНО: Telegram WebApp.sendData() используется при запуске Web App обычной клавиатурной кнопкой.
Открытие через кнопку меню BotFather /setmenubutton само по себе не обеспечивает такую же передачу sendData.
Не размещайте Telegram-токен и базу пользователей на GitHub Pages.
