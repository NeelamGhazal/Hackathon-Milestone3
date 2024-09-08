var _a;
var uploadedImageUrl = '';
(_a = document.getElementById('resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion for input fields
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var inputFile = document.getElementById('file');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Profile Image</h3>\n            <img src=\"").concat(uploadedImageUrl, "\" alt=\"Profile Image\">\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Disable all form fields
            disableFormFields();
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
// Image upload functionality
var selectImage = document.querySelector('.select-image');
var inputFile = document.querySelector('#file');
var imgArea = document.querySelector('.img-area');
selectImage.addEventListener('click', function () {
    inputFile.click();
});
inputFile.addEventListener('change', function () {
    var image = inputFile.files ? inputFile.files[0] : null;
    if (image && image.size < 2000000) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            uploadedImageUrl = reader_1.result;
            imgArea.style.background = 'none';
            imgArea.innerHTML = "<img src=\"".concat(uploadedImageUrl, "\" alt=\"Profile Image\">");
        };
        reader_1.readAsDataURL(image);
    }
    else {
        alert("Image must be less than 2MB.");
    }
});
// Disable form fields after generating resume
function disableFormFields() {
    var formElements = document.querySelectorAll('#resume input, #resume textarea, #resume button');
    formElements.forEach(function (element) {
        element.disabled = true; // Disables all input and textarea fields, and buttons
    });
    // Optional: Lock down the form visually by fading it out
    var resumeForm = document.getElementById('resume');
    resumeForm.style.opacity = '0.5'; // Slight fade effect to indicate it's locked
    resumeForm.style.pointerEvents = 'none'; // Disable any user interactions with the form
}
