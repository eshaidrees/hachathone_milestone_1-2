const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

// Toggle skills section visibility
toggleButton.addEventListener('click', () => {
        if (skills.style.display === 'none'|| skills.style.display === '' ) {
            skills.style.display = 'block';
        } else {
            skills.style.display = 'none';
        }
});

