const shortText = "Ласкаво просимо до нашого кафе-бару — місце, де...";
const fullText = "Ласкаво просимо до нашого кафе-бару — місце, де смачна кухня поєднується із атмосферою. Насолоджуйтеся улюбленими стравами та напоями на просторій терасі з чудовим видом на центр міста.";

function toggleText() {
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