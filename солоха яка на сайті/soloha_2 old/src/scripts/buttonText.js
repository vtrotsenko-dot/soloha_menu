const shortText = "Ласкаво просимо до нашого кафе-бару";
const fullText = "Ласкаво просимо до нашого кафе-бару — місце, де смачна кухня поєднується із атмосферою. Насолоджуйтеся улюбленими стравами та напоями на просторій терасі з чудовим видом на центр міста.";

function toggleText() {
    const content = document.getElementById("text-content");
    const btn = document.getElementById("text-btn");

    // Перевіряємо за атрибутом або спеціальною змінною, а не за текстом
    const isExpanded = content.getAttribute('data-expanded') === 'true';

    if (!isExpanded) {
        content.textContent = fullText; // textContent безпечніший, ніж innerHTML
        btn.textContent = "сховати";
        content.setAttribute('data-expanded', 'true');
    } else {
        content.textContent = shortText;
        btn.textContent = "показати більше";
        content.setAttribute('data-expanded', 'false');
    }
}