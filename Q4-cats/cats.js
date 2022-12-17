
const getCats = async function() {
    try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const answer = await response.json();

        console.log(answer);
    }catch(error) {
        console.log(error);
    }
    
}

getCats()