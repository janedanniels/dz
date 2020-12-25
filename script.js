const $ = el => document.querySelector(el)


window.addEventListener('load', () => {
    const logo = $('.header__timer-extra')
    let fifty = 20;

    function count(speed = 0) {
        logo.innerHTML = speed;
        speed++;

        if (speed == 50) {
            fifty = 100;
        }

        if (speed <= 100) {
            setTimeout(() => {
                count(speed);
            }, fifty);
        }
    }
    count();
})

const img = document.querySelectorAll('.main__product-info img');
const view = document.querySelector('.view');
const viewImg = document.querySelector('.view img');
const view__close = document.querySelector('.view__close');

for (let i = 0; i < img.length; i++) {
    document.addEventListener('dblclick', (e) => {
        view.classList.add('active');
        console.log(img[i].getAttribute('src'));
        let attr = img[i].getAttribute('src');
        viewImg.setAttribute('src', attr);
    })
}

view__close.addEventListener('click', () => {
    view.classList.remove('active');
})


