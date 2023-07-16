
const getRandomBool = () => {
    return Math.random() < 0.5;
}

const getRandomDate = () => {
    const start = new Date(2000, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const getRandomInt = () => {
    const min = Math.ceil(Number.MIN_VALUE);
    const max = Math.floor(Number.MAX_VALUE);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomText = () => {
    const listEvent = ['Веницианский карнавал танцев и богохульных плясок: смотрим вместе',
        'Солнцестоим вместе или как провести выходные продуктивно',
        'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',
        'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',
        'К посещению приглашаются сотрудники 18-',
        'Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',
        'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',
        'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать'
    ]

    const  randomIndex = Math.floor(Math.random() * listEvent.length);
    return listEvent[randomIndex];
}

const getRandomAuthor = () => {
    const nameList = ['Петр', 'Василий', 'Николай', 'Олег', 'Павел'];
    const surnameList = ['Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный']
    const  randomNameIndex = Math.floor(Math.random() * nameList.length);
    const randomSurnameIndex = Math.floor(Math.random() * surnameList.length);
    return `${nameList[randomNameIndex]} ${surnameList[randomSurnameIndex]}`;
}

const getEvent = () => {
    return {
        date: getRandomDate(),
        title: getRandomText(),
        description: getRandomText(),
        countLikes: getRandomInt(),
        names: getRandomAuthor(),
        registrationDisabled: getRandomBool()
    }
}

const getEvents = (count = 10) => {
    let events = [];
    for (let i = 0; i < count; i++) {
        events.push(getEvent());
    }
    return events;
}
