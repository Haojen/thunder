import randomRangeNumber from "./randomRangeNumber"

const colorData = [
    {
        name: 'Blue Purple',
        colors: ['#5559AD', '#618CB4']
    },
    {
        name: 'Skyline',
        colors: ['#2B32B2', '#1488CC']
    }
]
export default function () {
    return colorData[randomRangeNumber(1, 0, colorData.length - 1)]
}
