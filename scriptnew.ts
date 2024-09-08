let uploadedImageUrl = '';

document.getElementById('resume')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertion for input fields
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const inputFile = document.getElementById('file') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Profile Image</h3>
            <img src="${uploadedImageUrl}" alt="Profile Image">
        `;

        const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

            // Disable all form fields
            disableFormFields();
        }
    } else {
        console.error('One or more input elements are missing');
    }
});

// Image upload functionality
const selectImage = document.querySelector('.select-image') as HTMLButtonElement;
const inputFile = document.querySelector('#file') as HTMLInputElement;
const imgArea = document.querySelector('.img-area') as HTMLDivElement;

selectImage.addEventListener('click', function () {
    inputFile.click();
});

inputFile.addEventListener('change', function () {
    const image = inputFile.files ? inputFile.files[0] : null;

    if (image && image.size < 2000000) {
        const reader = new FileReader();
        reader.onload = () => {
            uploadedImageUrl = reader.result as string;
            imgArea.style.background = 'none';
            imgArea.innerHTML = `<img src="${uploadedImageUrl}" alt="Profile Image">`;
        };
        reader.readAsDataURL(image);
    } else {
        alert("Image must be less than 2MB.");
    }
});

// Disable form fields after generating resume
function disableFormFields() {
    const formElements = document.querySelectorAll('#resume input, #resume textarea, #resume button');
    formElements.forEach(element => {
        (element as HTMLInputElement).disabled = true;  // Disables all input and textarea fields, and buttons
    });

    // Optional: Lock down the form visually by fading it out
    const resumeForm = document.getElementById('resume') as HTMLFormElement;
    resumeForm.style.opacity = '0.5';  // Slight fade effect to indicate it's locked
    resumeForm.style.pointerEvents = 'none';  // Disable any user interactions with the form
}
