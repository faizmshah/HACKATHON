"use strict";
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skills');
skillsSection.style.display = 'none';
toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Show skills section
        toggleSkillsBtn.textContent = 'Hide Skills'; // Update button text
    }
    else {
        skillsSection.style.display = 'none'; // Hide skills section
        toggleSkillsBtn.textContent = 'View Skills'; // Update button text
    }
});
