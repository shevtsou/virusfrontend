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