import { MENU_DISHES, MENU_CATEGORIES } from './constants.js';

function renderMenuLinks() {
    const menuList = document.getElementById('menu-list');

    if (!menuList) return;

    menuList.innerHTML = MENU_CATEGORIES.map(
        (category) => `
      <li>
        <a href="${category.href}" data-category-id="${category.id}">${category.text}</a>
      </li>
    `,
    ).join('');
}

function createDishItem(dish) {
    return `
      <li class="Dish">
        <div class='forDish'>
            
            <div class="namePrice">
                <h3>${dish?.name}</h3>
                <h2>${dish?.price} грн</h2>
            </div>
        
            <h4 class="description">${dish?.description}</h4>
        
            ${dish?.weight ? `<div class="weightContainer">
                <img src="../../../img/Scales.png" alt="Вага">
                <h5>${dish?.weight}</h5>
            </div>` : ''}
      </li>
    `;
}

function renderMenu() {
    const main = document.getElementById('main');

    if (!main) return;

    main.innerHTML = Object.entries(MENU_DISHES)
        .map(([category, dishes]) => {
            const categoryItem = MENU_CATEGORIES.find(
                (item) => item.id === category,
            );
            

            return `
                <section id="${category}">
                    <div class="nameSection">
                        <img src="/img/vazerunokSection.svg" alt="">
                        <h2>${categoryItem.text}</h2>
                        <img src="/img/vazerunokSection.svg" alt="">

                     </div>
                        <ul class="dish-list" style="background-image: url('${categoryItem.bgImage}');">
                            ${dishes.map(createDishItem).join('')}
                        </ul>
                </section>
            `;
        })
        .join('');
}

function initActiveCategoryOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('#menu-list a');
    const menuList = document.getElementById('menu-list');

    if (!sections.length || !links.length || !menuList) return;

    function scrollActiveCategoryToStart(activeLink) {
        const canScroll = menuList.scrollWidth > menuList.clientWidth;

        if (!canScroll) return;

        menuList.scrollTo({
            left: activeLink.offsetLeft - menuList.offsetLeft,
            behavior: 'smooth',
        });
    }

    function setActiveLink(sectionId) {
        links.forEach((link) => {
            const href = link.dataset.categoryId;
            const isActive = href === sectionId;

            link.classList.toggle('active', isActive);

            if (isActive) {
                scrollActiveCategoryToStart(link);
            }
        });
    }

    function updateActiveCategory() {
        const activationLine = window.innerHeight * 0.14;
        let currentSectionId = sections[0].id;

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= activationLine) {
                currentSectionId = section.id;
            }
        });

        setActiveLink(currentSectionId);
    }

    window.addEventListener('scroll', updateActiveCategory, { passive: true });
    window.addEventListener('resize', updateActiveCategory);
    updateActiveCategory();
}

function getScrollContainer(element) {
    let parent = element.parentElement;

    while (parent) {
        const styles = window.getComputedStyle(parent);
        const overflowY = styles.overflowY;
        const canScroll = parent.scrollHeight > parent.clientHeight;
        const hasScrollOverflow =
            overflowY === 'auto' || overflowY === 'scroll';

        if (canScroll && hasScrollOverflow) {
            return parent;
        }

        parent = parent.parentElement;
    }

    return document.scrollingElement || document.documentElement;
}

function scrollToCategorySection(section) {
    const header = document.querySelector('header');
    const offset = (header?.offsetHeight || 0);
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth',
    });
}

function initCategoryClickScroll() {
    const links = document.querySelectorAll('#menu-list a');

    if (!links.length) return;

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const sectionId = link.getAttribute('href')?.replace('#', '');
            const section = document.querySelector(
                `section[id="${sectionId}"]`,
            );

            if (!section) return;

            links.forEach((categoryLink) =>
                categoryLink.classList.remove('active'),
            );
            link.classList.add('active');

            scrollToCategorySection(section);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenuLinks();
    renderMenu();
    initActiveCategoryOnScroll();
    initCategoryClickScroll();
});
