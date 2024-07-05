var signInBtn = document.querySelector('.rightNav button');
var accountSections = [

    document.querySelector('#signIn'),
    document.querySelector('#signUp'),
    document.querySelector('#resetPass'),
]

accountSections.forEach((section)=>{
    section.querySelector('.overLay').addEventListener('click', () => {
        section.style.display = 'none';
    });
})
signInBtn.addEventListener('click', () => {
    accountSections[0].style.display = 'block';
});

accountSections[0].querySelector('a.forgotPass').addEventListener('click', () => {
    accountSections[0].style.display = 'none';
    accountSections[2].style.display = 'block';
})
accountSections[0].querySelector('a.signUp').addEventListener('click', () => {
    accountSections[0].style.display = 'none';
    accountSections[1].style.display = 'block';
})

accountSections[1].querySelector('a.signIn').addEventListener('click', () => {
    accountSections[1].style.display = 'none';
    accountSections[0].style.display = 'block';
})

accountSections[2].querySelector('a.signIn').addEventListener('click', () => {
    accountSections[2].style.display = 'none';
    accountSections[0].style.display = 'block';
})
accountSections[2].querySelector('a.signUp').addEventListener('click', () => {
    accountSections[2].style.display = 'none';
    accountSections[1].style.display = 'block';
})


