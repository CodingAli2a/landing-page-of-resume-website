const navBtnToggle = document.querySelector('.nav__btn-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuCover = document.querySelector('.mobile-menu-bg')
const resumeAllItems = document.querySelectorAll('.resume-menu__item')
const resumeContents = document.querySelectorAll('.resume__content')
const portfolioListItem = document.querySelectorAll('.portfoli__list-item')


function toggleMobileMenu(){
    
        navBtnToggle.classList.toggle("nav__btn-toggle--active")
        mobileMenu.classList.toggle("mobile-menu--active")
        mobileMenuCover.classList.toggle('mobile-menu-bg--active')
    
}

navBtnToggle.addEventListener("click", toggleMobileMenu)
mobileMenuCover.addEventListener("click", toggleMobileMenu)


// resumeAllItems.forEach(resumeItem=>{

//         resumeItem.addEventListener('click', e=>{
//                 document.querySelector('.resume-menu__item--active').classList.remove('resume-menu__item--active')
//                 let sectionId = resumeItem.dataset.id
//                 document.querySelector('.resume__content--show').classList.remove('resume__content--show')
//                 document.querySelector(`#${sectionId}`).classList.add('resume__content--show')
//                 resumeItem.classList.add("resume-menu__item--active")
//         })

// })


function tabsInitFunc (listItems , listItemActiveClass, contentShowClass){
  
        listItems.forEach(listItem=>{

                listItem.addEventListener('click', e=>{
                        let sectionId = listItem.dataset.id
                        console.log(sectionId);
                        document.querySelector(`.${listItemActiveClass}`).classList.remove(`${listItemActiveClass}`)
                        document.querySelector(`.${contentShowClass}`).classList.remove(`${contentShowClass}`)
                        listItem.classList.add(`${listItemActiveClass}`)
                        document.querySelector(`#${sectionId}`).classList.add(`${contentShowClass}`)
                })
        
        })
        
}


tabsInitFunc(resumeAllItems, 'resume-menu__item--active', 'resume__content--show');
tabsInitFunc(portfolioListItem, 'portfoli__list-item--active', 'portfolio-content--show');


// let isDragStart = false, prevePageX, isDragging = false, prevScrollLeft, positionDeff, sliderWidth;
// const carousel = document.querySelectorAll('.slider');
// const sliderActive = document.querySelector('.slider--active');
// const dotsContainer = document.querySelector('.dots')
// let sliderActiveCount = sliderActive.childElementCount;
// let sliderActiveDots = Math.ceil(sliderActiveCount / 3)
// console.log(sliderActiveDots);
// const firstSlide = document.querySelectorAll('.slider__img')[0];
// const firstSlideWidth = firstSlide.clientWidth + 5;
// const SliderArrows = document.querySelectorAll('.slider-container span')


// const handleDots = () => {
//         for(let i = 0; i<sliderActiveDots; i++){
//                 dotsContainer.insertAdjacentHTML("beforeend", `<div class="dots__dot"></div>`);
//         }
// }

// handleDots();

// const showHideIcons = (carousel) => {
//         sliderWidth = carousel.scrollWidth - carousel.clientWidth
//         SliderArrows[0].style.display = carousel.scrollLeft == 1  ? "none" : "flex";
//         SliderArrows[1].style.display = carousel.scrollLeft == -(sliderWidth-1 || sliderWidth) ? "none" : "flex";
// }

// SliderArrows.forEach(icon=>{
//         icon.addEventListener('click', e=>{
//                 carousel.forEach(carousel=>{
//                 console.log(carousel.scrollLeft, carousel.clientWidth);
                        
//                         carousel.scrollLeft += icon.id == "left" ? -carousel.clientWidth : carousel.clientWidth
//                         setTimeout(() => {
//                              showHideIcons(carousel)   
//                         }, 60);
//                 })
//         })
// })


// const autoSlide = (carousel) => {
//         positionDeff = Math.abs(positionDeff);
//         let firstSlideWidth = firstSlide.clientWidth + 5;
//         let valDiff = firstSlideWidth - positionDeff;

//         if(carousel.scrollLeft > prevScrollLeft){
//                 return Math.abs(carousel.scrollLeft) += positionDeff > firstSlideWidth / 3 ? valDiff : -positionDeff;
//         }
//         Math.abs(carousel.scrollLeft) -= positionDeff > firstSlideWidth / 3 ? valDiff : -positionDeff;

// }


// const draggStart = (carousel,e) => {
//         isDragStart = true;
//         prevePageX = e.pageX || e.touches[0].pageX;
//         prevScrollLeft = carousel.scrollLeft;

// }

// const dragging = (carousel, e) => {
//         // console.log(isDragging);
//         if(!isDragStart) return;
//         // e.preventDefault();
//         carousel.classList.add('dragging')
//         showHideIcons(carousel)
//         isDragging = true;
//         positionDeff = (e.pageX || e.touches[0].pageX) - prevePageX;
//         carousel.scrollLeft = prevScrollLeft - positionDeff
// }

// const draggStop = (carousel) => {
//         isDragStart = false
//         carousel.classList.remove('dragging')
//         if(!isDragging) return;
//         isDragging = false;
//         autoSlide(carousel)  
// }

// carousel.forEach(carousel=>{


//         carousel.addEventListener('mousedown', (e)=>{
//                 draggStart(carousel, e)
//         })
//         carousel.addEventListener('touchstart', (e)=>{
//                 draggStart(carousel, e)
//         })
        
//         carousel.addEventListener('mousemove', (e)=>{
//                 dragging(carousel, e)
//         })
//         carousel.addEventListener('touchmove', (e)=>{
//                 dragging(carousel, e)
//         })
        
        
//         carousel.addEventListener('mouseup', (e)=>{
//                 draggStop(carousel)
//         })
//         carousel.addEventListener('mouseleave', (e)=>{
//                 draggStop(carousel)
//         })
//         carousel.addEventListener('touchend', (e)=>{
//                 draggStop(carousel)
//         })
// })






// const portfolioListItem = document.querySelectorAll(".portfoli__list-item");

// portfolioListItem.forEach(item=>{
//         item.addEventListener("click", e => {
//                 showHideIcons();
//                 let sliderId = item.dataset.id;
//                 let MainSlider = document.querySelector(sliderId)
//                 document.querySelector('.slider--active').classList.remove('slider--active')
//                 document.querySelector('.portfoli__list-item--active').classList.remove('portfoli__list-item--active')
                
//                 item.classList.add('portfoli__list-item--active')
//                 MainSlider.classList.add('slider--active')
                
//         })
// })