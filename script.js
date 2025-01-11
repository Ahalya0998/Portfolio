
function showSection(sectionId) {
  
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

  
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}


window.onload = function() {
    showSection('home');
};











