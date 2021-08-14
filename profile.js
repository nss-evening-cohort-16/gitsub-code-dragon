import { renderToDom } from "./main.js";

export const profileArray = [
    {
        fullName: "Ruby Kaur",
        profileName: "Ruby-Kaur-OG",
        aboutMe: " Highly experience Database and data warehouse professional with extensive experience in designing, coding, ETL, testing and Business Intelligence solutions. Familiar with SDLC and Agile development pattern and played key role in a variety of project from development to deployment. Interested in Big Data technologies (Hadoop, Netezza etc.) and Business Intelligence solutions (Cognos, Business Objects, Tableau etc.).",
        followersCount: 10000,
        following: 500,
        starCount: 300,
        location: "Franklin, TN",
        emailAddress: "ruby@rubykaur.com",
        website: "rubykaur.com",
        linkedIn: "https://www.linkedin.com/in/ruby-kaur/",
    },
]

export const addCardToDom= (array) => {
    let profileCard = ""
    array.forEach((obj) => {
    profileCard += 
    `<div class="profile-card  card" style="width: 23rem;">
    <img class="profile-img" src="https://media-exp1.licdn.com/dms/image/C5603AQH7sqQfv4H2cQ/profile-displayphoto-shrink_800_800/0/1625710416088?e=1634169600&v=beta&t=RvNcXZO3TdycR4piT--roZBF5pnfop8salmH2d64ZR4" class="card-img-top" alt="${obj.fullName}">
    <div class="card-body">
      <h5 class="card-title">${obj.fullName}</h5>
      <h6 class="profile-name"><em>${obj.profileName}</em></h6>
      <p class="card-text">${obj.aboutMe}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="profile-list list-group-item">${obj.followersCount} <em>followers</em> ${obj.following} <em>following</em></li>
      <li class="profile-list list-group-item"> &#11088; : ${obj.starCount} </li>
      <li class="profile-list list-group-item"> &#128205; : ${obj.location}</li>
      <li class="profile-list list-group-item"> &#128231; : ${obj.emailAddress}</li>
      <li class="profile-list list-group-item"> &#128279; : ${obj.website}</li>
      <li class="profile-list list-group-item"> &#9989; :<a href="https://www.linkedin.com/in/ruby-kaur/"> ${obj.linkedIn}</a></li>
    </ul>
    <div class="card-body">
    </div>
  </div>`;
    })

    renderToDom("#profile", profileCard);
}

