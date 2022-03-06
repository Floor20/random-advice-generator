"use strict";

const dice = document.querySelector(".img-container");
const quote = document.querySelector(".advice");
const quoteNumber = document.querySelector(".advice-number");

const renderQuote = function (num, str) {
  const numberHTML = `
    Advice #${num}
  `;
  const quoteHTML = `
    "${str}"
  `;

  quoteNumber.textContent = numberHTML;
  quote.textContent = quoteHTML;
};

const getNewQuote = async function () {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice`);

    if (!res.ok) throw new Error("Problem getting advice data");

    const {
      slip: { id, advice },
    } = await res.json();

    renderQuote(id, advice);
  } catch (err) {
    console.error(`${err.message}`);
    alert(err.message);
  }
};

dice.addEventListener("click", getNewQuote);
