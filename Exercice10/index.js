// function printNumbers(n) {

//     let str = "";

//     for (let i = 1; i <= n; i++) {
//         str = str + i +  " ";
//     }

//     return str.trim();
// }

function printNumbers(n) {
    return [...Array(n+1).keys()].slice(1).map(i => ` ${i}`).join("").trim()
}
[]
export default printNumbers
