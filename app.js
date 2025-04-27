const btn = document.querySelector('button')
const h1 = document.querySelector('h1')
btn.addEventListener('click', ()=>{
    const newColor = makeRandCol();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandCol = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if(r<150 && g<150 && b<150){
        h1.style.color = 'rgb(255,245,235)'
    } else {
        h1.style.color = 'rgb(26, 24, 22)'
    }
    return `rgb(${r}, ${g}, ${b})`;
}

