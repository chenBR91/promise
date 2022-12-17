const getAllUser = document.querySelector('.all-users')
//const createUserDivElem = document.createElement('div');

const getUsers = async function(){
    try{
        const response = await fetch(' https://reqres.in/api/users');
        const answer = await response.json();
        console.log(answer);

        answer['data'].forEach(user => {
            console.log(user);
            const createUserDivElem = document.createElement('div');
            const createAvatar = document.createElement('img');
            const CreateNameP = document.createElement('p');
            const createEmailP = document.createElement('p');

            createUserDivElem.classList.add('user');
            CreateNameP.classList.add('name');
            createEmailP.classList.add('email')

            CreateNameP.innerText = `${user.first_name} ${user.last_name}`;
            createUserDivElem.appendChild(CreateNameP);
            createAvatar.src = user.avatar;
            createUserDivElem.append(createAvatar)
            createEmailP.innerText = user.email;
            createUserDivElem.append(createEmailP)
            getAllUser.appendChild(createUserDivElem);
        })
        
    }catch(error){
        console.log(error);
    }
}

getUsers();