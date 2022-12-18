const boxMain = document.querySelector('.box');
const labelPage = document.querySelector('label');
const forwardBtn = document.querySelector('.forwardBtn')
let page = 1;
labelPage.innerHTML = page;


function toMakeDiv(answer){
    answer.forEach(data => {
        console.log('data', data.url);
        const createDivImage = document.createElement('div');
        const createImage = document.createElement('img');
        // add attribute class
        createDivImage.classList.add('div-image');
        createImage.classList.add('image');
        createImage.src = data.url;
        
        createDivImage.append(createImage);
        boxMain.append(createDivImage)
    })
}

const getCats = async function() {
    try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const answer = await response.json();
        //console.log(answer);
        toMakeDiv(answer)
    }catch(error) {
        console.log(error);
    }
    
}


forwardBtn.addEventListener("click", function(evn){
    page += 1;
    labelPage.innerHTML = page;
    const getCatPage = async function(){
        try{
            //const params = new URLSearchParams(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`);
            //console.log('param', params);
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`);
            const answer = await response.json();
            console.log(answer);
            toMakeDiv(answer)
        }catch(error){
            console.log(error);
        }
        
    }
    getCatPage();
})

getCats()


