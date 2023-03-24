const quotes = {
    inspirational: [
      "Believe you can and you're halfway there. -Theodore Roosevelt",
      "The only way to do great work is to love what you do. -Steve Jobs",
      "You miss 100% of the shots you don't take. -Wayne Gretzky",
      "The only true wisdom is in knowing you know nothing. -Socrates",
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit. -Aristotle",
      "The unexamined life is not worth living. -Socrates",
      "I think, therefore I am. -René Descartes",
      "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
      "The only way to deal with fear is to face it head on. -Aristotle",
      "The unexamined life is like a road without signposts; it leads nowhere. -Henry David Thoreau",
      "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience. -Eleanor Roosevelt",
      "We are all in the gutter, but some of us are looking at the stars. -Oscar Wilde",
      "The more that you read, the more things you will know. The more that you learn, the more places you'll go. -Dr. Seuss",
    ],
    motivational: [
      "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. -Jimmy Dean",
      "If you want to achieve greatness, stop asking for permission. -Anonymous",
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",
      "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchil",
      "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "The best way to predict your future is to create it. - Abraham Lincoln",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson",
      "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",

    ],
    funny: [
      "I always wanted to be somebody, but now I realize I should have been more specific. -Lily Tomlin",
      "I'm not great at the advice. Can I interest you in a sarcastic comment? -Chandler Bing",
      "I can resist everything except temptation. -Oscar Wilde",
      "I'm not arguing, I'm just explaining why I'm right. - Unknown",
      "I can resist everything except temptation. - Oscar Wilde",
      "The only thing I know is that I know nothing, and I'm not even sure about that. - Socrates",
      "I don't always have a witty comeback. But when I do, I come back five hours later with it. - Unknown",
      "If at first you don't succeed, redefine success. - Unknown",
      "I used to think I was indecisive, but now I'm not sure. - Unknown",
      "I'm not procrastinating, I'm prioritizing my anxieties. - Unknown",
      "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
      "I'm not arguing, I'm just explaining why I'm right. - Unknown",
      "I don't always understand philosophy, but when I do, it's usually on a bumper sticker. - Unknown",
     
    ],
  };
  
  const categorySelect = document.getElementById("category");
  const quoteText = document.getElementById("quote-text");
  
  categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;
    const selectedQuotes = quotes[selectedCategory];
    const randomIndex = Math.floor(Math.random() * selectedQuotes.length);
    const randomQuote = selectedQuotes[randomIndex];
  
    quoteText.innerText = randomQuote;
  });
  