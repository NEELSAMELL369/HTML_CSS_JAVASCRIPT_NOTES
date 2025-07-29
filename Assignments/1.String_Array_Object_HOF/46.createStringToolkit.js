const createStringToolkit = (separator = " ") => {
    const join = (...strings) => strings.join(separator);

    const titleCase = (...strings) =>
        join(...strings)
            .split(separator)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(separator);

    const stats = (...strings) => ({
        count: strings.length,
        longest: strings.reduce((longest, str) =>
            str.length > longest.length ? str : longest, "")
    });

    return { join, titleCase, stats };
};


const tk = createStringToolkit("-");
console.log(tk.join("hello", "world"));           
// "hello-world"

console.log(tk.titleCase("the", "quick", "fox")); 
// "The-Quick-Fox"

console.log(tk.stats("a", "ab", "abc"));          
// { count: 3, longest: "abc" }
