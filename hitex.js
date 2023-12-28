// JavaScript to trigger the fade-in effect when the page loads
window.addEventListener('load', function () {
    var fraudAlert = document.getElementById('fraud-alert');
    fraudAlert.style.opacity = 1;
});
const languageTranslations = {
    english: "This text will change automatically",
    french: "Ce texte changera automatiquement",
    spanish: "Este texto cambiará automáticamente",
    Chinese: "这个文本将自动更改"
  };
  function changeLanguage(language) {
    const languageText = document.getElementById("languageText");
    if (languageText) {
      languageText.classList.remove("fade-in");
  
      setTimeout(() => {
        languageText.textContent = languageTranslations[language] || languageTranslations.english;
        languageText.classList.add("fade-in");
      }, 300); 
    }
  }

  setInterval(() => {
    const languages = Object.keys(languageTranslations);
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    changeLanguage(randomLanguage);
  }, 3000); 

  document.addEventListener("DOMContentLoaded", function () {
    const languageLinks = document.querySelectorAll('.language-link');
    
    const welcomeTranslations = {
      'english': 'Welcome',
      'chinese': '欢迎',
      'french': 'Bienvenue',
      'spanish': 'Bienvenido',
      'japanese': 'ようこそ',
      'arabic': 'أهلاً بك', 
  };
    languageLinks.forEach(function (link) {
        // Store the original text in a data attribute
        link.setAttribute('data-original-text', link.textContent);

        link.addEventListener('mouseover', function () {
            const selectedLanguage = link.getAttribute('data-lang');
            link.textContent = welcomeTranslations[selectedLanguage];
        });

        link.addEventListener('mouseout', function () {
            // Retrieve the original text from the data attribute
            const originalText = link.getAttribute('data-original-text');
            link.textContent = originalText;
        });
    });
});


function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}

var careersLink = document.getElementById('careersLink'); 
var popupMessage = document.getElementById('popupMessage');

careersLink.addEventListener('mouseover', function () {
 
  popupMessage.style.display = 'block';
});
careersLink.addEventListener('mouseout', function () {
  popupMessage.style.display = 'none';
});  

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = (sidebar.style.left === '0px') ? '-250px' : '0px';
}
function togglelanguageList() {
  var languageList = document.querySelector('.language-list');
  languageList.style.display = (languageList.style.display === 'block') ? 'none' : 'block';
  var isLanguageListVisible = languageList.style.display === 'block';
  languageList.style.backgroundColor = isLanguageListVisible ? '#dad2d2' : 'transparent';
  languageList.style.fontSize = isLanguageListVisible ? '60px' : 'inherit';
}







