//Create object with data from JSON file
const guys = [
    { name: "Steve Smith", jobTitle: "Project Manager", company: "Front End Dev Co", experience: "3 years", school: "UW", major: "Marketing", email: "steve@fedc.com", linkedInUrl: "steve.linkedinprofile.com" },
    { name: "Aaron Katz", jobTitle: "Full Stack Developer", company: "Web Sites and More", experience: "5 years", school: "SU", major: "Computer Science", email: "aaronNotMyemail@uw.com", linkedInUrl: "aaron.linkedinprofile.com"},
    { name: "Kyle Hendricks", jobTitle: "Starting Pitcher", company: "Chicago Cubs", experience: "12 years", school: "USC", major: "Pitching", email: "kyleH@cubs.com", linkedInUrl: "kyle.linkedinprofile.com"},
    { name: "Michael Jordan", jobTitle: "Point Guard", company: "Chicago Bulls", experience: "20 years", school: "UNC", major: "Trash Talking", email: "mJordan@bulls.com", linkedInUrl: "mJordan.linkedinprofile.com"},
];

//Create variable containing html and map through elements of object above
const myCode = `
    ${guys.map(guys => `
    <main class="main">
      <div class="background">
        <div class="photo-title">
          <img src="img/unsplash-headshot.jpg" class="photo-title__headshot" alt="Headshot for Steve Smith in blue shirt">
          <h1 class="photo-title__name">${guys.name}</h1>
          <h2 class="photo-title__title">${guys.jobTitle}</h2>
        </div>
      <div class="info">
        <div class="profile">
          <p class="profile__para"><strong>Company:</strong> ${guys.company}</p>
          <p class="profile__para"><strong>Experience:</strong> ${guys.experience}</p>
          <p class="profile__para"><strong>School:</strong> ${guys.school}</p>
          <p class="profile__para"><strong>Major:</strong> ${guys.major}</p>
          <p class="profile__para"><strong>Email:</strong> ${guys.email}</p>
          <p class="profile__para"><img src="img/linkedin.svg" class="linkedin" alt="LinkedIn logo"> ${guys.linkedInUrl}</p>
          <p class="profile__para"><strong>Code languages:</strong> ${guys.codeLanguages}</p>
        </div>
      </div>
    </main>`
    )}
`;
//Attach html in variable to html document
 document.body.innerHTML = myCode;