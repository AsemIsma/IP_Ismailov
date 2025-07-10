  const translations = {
  kz: {
    toStart: "Басты",
    accountCourse: "Бухгалтерия б/а курсылар",
    soprovag: "Бухгалтерлік сүйемелдеу",
    consulta: "Кеңес беру",
    course1C: "1С бойынша курстар",
    compGramCourse: "Компьютерлік сауаттылық курсы",
    contact: "Байланыс"
  },
  ru: {
    toStart: "Главное",
    accountCourse: "Курсы по бухгалтерии",
    soprovag: "Бухгалтерское сопровождение",
    consulta: "Консультация",
    course1C: "Курсы по 1С",
    compGramCourse: "Курс по Компьютерной грамотности",
    contact: "Контакты"
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
  console.log("shit");
}

