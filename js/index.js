const books = [
  {
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },
  {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
  {
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },
];

const divRef = document.querySelector("#root");
const newDiv1 = document.createElement("div");
const newDiv2 = document.createElement("div");

newDiv1.classList.add("left-wrap");
newDiv2.classList.add("rigth-wrap");

divRef.append(newDiv1, newDiv2);

//! Заголовок
const newTitle = document.createElement("h1");
newTitle.classList.add("heading");
newTitle.textContent = "My Library😉";

//! Кнопка
const buttonAddEl = document.createElement("button");
buttonAddEl.classList.add("add-btn");
buttonAddEl.type = "button";
buttonAddEl.textContent = "Додати";

//! Список
const listEl = document.createElement("ul");
listEl.classList.add("list");

newDiv1.append(newTitle, listEl, buttonAddEl);

//* 3 li < тег p в якому назва книжки, після них має бути 2 кнопки: delete, edit
//* вставити нашу розмітку в ul за доп. incertAdjecementHTML
function renderList() {
  const markup = books
    .map(({ title }) => {
      return `<li class="list-item">
            <p class="list-text">${title}</p>
            <div class="list-container">
            <button class="item-btn" type="button">Редагувати</button>
            <button class="item-btn" type="button">Видалити</button>
            </div>
        </li>`;
    })
    .join("");
  listEl.insertAdjacentHTML("beforebegin", markup);
}

renderList();

// 1.50.00
