<template>
  <select
    class="w-100 custom-select mb-3"
		:value="selected"
    @input="$emit('input', $event.target.value)"
  >
    <option :value="null" disabled selected>Укажите часовой пояс</option>

    <option value="Гавайи (GMT : -10)">(GMT-10:00) Гавайи</option>
    <option value="Аляска (GMT : -8)">(GMT-08:00) Аляска</option>
    <option value="Ла-Пас, Мазатлан, Чихуахуа (GMT : -7)">
      (GMT-07:00) Ла-Пас, Мазатлан, Чихуахуа
    </option>
    <option value="Тихуана, Нижная Калифорния (GMT : -7)">
      (GMT-07:00) Тихуана, Нижная Калифорния
    </option>
    <option value="Аризона (GMT : -7)">(GMT-07:00) Аризона</option>
    <option value="Денвер (GMT : -6)">(GMT-06:00) Денвер</option>
    <option value="Центральная Америка (GMT : -6)">
      (GMT-06:00) Центральная Америка
    </option>
    <option value="Гвалахара, Мехико, Монтеррей (GMT : -6)">
      (GMT-06:00) Гвалахара, Мехико, Монтеррей
    </option>
    <option value="Саскачеван (GMT : -6)">(GMT-06:00) Саскачеван</option>
    <option value="Богота, Рио, Кито, Рио-Бранко (GMT : -5)">
      (GMT-05:00) Богота, Рио, Кито, Рио-Бранко
    </option>
    <option value="Чикаго (GMT : -5)">(GMT-05:00) Чикаго</option>
    <option value="Каракас, Ла Пас (GMT : -4)">
      (GMT-04:00) Каракас, Ла Пас
    </option>

    <option value="Индиана (восток) (GMT : -4)">
      (GMT-04:00) Индиана (восток)
    </option>
    <option value="Нью-Йорк (GMT : -4)">(GMT-04:00) Нью-Йорк</option>
    <option value="Буэнос-Айрес, Джорджтаун (GMT : -3)">
      (GMT-03:00) Буэнос-Айрес, Джорджтаун
    </option>
    <option value="Гренландия (GMT : -3)">(GMT-03:00) Гренландия</option>
    <option value="Атлантическое время (Канада) (GMT : -3)">
      (GMT-03:00) Атлантическое время (Канада)
    </option>
    <option value="Сантьяго (GMT : -3)">(GMT-03:00) Сантьяго</option>
    <option value="Бразилия (GMT : -3)">(GMT-03:00) Бразилия</option>
    <option value="Ньюфаундленд (GMT : -2.5)">(GMT-02:30) Ньюфаундленд</option>

    <option value="Среднеатлантическое время (GMT : -2)">
      (GMT-02:00) Среднеатлантическое время
    </option>
    <option value="Азорские о-ва (GMT : -1)">(GMT-01:00) Азорские о-ва</option>

    <option value="о-ва Зелёного мыса (GMT : -1)">
      (GMT-01:00) о-ва Зелёного мыса
    </option>
    <option value="Дублин, Лондон, Лиссабон, Эдинбург (GMT : 0)">
      (GMT) Дублин, Лондон, Лиссабон, Эдинбург
    </option>
    <option value="Касабланка, Монровия (GMT : +1)">
      (GMT+01:00) Касабланка, Монровия
    </option>
    <option value="Западная и Центральная Африка (GMT : +1)">
      (GMT+01:00) Западная и Центральная Африка
    </option>
    <option value="Белград, Братислава,	Будапешт, Любляна, Прага (GMT : +1)">
      (GMT+01:00) Белград, Братислава, Будапешт, Любляна, Прага
    </option>
    <option value="Амстердам, Берлин, Берн,	Вена, Рим, Стокгольм (GMT : +1)">
      (GMT+01:00) Амстердам, Берлин, Берн, Вена, Рим, Стокгольм
    </option>
    <option value="Брюссель, Копенгаген, Мадрид, Париж (GMT : +1)">
      (GMT+01:00) Брюссель, Копенгаген, Мадрид, Париж
    </option>
    <option value="Варшава, Загреб,	Сараево, Скопье (GMT : +1)">
      (GMT+01:00) Варшава, Загреб, Сараево, Скопье
    </option>
    <option value="Каир (GMT : +2)">(GMT+02:00) Каир</option>
    <option value="Хараре, Претория (GMT : +2)">
      (GMT+02:00) Хараре, Претория
    </option>

    <option value="Иерусалим (GMT : +2)">(GMT+02:00) Иерусалим</option>
    <option value="Афины, Бухарест (GMT : +2)">
      (GMT+02:00) Афины, Бухарест
    </option>
    <option value="Вильнюс, Рига, София, Таллин, Хельсинки (GMT : +2)">
      (GMT+02:00) Вильнюс, Рига, София, Таллин, Хельсинки
    </option>
    <option value="Калининград (GMT : +2)">(GMT+02:00) Калининград</option>
    <option value="Киев (GMT : +2)">(GMT+02:00) Киев</option>
    <option value="Москва, Санкт-Петербург (GMT : +3)">
      (GMT+03:00) Москва, Санкт-Петербург
    </option>
    <option value="Найроби (GMT : +3)">(GMT+03:00) Найробиdiv div</option>

    <option value="Багдад (GMT : +3)">(GMT+03:00) Багдад</option>
    <option value="Кувейт, Эр-Рияд (GMT : +3)">
      (GMT+03:00) Кувейт, Эр-Рияд
    </option>

    <option value="Стамбул (GMT : +3)">(GMT+03:00) Стамбул</option>
    <option value="Минск (GMT : +3)">(GMT+03:00) Минск</option>
    <option value="Тегеран (GMT : +3.5)">(GMT+03:30) Тегеран</option>
    <option value="Абу-Даби, Мускат (GMT : +4)">
      (GMT+04:00) Абу-Даби, Мускат
    </option>

    <option value="Баку, Ереван, Тбилиси (GMT : +4)">
      (GMT+04:00) Баку, Ереван, Тбилиси
    </option>
    <option value="Самара, Волгоград (GMT : +4)">
      (GMT+04:00) Самара, Волгоград
    </option>

    <option value="Кабул (GMT : +4.5)">(GMT+04:30) Кабул</option>
    <option value="Актюбинск (Актобе) (GMT : +5)">
      (GMT+05:00) Актюбинск (Актобе)
    </option>
    <option value="Исламабад, Карачи, Ташкент (GMT : +5)">
      (GMT+05:00) Исламабад, Карачи, Ташкент
    </option>
    <option value="Екатеринбург (GMT : +5)">(GMT+05:00) Екатеринбург</option>
    <option value="Бомбей, Калькутта,	Мадрас, Нью-Дели (GMT : +5.5)">
      (GMT+05:30) Бомбей, Калькутта, Мадрас, Нью-Дели
    </option>
    <option value="Шри-Джаяварденепура (GMT : +5.5)">
      (GMT+05:30) Шри-Джаяварденепура
    </option>
    <option value="Катманду (GMT : +5.5)">(GMT+05:45) Катманду</option>
    <option value="Астана, Алматы (GMT : +6)">
      (GMT+06:00) Астана, Алматы
    </option>
    <option value="Дхака (GMT : +6)">(GMT+06:00) Дхака</option>
    <option value="Омск (GMT : +6)">(GMT+06:00) Омск</option>
    <option value="Янгун (Рангун) (GMT : +6.5)">
      (GMT+06:30) Янгун (Рангун)
    </option>
    <option value="Бангкок, Джакарта, Ханой (GMT : +7)">
      (GMT+07:00) Бангкок, Джакарта, Ханой
    </option>
    <option value="Красноярск (GMT : +7)">(GMT+07:00) Красноярск</option>
    <option value="Новосибирск (GMT : +7)">(GMT+07:00) Новосибирск</option>
    <option value="Гонконг, Пекин, Урумчи (GMT : +8)">
      (GMT+08:00) Гонконг, Пекин, Урумчи
    </option>
    <option value="Иркутск (GMT : +8)">(GMT+08:00) Иркутск</option>
    <option value="Куала-Лумпур, Сингапур (GMT : +8)">
      (GMT+08:00) Куала-Лумпур, Сингапур
    </option>
    <option value="Тайпей (GMT : +8)">(GMT+08:00) Тайпей</option>
    <option value="Перт (GMT : +8)">(GMT+08:00) Перт</option>
    <option value="Сеул (GMT : +9)">(GMT+09:00) Сеул</option>
    <option value="Осака, Саппоро, Токио (GMT : +9)">
      (GMT+09:00) Осака, Саппоро, Токио
    </option>
    <option value="Якутск (GMT : +9)">(GMT+09:00) Якутск</option>
    <option value="Дарвин (GMT : +9.5)">(GMT+09:30) Дарвин</option>
    <option value="Владивосток (GMT : +10)">(GMT+10:00) Владивосток</option>
    <option value="Брисбейн (GMT : +10)">(GMT+10:00) Брисбейн</option>
    <option value="Гуам, Порт-Морсби (GMT : +10)">
      (GMT+10:00) Гуам, Порт-Морсби
    </option>
    <option value="Аделаида (GMT : +10)">(GMT+10:30) Аделаида</option>
    <option value="Сахалинская	область (GMT : +11)">
      (GMT+11:00) Сахалинская область
    </option>
    <option value="Хобарт (GMT : +11)">(GMT+11:00) Хобарт</option>
    <option value="Канберра, Мельбурн,	Сидней (GMT : +11)">
      (GMT+11:00) Канберра, Мельбурн, Сидней
    </option>
    <option value="Колыма, Курильские острова, Магадан (GMT : +11)">
      (GMT+11:00) Колыма, Курильские острова, Магадан
    </option>
    <option value="Камчатка, Чукотка (GMT : +12)">
      (GMT+12:00) Камчатка, Чукотка
    </option>
    <option value="Фиджи, Маршалловы о-ва (GMT : +12)">
      (GMT+12:00) Фиджи, Маршалловы о-ва
    </option>
    <option value="Окленд,	Веллингтон (GMT : +13)">
      (GMT+13:00) Окленд, Веллингтон
    </option>
    <option value="Нукуалофа (GMT : +13)">(GMT+13:00) Нукуалофа</option>
    <option value="о. Мидуэй, Самоа (GMT : +14)">
      (GMT+14:00) о. Мидуэй, Самоа
    </option>
  </select>
</template>
<script>
export default {
  props: {
    value: {
      default: null,
    },
  },
  data() {
    return {
      selected: this.value,
    };
	}
};
</script>
