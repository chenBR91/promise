const userEmail = document.querySelector('.email');
const userGender = document.querySelector('.gender');
const userCountry = document.querySelector('.country');
const userCity = document.querySelector('.city');
const divImage = document.querySelector('.image');

const createImage = document.createElement('img');


const getUser = async function(){
    try {
        const response = await fetch('https://randomuser.me/api/');
        const answer = await response.json();

        console.log('answer', answer);
        const resultUser = {
            email: answer['results'][0].email,
            gender: answer['results'][0].gender,
            city: answer['results'][0]['location'].city,
            country: answer['results'][0]['location'].country,
            image: answer['results'][0]['picture'].large,
        }
        
        userEmail.innerHTML = resultUser.email;
        userGender.innerHTML = resultUser.gender;
        userCountry.innerHTML = resultUser.country;
        userCity.innerHTML = resultUser.city;
        createImage.src = resultUser.image;
        divImage.appendChild(createImage);
       
    }
    catch(error){
        console.log(error);
    }
}

getUser();

