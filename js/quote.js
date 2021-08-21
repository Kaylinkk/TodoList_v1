const quotes = [
    {
       quote_n: " Miracles happen to only those who believe in them.",
    },

    {
        quote_n: "Who begins too much accomplishes little.",
    },

    {
        quote_n: "You cannot change what you are, only what you do",
    },

    {
        quote_n:"If you run you stand a chance to loosing, but if you don't run you've already lost",
    },

    {
        quote_n: "The greatest mistake you can make in life is to be continually fearing you will make one.",
    },
    {
        quote_n: "To create more positive results in your life, replace 'if only' with 'next time'.",
    },
    {
        quote_n: "You're braver than you belive, and stronger than you seem, and smarter than you think ",
    },

    {
        quote_n: "Life is a journey, not a guided tour",
    },

    {
        quote_n: "Never confuse a single defeat with a final defeat",
    },
    {
        quote_n: "It is in the moment of decisions that your destiny is shpaed."
    }
]

const quote = document.querySelector("#quotes p");
const arrayQuote = quotes[Math.floor(Math.random() * quotes.length)]



quote.innerText = arrayQuote.quote_n;
