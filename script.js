console.log("Nice Website")

let cross = document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener('click' , ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')

    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        
        document.querySelector('.ham').style.display= 'inline'
        document.querySelector('.cross').style.display= 'none'
    }
    else{
        document.querySelector('.ham').style.display= 'none'
        document.querySelector('.cross').style.display= 'inline'
    }
})

document.querySelector('.hamburger').addEventListener('click' , ()=>{
    document.querySelector('.main').classList.toggle('mainGo')
})