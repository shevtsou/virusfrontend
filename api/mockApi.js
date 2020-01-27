export const loadStatistic = async () => {
    return new Promise((resolve) => 
        setTimeout(() => {
            resolve({
                infected: 1974,
                died: 56
            })
        }, 0)
    )
}

export const loadInfectionPerCountry = async () => {
    return new Promise((resolve) => 
        setTimeout(() => {
            resolve([
                {
                    country: "China",
                    count: 1200
                },
                {
                    country: "USA",
                    count: 300,
                }, {
                    country: "France",
                    count: 12
                }, {
                    country: "Japan",
                    count: 3
                }, {
                    country: "Japan",
                    count: 3
                }, {
                    country: "Japan",
                    count: 3
                }, {
                    country: "Japan",
                    count: 3
                }
            ])
        }, 0)
    )
}

export const loadNews = async () => {
    return new Promise((resolve) => 
        setTimeout(() => {
            resolve([
                {
                    title: "Second death in china",
                    date: "10:00 26.01.2020",
                    description: "asdfasdfzxcv asdf asdf",
                    imageUrl: "https://picsum.photos/700"
                }, {
                    title: "Second death in china",
                    date: "10:00 26.01.2020",
                    description: "asdfasdfzxcv asdf asdf",
                    imageUrl: "https://picsum.photos/700"
                }, {
                    title: "Second death in china",
                    date: "10:00 26.01.2020",
                    description: "asdfasdfzxcv asdf asdf",
                    imageUrl: "https://picsum.photos/700"
                }, {
                    title: "Second death in china",
                    date: "10:00 26.01.2020",
                    description: "asdfasdfzxcv asdf asdf",
                    imageUrl: "https://picsum.photos/700"
                }, {
                    title: "Second death in china",
                    date: "10:00 26.01.2020",
                    description: "asdfasdfzxcv asdf asdf",
                    imageUrl: "https://picsum.photos/700"
                }, {
                    title: "Second death in china",
                    date: "10:00 26.01.2020",
                    description: "asdfasdfzxcv asdf asdf",
                    imageUrl: "https://picsum.photos/700"
                }, {
                    title: "Second death in china",
                    date: "10:00 26.01.2020",
                    description: "asdfasdfzxcv asdf asdf",
                    imageUrl: "https://picsum.photos/700"
                }, {
                    title: "Second death in china",
                    date: "10:00 26.01.2020",
                    description: "asdfasdfzxcv asdf asdasdfasdfasdfasdfasdfasf",
                    imageUrl: "https://picsum.photos/700"
                }
            ])
        }, 1000)
    )
}