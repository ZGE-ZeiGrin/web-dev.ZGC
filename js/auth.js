const loginCard = document.getElementById('login-card');
const signupCard = document.getElementById('signup-card');

const toSignupLink = document.getElementById('to-signup');
const toLoginLink = document.getElementById('to-login');

toSignupLink.addEventListener('click' , (e) => {
    e.preventDefault();
    loginCard.classList.add('hidden');
    signupCard.classList.remove('hidden');
});

toLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupCard.classList.add('hidden');
    loginCard.classList.remove('hidden');
});