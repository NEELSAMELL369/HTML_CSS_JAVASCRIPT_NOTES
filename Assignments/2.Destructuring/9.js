function flattenConfig(cfg) {
    const {
        meta: { title },
        theme: { primary: themePrimary },
        authors: [, featuredAuthor] // grab the second author
    } = cfg;

    return {
        title, primaryColor: themePrimary, featuredAuthor
    };
}

const blogCfg = {
    meta: { title: "JS Wizardry" },
    theme: { primary: "#3498db", secondary: "#2ecc71" },
    authors: ["Alice", "Bob", "Charlie"]
};

console.log(flattenConfig(blogCfg));
// Expected: { title: 'JS Wizardry', primaryColor: '#3498db', featuredAuthor: 'Bob' }

console.log(blogCfg === blogCfg); // true, just a sanity check
