const navbar = document.querySelector('.navbar')
const menu =document.querySelector('.menu')
const menuItem = document.querySelector('.menu-item')
const checkIn = document.querySelector('.check-in')
const checkOut = document.querySelector('.check-out')
const dyCalendar = document.querySelector('#dycalendar')
const guest = document.querySelector('.guest')
const addGuest = document.querySelector('.add-guest')

guest.addEventListener('click', function(){
    addGuest.style.visibility='visible'
    dyCalendar.style.visibility ='hidden'
})

window.onscroll = function(){
    let top = window.scrollY;
    if(top > 0){
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
       
        
    }
}

menu.addEventListener('click',function(){
    if(menuItem.style.visibility === 'hidden'){
        menuItem.style.visibility= 'visible';
    }else{
        menuItem.style.visibility= 'hidden';
    }
    
})


function calender(){
        dyCalendar.style.visibility = 'visible'
        addGuest.style.visibility = 'hidden'
  
}


checkIn.addEventListener('click', calender)
checkOut.addEventListener('click', calender)

// document.addEventListener('click', function(event){
//     if(event.target.closest('#dycalendar')) return
//     dyCalendar.style.visibility = 'hidden'
// })