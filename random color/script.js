window.onload = function(){
    addColor();
}

for(let i = 1; i <= 12; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box)
    box.style.cursor = "pointer";
    box.addEventListener('click', () => {
        // console.log(box.innerHTML)
        // navigator.clipboard.writeText(box.innerHTML)
        // console.log("copied")
        // toastr.success('now you can use it !', 'Copied to clipBoard', {timeout: 3000})
    });
}

const btn = document.querySelector('.btn')
const heading = document.querySelector('.heading'); // Target the heading
const randomColorBlock = document.querySelectorAll('.box')

function RandomHexaColorCode(){
    let chars = '0123456789abcdef';
    let colorLenght = 6;
    let color = ""

    for (let i = 0; i < colorLenght; i++){
        let randomColor = Math.floor(Math.random() * chars.length)
        color += chars.substring(randomColor, randomColor + 1);
    }

    return `#${color}`;
}

function addColor(){
    randomColorBlock.forEach(e => {
        let newColor = RandomHexaColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
            // Change the Refresh background color
    if (btn) {
        let btnColor = RandomHexaColorCode();
        btn.style.backgroundColor = btnColor;
        // btn.innerHTML = btnColor; 
    }

        // Change the body background color
    let bodyColor = RandomHexaColorCode();
    document.body.style.backgroundColor = bodyColor;

    // Change the heading color
    if (heading) {
        let headingColor = RandomHexaColorCode();
        heading.style.color = headingColor;
    }
    
}
