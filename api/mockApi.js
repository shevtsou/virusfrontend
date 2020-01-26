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