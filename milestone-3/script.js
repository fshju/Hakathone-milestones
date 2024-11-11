// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById ('resume-display') as HTMLDivElement;
// form.addEventListener('submit',(event: Event)=>{
//     event.preventDefault();
//     const name = (document.getElementById('name') as HTMLInputElement).value.trim();
//     const email = (document.getElementById('email') as HTMLInputElement).value.trim();
//     const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
//     const experience = (document.getElementById('experirnce') as HTMLTextAreaElement).value.trim();
//     const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();
//     const resumeHTML = `
//     <h2><b>Resume</b></h2>
//     <h3>Personal Infromation</h3>
//     <p><B>Name:</b>${name}</p>
//     <p><b>Email:</b>${email}</p>
//     <p><b>Phone:</b>${phone}</p>
//     <h3>Education</h3>
//     <p>${education}</p>
//     <h3>Experience</h3>
//     <p>${experience}</p>
//     <h3>Skills</h3>
//     <p>${skills}</p>
//     `;
//     if (resumeDisplayElement){
//         resumeDisplayElement.innerHTML = resumeHTML;
//     }else{
//         console.log('Resume display element not found');
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var education = document.getElementById('education').value.trim();
        var experience = document.getElementById('experience').value.trim();
        var skills = document.getElementById('skills').value.trim();
        var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b>".concat(name, "</p>\n        <p><b>Email:</b>").concat(email, "</p>\n        <p><b>Phone:</b>").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.log('Resume display element not found');
        }
    });
});
