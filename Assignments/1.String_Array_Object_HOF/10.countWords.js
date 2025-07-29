const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth."
];

const countWords = (arr) => {
    arr.forEach((sentence, index) => {
        
        const wordCount = sentence.split('').filter(word => word !== ' ').length;

        console.log(`Sentence ${index + 1} contains ${wordCount} words.`);
    });
};

countWords(sentences);


// Output
// Sentence 1 contains 36 words.
// Sentence 2 contains 31 words.
// Sentence 3 contains 42 words.
// Sentence 4 contains 32 words.
// Sentence 5 contains 47 words.