// https://api.quotable.io
'use strict';

const newQuoteBtn = document.querySelector('.new_quote');
const blockquote = document.querySelector('blockquote');

const Joke = function (jokeText) {
    blockquote.innerHTML = jokeText; // Replaces the content instead of adding to it
};

const joke_quote = function () {
    fetch("https://geek-jokes.sameerkumar.website/api?format=json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Joke(data.joke);
        })
        .catch(err => console.error('Error fetching joke:', err));
};

newQuoteBtn.addEventListener('click', joke_quote);
