class AppHeader extends HTMLElement {
    connectedCallback() {
        const content = this.innerHTML.trim();
        const backUrl =
            this.getAttribute('back-url') ||
            '/src/index.html';
        const backIcon = this.getAttribute('back-icon') || "/Icon/headerBack.svg";
        const classIcon = this.getAttribute("classIcon") || "hedclass";
        
        this.innerHTML = `
        <header>
          <div class="header-container">
            <button
              class="${classIcon}"
              type="button"
              data-back-button
            >
              <img src="${backIcon}" alt="Назад">
            </button>

            <button class="menu-btn" id="openMenu" type="button">
              <img src="/Icon/trypoloskyicon.svg" alt="Меню" />
            </button>

            <div class="sidebar" id="sidebar">
              <div class="close-container">
                <button class="close-btn" id="closeMenu" type="button">✕</button>
              </div>

              <div class="sidebar-content">
                <h3 class="fotterTittle">Контакти</h3>
                <div class="contact-wrapper">
                  <div class="contact-item">
                    <img
                      src="/Icon/Heart.svg"
                      alt="Про заклад"
                      class="icon"
                    />
                    <h3>
                      <span id="text-content" class='info'>Ласкаво просимо до нашого кафе-бару</span>
                      <span
                        id="text-btn"
                        onclick="toggleText()"
                        style="color: orange; cursor: pointer; font-size: 16px"
                      >
                        показати більше
                      </span>
                    </h3>
                  </div>

                  <hr />

                  <div class="contact-item">
                    <img
                      src="/Icon/Location.webp"
                      alt="Локація"
                      class="icon"
                    />
                    <h3>с-ще Липова Долина, вулиця Троїцька, 2-Б</h3>
                  </div>

                  <hr />

                  <div class="contact-item">
                    <img src="/Icon/Phone.webp" alt="Телефон" class="icon" />
                    <h3>+380 99 685 8836</h3>
                  </div>

                  <hr />

                  <div class="contact-item">
                    <img src="/Icon/Clock.webp" alt="Графік роботи" class="icon" />
                    <div class="text-content">
                      <span>Щодня 09:00 - 18:00</span>
                      <span style="font-size: 16px">за домовленістю до 22:00</span>
                    </div>
                  </div>


                </div>

                <div>
                  <h2 class="fotterTittle" style="font-size: 24px">Ми в соц мережах</h2>
                  <div class="mesendj-container">
                    <button class="mesendj-btn" type="button" onclick="window.open('https://www.facebook.com/oksana.mazur.186458',)"">
                      <img src="/Icon/Facebook.svg" alt="Facebook" class="icon" />
                      <h3>facebook</h3>
                    </button>
                    <button class="mesendj-btn" style="font-size: 16px" type="button" onclick="window.open('https://www.instagram.com/soloha_bar?igsh=MWEyNGszdTBwMDVncw==',) "">
                      <img src="/Icon/instagram.svg" alt="Instagram" class="icon" />
                      <h3>instagram</h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-component-content">
                ${content}
            </div>
        </header>
        `;

        const backButton = this.querySelector('[data-back-button]');

        backButton?.addEventListener('click', () => {
            window.location.href = backUrl;
        });
         const menuBtn = document.getElementById('openMenu');
    const closeBtn = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');

    // Перевірка чи існують елементи, щоб не було помилок в консолі
    if (!menuBtn || !closeBtn || !sidebar) return;

    const toggleMenu = (isOpen) => {
        sidebar.classList.toggle('active', isOpen);
    };

    // Відкриття
    menuBtn.addEventListener('click', () => toggleMenu(true));

    // Закриття
    closeBtn.addEventListener('click', () => toggleMenu(false));

    // БОНУС: Закриття при кліку на фон (якщо ви додасте overlay)
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            toggleMenu(false);
        }
    });
    }
}

customElements.define('app-header', AppHeader);
