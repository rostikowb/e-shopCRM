export const option = {
  // api: "http://localhost:5000",
  api: "https://api.vsivuha.online",
  // domen: 'http://localhost:3000'
  // goodsCount
  GC: 59,

  // procent skidki
  interest: 20,
  // nova poshta keyAPI
  NPkey: "81bf0c9eeec4d3e5ab728de8fbdfc52e",
  // 0 = в обработке 1 = готовится к отправке 2 = у новой почты 3 = забрано 4 = отказался
  status: [
    "в обработке",
    "готовится к отправке",
    "передано в службу доставки",
    "забрано",
    "отказ",
  ],
  shipper: [
    { value: "axus", label: "axus" },
    { value: "kievopt", label: "kievopt" },
  ],
  goods: [
    { value: "11900213", label: "Кабели синхронизации" },
    { value: "11900214", label: "Чехлы" },
    { value: "11900215", label: "Защитные стекла" },
    { value: "11900217", label: "Проводные зарядки" },
    { value: "11900220", label: "Моноподы для селфи" },
    { value: "11900221", label: "Автодержатели" },
    { value: "11900222", label: "Переходники" },
    { value: "11900223", label: "Карты памяти" },
    { value: "11900228", label: "Аккумы для смартфонов" },
    { value: "11900211", label: "Наушники и гарнитуры" },
    { value: "11900212", label: "Power Bank" },
    { value: "11900216", label: "Блютуз колонки" },
    { value: "11900219", label: "Беспроводные зарядки" },
    { value: "11900233", label: "Чехлы для наушников" },
    { value: "11900218", label: "Автомобильные ЗУ" },
    { value: "11900224", label: "VR очки" },
    { value: "11900226", label: "Сетевые удлинители" },
    { value: "11900231", label: "Аксессуары для смарт-часов" },
    { value: "11900232", label: "Джойстики, триггеры" },
    { value: "11900234", label: "Увлажнители воздуха" },
    { value: "11900235", label: "Лампы, свет" },
  ],
};
