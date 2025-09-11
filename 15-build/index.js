/*
    Сделайте сборку для упражнения из предыдущего ДЗ (User и Tasks)
    через rollup, при этом оформив команду в package.json - npm run
    build для запуска rollup и npm start для запуска live-server.

    Все необходимые dev зависимости для работы должны быть
    установлены.
*/

import { Task } from "./task.js";
import { User } from "./user.js";

const task = new Task("Покушать");
const user = new User(task);

user.do();
