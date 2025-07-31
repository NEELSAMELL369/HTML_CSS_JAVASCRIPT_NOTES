function generateGreeting(name, language = "English") {
  // Define greetings for different languages
  const greetings = {
    English: "Hello",
    Spanish: "Hola",
    French: "Bonjour",
  };

  // Get the greeting for the specified language, or default to English
  const greeting = greetings[language] || greetings["English"];

  return `${greeting}, ${name}!`;
}

// Example usage
console.log(generateGreeting("Alice")); // Output: Hello, Alice!
console.log(generateGreeting("Bob", "Spanish")); // Output: Hola, Bob!
console.log(generateGreeting("Charlie", "French")); // Output: Bonjour, Charlie!
