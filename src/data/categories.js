import { projects } from "./projects";

export const categories = [
  {
    title: 'Начальный уровень',
    description: 'Сайты, сверстанные до начала профессии "Фронтенд-разработчик"',
    projects: projects.start,
  },
  {
    title: 'HTML и CSS. Профессиональная верстка сайтов',
    description: 'Проекты из этой секции имеют кроме главной страницы ещё и внутреннюю с каталогом. В отличие от предыдущих они сложнее и есть нестандартные элементы форм. Также подключены фавиконки.',
    projects: projects.html1,
  },
  {
    title: 'HTML и CSS. Адаптивная верстка и автоматизация',
    description: 'Эти проекты адаптивны под планшетные и мобильные устройства. Также они автоматизированы, имеют систему контроля версий Git и систему сборки Gulp.',
    projects: projects.html2,
  },
  {
    title: 'Java Script. Оживление сайтов',
    description: 'Здесь проекты оживлены с помощью JavaScript. Есть валидация форм, отправка и получение данных с сервера и другие функции.',
    projects: projects.js1,
  },
  {
    title: 'Вёрстка React-компонентов',
    description: 'Проекты из этой секции свёрстаны и оживлены с помощью библиотеки React.',
    projects: projects.reactComponents,
  },
  {
    title: 'JavaScript. Архитектура клиентских приложений',
    description: '',
    projects: projects.js2,
  }
];