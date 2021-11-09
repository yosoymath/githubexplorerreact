type User = {
    name: string
    email: string 
    address:{
        city: string
        state: string
    }
}

function showWelcomeMessage(user: User){
    return 'Welcome ${user.name}, your email is ${user.email}. Your city is ${user.address.city}, and your state is ${user.address.state}';
}

const user ={
    name: 'Jonh Doe',
    email: 'jonh@doe.com',
    address:{
        city: 'New York',
        state: 'NW',
    }
}

const message = showWelcomeMessage(user)