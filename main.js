// abre e fecha o menu quando clicar no icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// quando clicar em um item, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//box shadow é aplicada com scroll da pagina
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (this.window.scrollY) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

//slider swiper
const swiper = new Swiper('.swiper', {
  slidesPreview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  keyboard: true,
  spaceBetween: 50,
  speed: 400
  // autoplay: {
  //   delay: 4000
  // }
})

// Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
})

scrollReveal.reveal(`#home, #propertie, #about, #contact`, { interval: 100 })
