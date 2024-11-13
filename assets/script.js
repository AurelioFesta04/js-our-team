// Dato un array di oggetti rappresentante un team di un’azienda, 
// creare una pagina dedicata  in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)

// **Bonus**
// - Rendere l’esercizio responsive, mandando a capo le card
// - Aggiungere un form di aggiunta membri che permetta di visualizzare 
// il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se 
// volete sentirvi parte del team! :sorridere:)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];

const inputs = document.querySelectorAll("#member-form input");
const teamContainerElem = document.querySelector("#team-container");
const [nameInput, roleInput, emailInput, imageInput] = inputs;
const memberForm = document.getElementById("member-form");


const createCard = (member) => {
  const { name, role, email, img } = member;
  return `
      <div class="col-sm-12 col-md-6 col-lg-4 bg-black card mb-2" style="max-width:30%;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./${img}" class="img-fluid rounded-start" style="width: 100%;" alt="${name}">
    </div>
    <div class="col-8">
      <div class="card-text p-2">
      <h3><strong>${name}</strong></h3>
        <h5>${role}</h5>
        <h6>${email}</h6>
      </div>
    </div>
  </div>
</div>
     `;
};


const cardPerTutti = () => {

  let items = "";

  for (let i = 0; i < teamMembers.length; i++) {
    const card = createCard(teamMembers[i]);
    items += card;
  }
  teamContainerElem.innerHTML = items;
};


const handleSubmit = (event) => {

  event.preventDefault();

  const name = nameInput.value.trim();
  const role = roleInput.value.trim();
  const email = emailInput.value.trim();
  const image = imageInput.value.trim();

  if (!name || !role || !email || !image) {
    alert('Completa tutti i campi prima di aggiungere un nuovo membro');
    return;
  }

  const newMember = {
    name,
    role,
    email,
    img
  };

  teamMembers.push(newMember);
  console.log(teamMembers);

  cardPerTutti();

  memberForm.reset();
};

cardPerTutti();

memberForm.addEventListener("submit", handleSubmit);
