class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer>
    <hr>
<div class="contact-wrapper">
    <div class="contact-item">
        <img src="/Icon/Location.webp" alt="location" class="icon">
        <h3 style="text-align: left;">с-ще Липова Долина, вулиця Троїцька, 2-Б</h3>
    </div>

    <div class="contact-item">
        <img src="/Icon/Phone.webp" alt="phone" class="icon">
        <h3>+380 99 685 8836</h3>
    </div>

    <div class="contact-item">
        <img src="/Icon/Clock.webp" alt="clock" class="icon">
        <div class="text-content">
        <span class='textSpan'>Щодня 09:00 - 18:00</span>
        <span style="font-size: 16px;" class='textSpan'>за домовленістю до 22:00</span>
        </div>
    </div>
    
</div>
<hr>
<div class="footer-wrapper">
<div>
        <h2 class="fotterTittle"">Ми в соц мережах</h2>
        <div class="mesendj-container" > 
<a href="https://www.facebook.com/oksana.mazur.186458" 
   class="mesendj-btn" 
   target="_blank" 
   rel="noopener noreferrer">
    <img src="/Icon/Facebook.svg" class="icon" alt="Facebook">
    <h3>facebook</h3>
</a>
<a href="https://www.instagram.com/soloha_bar?igsh=MWEyNGszdTBwMDVncw==" 
   class="mesendj-btn" 
   style="font-size: 16px; text-decoration: none; display: flex; align-items: center;" 
   target="_blank" 
   rel="noopener noreferrer">
    <img src="/Icon/instagram.svg" class="icon" alt="Instagram"> 
    <h3>instagram</h3>
</a>        </div>
    </div>

    <h3 class="fotterTittle" style="" >Ми на карті</h3>
    <div class="map-wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9635.931513139121!2d33.791082!3d50.564262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4129f138f3d52cfd%3A0x868b952040c04c05!2z0JrQsNGE0LUt0LHQsNGAICLQodC-0LvQvtGF0LAi!5e1!3m2!1suk!2sua!4v1782369618802!5m2!1suk!2sua" width="100%" height="280" style="border:0; border-radius: 8px" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>        </div>
    </div>
</footer>`;
        }

    toggleText() {
        const content = this.querySelector("#text-content");
        const btn = this.querySelector("#text-btn");
        
        const shortText = "Ласкаво просимо до нашого кафе-бару";
        const fullText = "Ласкаво просимо до нашого кафе-бару — місце, де смачна кухня поєднується із атмосферою. Насолоджуйтеся улюбленими стравами та напоями на просторій терасі з чудовим видом на центр міста.";

        if (content.innerHTML === shortText) {
            content.innerHTML = fullText;
            btn.innerHTML = "сховати";
        } else {
            content.innerHTML = shortText;
            btn.innerHTML = "показати більше";
        }
    }
}

customElements.define('app-footer', AppFooter);


