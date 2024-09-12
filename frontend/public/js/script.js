let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
   if (toggleBtn) toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
   if (toggleBtn) toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
};

// Inicializar o modo escuro se já estiver habilitado
if (darkMode === 'enabled') {
   enableDarkMode();
}

if (toggleBtn) {
   toggleBtn.onclick = (e) => {
      darkMode = localStorage.getItem('dark-mode');
      if (darkMode === 'disabled') {
         enableDarkMode();
      } else {
         disableDarkMode();
      }
   };
}

let profile = document.querySelector('.header .flex .profile');
let userBtn = document.querySelector('#user-btn');
let search = document.querySelector('.header .flex .search-form');
let searchBtn = document.querySelector('#search-btn');
let sideBar = document.querySelector('.side-bar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');

// Alternar o perfil quando o botão de usuário for clicado
if (userBtn && profile) {
   userBtn.onclick = () => {
      profile.classList.toggle('active');
      if (search) search.classList.remove('active');
   };
}

// Alternar a barra de pesquisa quando o botão de pesquisa for clicado
if (searchBtn && search) {
   searchBtn.onclick = () => {
      search.classList.toggle('active');
      if (profile) profile.classList.remove('active');
   };
}

// Alternar a barra lateral quando o botão de menu for clicado
if (menuBtn && sideBar) {
   menuBtn.onclick = () => {
      sideBar.classList.toggle('active');
      body.classList.toggle('active');
   };
}

// Fechar a barra lateral quando o botão de fechar for clicado
if (closeBtn && sideBar) {
   closeBtn.onclick = () => {
      sideBar.classList.remove('active');
      body.classList.remove('active');
   };
}

// Fechar o perfil e a pesquisa quando a página for rolada
window.onscroll = () => {
   if (profile) profile.classList.remove('active');
   if (search) search.classList.remove('active');

   if (window.innerWidth < 1200 && sideBar) {
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
};
