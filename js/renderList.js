const renderTable = async (data) => {
    const table = document.getElementById('table');
    data.forEach((row)=> {
        const container = document.createElement('div');
        container.setAttribute('class', 'table-row')
        // Дата мероприятия
        const dataContainer = document.createElement('span')
        dataContainer.setAttribute('class', "table-event-date");
        const dataContainerText = document.createElement('span')
        dataContainerText.setAttribute('class', 'table-event-data-text');
        dataContainerText.innerText = row.date;
        dataContainer.appendChild(dataContainerText);
        container.appendChild(dataContainer);
        
        // Информация о мероприятии
        const eventContainer = document.createElement('span')
        eventContainer.setAttribute('class', "table-event");
        const eventContainerName = document.createElement('span')
        eventContainerName.setAttribute('class', 'table-event-name');
        eventContainerName.innerText = row.title;
        const eventContainerInfo = document.createElement('span')
        eventContainerInfo.setAttribute('class', 'table-event-info');
        eventContainerInfo.innerText = row.description;
        eventContainer.appendChild(eventContainerName);
        eventContainer.appendChild(eventContainerInfo);
        container.appendChild(eventContainer);
        
        // Кол-во лайков
        const eventContainerLike = document.createElement('span')
        eventContainerLike.setAttribute('class', "table-event-like");
        const eventContainerImage = document.createElement('img');
        eventContainerImage.setAttribute('class', 'table-event-like-image');
        eventContainerImage.setAttribute('src', 'image/like.svg');
        const eventContainerLikeCount = document.createElement('span')
        eventContainerLikeCount.setAttribute('class', 'table-event-like-count');
        eventContainerLikeCount.innerText = row.countLikes;
        eventContainerLike.appendChild(eventContainerImage);
        eventContainerLike.appendChild(eventContainerLikeCount);
        container.appendChild(eventContainerLike);

        // Авторы
        const authorContainer = document.createElement('span')
        authorContainer.setAttribute('class', "table-event-author");
        const authorName = document.createElement('span')

        row.names.forEach(name => {
            const authorLink = document.createElement('a');
            authorLink.setAttribute('href', '#');
            authorLink.innerText = name;
            authorName.appendChild(authorLink);
        })

        authorContainer.appendChild(authorName);
        container.appendChild(authorContainer);
        
        // Кнопка регистрации
        const buttonContainer = document.createElement('span')
        buttonContainer.setAttribute('class', "table-event-registry");
        const button = document.createElement('button')
        button.setAttribute('class', 'table-event-button');
        const buttonText = document.createElement('p');
        
        if (row.registrationDisabled) {
            button.setAttribute('class', 'table-event-button button-disable')
            buttonText.setAttribute('class', 'table-event-text')
        } else {
            button.setAttribute('class', 'table-event-button')
            buttonText.setAttribute('class', 'table-event-text-active')
            button.addEventListener('click', ()=> {
                showFrom();
            })
        }
        buttonText.innerText = 'Зарегистрироваться'
        button.appendChild(buttonText);
        buttonContainer.appendChild(button);
        container.appendChild(buttonContainer);
        table.appendChild(container);
    })
}
