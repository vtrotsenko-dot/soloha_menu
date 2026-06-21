const shortText = "Ресторан SHEFF – місце, де смак, затишок та незабутні моменти...";
const fullText = "Ресторан SHEFF – місце, де смак, затишок та незабутні моменти зустрічаються! SHEFF - це місце, де кожен відвідувач знаходить своє задоволення. Затишна тераса, стильні зали та банкетний зал створюють ідеальну атмосферу для незабутніх моментів.";

function toggleText() {
    // Звертаємося до того самого ID, що і в HTML
    const content = document.getElementById("text-content");
    const btn = document.getElementById("text-btn");

    if (content.innerHTML === shortText) {
        content.innerHTML = fullText;
        btn.innerHTML = "сховати";
    } else {
        content.innerHTML = shortText;
        btn.innerHTML = "показати більше";
    }
}

document.addEventListener('scroll', (e) => {
    
})