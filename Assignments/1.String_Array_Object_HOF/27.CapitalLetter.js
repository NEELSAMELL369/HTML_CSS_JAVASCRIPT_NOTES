function capitalizeWords(str) {
    return str.replace(/\S+/g, (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
}


const str = "   hello   world this is   javascript ";
const output = capitalizeWords(str);
console.log(output);  // "   Hello   World This Is   Javascript "



// function capitalizeWords(str: string): string {
//     return str.replace(/\S+/g, (word: string) => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });
// }

// const str: string = "   hello   world this is   javascript ";
// const output: string = capitalizeWords(str);
// console.log(output);  // "   Hello   World This Is   Javascript "
