const form = document.getElementById('form') as HTMLFormElement;
const resumedisplayelement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  console.log({ name, email, phone, education, experience, skills });

  const resumegenerator = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span> contenteditable="true" ${name}</span></p>
    <p><b>Email:</b> <span> contenteditable="true" } ${email}</span></p>
    <p><b>Phone:</b> <span> contenteditable="true" } ${phone} </span> <p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  if (resumedisplayelement) {
    resumedisplayelement.innerHTML = resumegenerator;
  } else {
    console.error('Resume display element not found.');
  }
});