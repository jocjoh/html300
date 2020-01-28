const person = {
    name: "Steve Smith",
    jobTitle: "Project Manager",
    company: "Front End Dev Co",
    experience: "3 years",
    school: "UW",
    major: "Marketing",
    email: "steve@fedc.com",
    linkedInUrl: "steve.linkedinprofile.com",
    codeLanguages: [
        "HTML", "CSS", "JavaScript", ".NET", "C#"
    ]
  }

const myCode = `
    <main class="main">
      <div class="background">
        <div class="photo-title">
          <img src="img/unsplash-headshot.jpg" class="photo-title__headshot" alt="Headshot for Steve Smith in blue shirt">
          <h1 class="photo-title__name">${person.name}</h1>
          <h2 class="photo-title__title">${person.jobTitle}</h2>
        </div>
      <div class="info">
        <div class="profile">
          <p class="profile__para"><strong>Company:</strong> ${person.company}</p>
          <p class="profile__para"><strong>Experience:</strong> ${person.experience}</p>
          <p class="profile__para"><strong>School:</strong> ${person.school}</p>
          <p class="profile__para"><strong>Major:</strong> ${person.major}</p>
          <p class="profile__para"><strong>Email:</strong> ${person.email}</p>
          <p class="profile__para"><img src="img/linkedin.svg" class="linkedin" alt="LinkedIn logo"> ${person.linkedInUrl}</p>
          <p class="profile__para"><strong>Code languages:</strong> ${person.codeLanguages}</p>
        </div>
      </div>
    </main>`;


document.body.innerHTML = myCode;