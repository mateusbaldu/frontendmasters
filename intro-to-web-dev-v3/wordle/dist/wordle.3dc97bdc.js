const getUrl = "https://words.dev-apis.com/word-of-the-day";
const postUrl = "https://words.dev-apis.com/validate-word";
async function getWordOfTheDay() {
    const response = await fetch(getUrl);
    const data = await response.json();
    return data.word.toUpperCase();
}
const wordOfTheDay = getWordOfTheDay();
async function validateWord(word) {
    const response = await fetch(postUrl, {
        method: "POST",
        body: JSON.stringify({
            word
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data.validWord;
}
const rows = document.querySelectorAll(".row");
let currentRowIndex = 0;
let currentColumnIndex = 0;
document.addEventListener("keydown", (event)=>{
    const currentRow = rows[currentRowIndex];
    const currentTiles = currentRow.querySelectorAll(".char");
    if (/^[a-z]$/i.test(event.key)) {
        if (currentColumnIndex < 5) {
            currentTiles[currentColumnIndex].textContent = event.key.toUpperCase();
            currentColumnIndex += 1;
        }
        return;
    }
    if (event.key === "Enter") {
        if (currentColumnIndex === 5 && currentRowIndex < rows.length - 1) {
            currentRowIndex += 1;
            currentColumnIndex = 0;
        }
        return;
    }
    if (event.key === "Backspace") {
        event.preventDefault();
        if (currentColumnIndex > 0) {
            currentColumnIndex -= 1;
            currentTiles[currentColumnIndex].textContent = "";
        }
    }
});

//# sourceMappingURL=wordle.3dc97bdc.js.map
