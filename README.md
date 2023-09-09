
### Содерждание

1. [Инструкция по запуску](#instraction) \
	1.1 [Запуск Docker](#docker) \
	1.2 [Запуск npm + postgres](#npm)
2. [Взаимодействие с клиентом](#client) 
3. [Чеклист проекта](#checklist) 
4. [База данных](#db) 
5. [Стек технологий](#stack)

### <div id="instraction">Инструкция по запуску</div>

> Вы можете запустить проект двумя разными способами. Для начала перейдите в корневую папку проекта и откройте терминал
#### <div id="docker">1. Docker и docker compose</div>

> Проверить наличие docker:
> `docker --version`\
> Проверить наличие docker-compose:
> `docker-compose --version`

>Предварительно запустите Docker Engine

1.1 Сборка контейнеров
```
docker-compose up -d
```
1.2 Копирования sql-скрипта контейнер
```bash
docker cp ./init-db.sql postgres_db:/docker-entrypoint-initdb.d/init.sql
```
1.3 Запуск sql-скрипта в контейнере
```bash
docker exec -it postgres_db psql -U user -d company -f /docker-entrypoint-initdb.d/init.sql
```
1.4 Откройте <a href="http://localhost:3000/" target="_blank">ссылку</a> в браузере

>Если данные не появились, попробуйте перезапустить контейнер с бд и сервером, а затем повторить пункты 1.2 и 1.3

#### <div id="npm">2. Запуск через npm и potgresql</div>
2.1 Подключитесь к postgres на локальной машине \
2.2 Создайте базу данных **company** \
2.3 Настройте конфиг подключения к базе данных в `./server/src/config/db.config.js`\
2.4 Установите зависимости для сервера:
>Перейдите в `./server` и запустите в консоли `npm install`

2.4 Запустите сервер:
>Перейдите в `./server` и запустите в консоли `npm start`

2.5 После успешного подключения откройте psql или pgAdmin и выполните sql-скрипт из файла `./init-db.sql`

2.6 Установите зависимости для клиента:
>Перейдите в `./client` и запустите в консоли `npm install`

2.7 Запустите клиент:
>Перейдите в `./client` и запустите в консоли `npm start`
>
2.8 Откройте <a href="http://localhost:3000/" target="_blank">ссылку</a> в браузере

### <div id="client">Взаимодействие с клиентом</div>

Верхняя таблица (*главная*) отображает список **офисов** компании, нижняя таблица (*связанная*) отображает данные о **сотрудниках** в каждом офисе. CRUD операции представлены только для связанной таблицы.

Чтобы взаимодействовать с таблицей сотрудников, для начала выберите любой офис нажатием на строчку главной таблицы. Теперь вы можете добавлять, изменять и удалять данные о сотрудниках. Кнопки изменения и удаления доступны только при выбранном сотруднике. При добавлении и изменении появляется модальное окно.

В офисе может не быть сотрудников. Если вы не хотите добавлять их собственноручно, выберите другой офис.

### <div id="checklist">Чеклист проекта</div>
##### База данных
- База данных company в Postgres с двумя таблицами
- Таблицы связаны по полю foreign key у office
- Каждая таблица имеет поле-ключ и другие поля
- Скрипт init-db.sql в корневой папке проекта

##### Серверная часть
- Подключение к БД с помощью sequalize
- Часть функций написана на SQL (запросы к таблице office)
- Частичная подгрузка данных для office с помощью LIMIT и OFFSET
- Роутеры написаны по архитектурному стилю REST API
- Сервер реализует CRUD операции
- Серверная часть разбита на папки models, controllers и routes по сущностям employee и office
- Валидация данных и обработка ошибок
- Сервер-сайд фильтрация и сортировка для таблицы office

##### Клиентская часть
- Dashboard c боковым меню из пунктов Таблицы, Профиль, Чекликст
- 2 таблицы Ag-Grid с данными, полученными от сервера
- Над связанной таблицей (Employee) кнопки Добавить, Изменить, Удалить
- Добавление/изменение записи учитывает связь с главной таблицей
- Главная таблица (Office) реализует infinite loading
- Dashboard использует шаблон c сайта Creative Tim (Material Dashboard 2 React)
- Валидация вводимых данных
- Кастомизация и адаптивность

##### Деплой
- Инструкция по запуску в README.md
- Docker и Docker compose

### <div id="db">База данных</div>

#### Office (Главная таблица)
|      Column     |    DataType   |
|:---------------:|:-------------:|
|        id       |    INTEGER    |
|     country     |     STRING    |
|       city      |     STRING    |
| square          | DECIMAL(20,2) |
| squareRentPrice | DECIMAL(20,2) |
| openingDate     |    DATEONLY   |
| createdAt       |    DATEONLY   |
| updatedAt       |      DATE     |

#### Employee (Связанная таблица)
|   Column  |   DataType  |
|:---------:|:-----------:|
|     id    |   INTEGER   |
| firstName |    STRING   |
|  lastName |    STRING   |
| gender    |     ENUM    |
| birthday  |   DATEONLY  |
| position  |     ENUM    |
| salary    | DECIMAL(20) |
| passport  | DECIMAL(10) |
| createdAt |   DATEONLY  |
| updatedAt |     DATE    |
| officeId  | Foreign key |

### <div id="stack">Стек технологий</div>
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

Ag-Grid

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)