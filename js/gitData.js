const getData = (callback) => fetch('/data')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        if (callback)
            callback(data);
    })

