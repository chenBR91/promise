const selectBreeds = document.querySelector('.selectBreeds');
const resultImage = document.querySelector('.resultImage');
const createImageBeed = document.createElement('img');

const getBreedCars = async function() {
    try{
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        const answer = await response.json()
        console.log(answer);

        // create options
        answer.forEach(breeds => {
            const createOptionBreed = document.createElement('option');
            createOptionBreed.value = breeds.id;
            createOptionBreed.text = breeds.name;
            selectBreeds.append(createOptionBreed);
        })
        
    }catch(error){
        console.log(error);
    }    
}


selectBreeds.addEventListener('change', function(event) {
    const getBreedUrl = async function(){
        console.log(event.target.value);
        const breedId = event.target.value;
        try{
            const responseBreedUrl = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
            const answerBreedUrl = await responseBreedUrl.json();
            console.log('answerBreedUrl', answerBreedUrl);
            createImageBeed.src = answerBreedUrl[0].url;
            createImageBeed.classList.add('imageCat')
            resultImage.append(createImageBeed)
        }
        catch(error) {
            console.log(error);
        }
    }
    getBreedUrl()
})


getBreedCars();