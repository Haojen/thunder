export default function (amount = 10, min = 0, max = 100) {
    const result = []

    for (let i = 0; i < amount; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1) + min))
    }

    return result.length === 1 ? result[0] : result
}
