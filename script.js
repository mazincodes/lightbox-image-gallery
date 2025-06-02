'Use strict';
const firstImg1 = document.querySelector('.first-img-1')
const secondImg1 = document.querySelector('.second-img-1')
const firstImg2 = document.querySelector('.first-img-2')
const secondImg2 = document.querySelector('.second-img-2')
const firstImg3 = document.querySelector('.first-img-3')
const secondImg3 = document.querySelector('.second-img-3')
const firstImg4 = document.querySelector('.first-img-4')
const secondImg4 = document.querySelector('.second-img-4')
const firstImg5 = document.querySelector('.first-img-5')
const secondImg5 = document.querySelector('.second-img-5')
const firstImg6 = document.querySelector('.first-img-6')
const secondImg6 = document.querySelector('.second-img-6')
const firstImg7 = document.querySelector('.first-img-7')
const secondImg7 = document.querySelector('.second-img-7')
const firstImg8 = document.querySelector('.first-img-8')
const secondImg8 = document.querySelector('.second-img-8')
const firstImg9 = document.querySelector('.first-img-9')
const secondImg9 = document.querySelector('.second-img-9')

async function fetchImages(query){
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=9`, {
    headers: {
        'Authorization': 'oCR9pO23hUXuGgEMe1GXv9Q2MYXDO3gXhD60vtrrLE2NZMyCXoriEGE2'
    }
    })
    const data = await response.json()
        console.log(data);
        const photo = data.photos;
        console.log(data.photos);
        firstImg1.href = photo[0].src.large2x
        secondImg1.src = photo[0].src.large2x
        firstImg1.setAttribute('data-title', photo[0].alt)
        firstImg2.href = photo[1].src.large2x
        secondImg2.src = photo[1].src.large2x
        firstImg2.setAttribute('data-title', photo[1].alt)
        firstImg3.href = photo[2].src.large2x
        secondImg3.src = photo[2].src.large2x
        firstImg3.setAttribute('data-title', photo[2].alt)
        firstImg4.href = photo[3].src.large2x
        secondImg4.src = photo[3].src.large2x
        firstImg4.setAttribute('data-title', photo[3].alt)
        firstImg5.href = photo[4].src.large2x
        secondImg5.src = photo[4].src.large2x
        firstImg5.setAttribute('data-title', photo[4].alt)
        firstImg6.href = photo[5].src.large2x
        secondImg6.src = photo[5].src.large2x
        firstImg6.setAttribute('data-title', photo[5].alt)
        firstImg7.href = photo[6].src.large2x
        secondImg7.src = photo[6].src.large2x
        firstImg7.setAttribute('data-title', photo[6].alt)
        firstImg8.href = photo[7].src.large2x
        secondImg8.src = photo[7].src.large2x
        firstImg8.setAttribute('data-title', photo[7].alt)
        firstImg9.href = photo[8].src.large2x
        secondImg9.src = photo[8].src.large2x
        firstImg9.setAttribute('data-title', photo[8].alt)
}

const form = document.getElementById('form');
const search = document.getElementById('search');
const imgs = document.querySelectorAll('img');

const animation = [
    {transform: 'scale(1.07) translateY(250px) rotate(5deg)', opacity: 0},
    {transform: 'scale(1) translateX(0px) rotate(0deg)'},
]

const animationTiming = {
    duration: 2000,
    iterations: 1
}


window.addEventListener('DOMContentLoaded', function() {
form.addEventListener('submit', function(e){
    e.preventDefault();
    const formEl = e.currentTarget;
    console.log(formEl);
    const formData = new FormData(formEl);
    console.log(formData);
    const str = formData.get('image')
    console.log(str);
    const html = `
    <div class="results-container">
    <h2 class="results">Search results for: ${str}</h2>
    </div>`
    
    const existingResult = document.querySelector('.results-container');
    if (existingResult) {
        existingResult.remove();
    }
    
    if(str !== ''){
        form.insertAdjacentHTML('afterend', html)
        imgs.forEach((img) => {
            img.style.opacity = 0
        })
        setTimeout(() => {
            imgs.forEach((img) => {
                img.style.opacity = 1
                img.animate(animation, animationTiming)
            })
        }, 2000);
    }
     
    fetchImages(str)
    search.value = ''
    search.blur()
    })
})