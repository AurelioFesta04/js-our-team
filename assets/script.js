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

// Funzione per creare una card per ogni membro del team
const createCard = (member) => {
  const { name, role, email, img } = member;
  return `
    <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
      <div class="card bg-dark text-white">
        <div class="row g-0">
          <div class="col-4">
            <img src="${img}" class="img-fluid rounded-start" alt="${name}">
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5>${name}</h5>
              <p>${role}</p>
              <p class="email">${email}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Funzione per aggiornare la visualizzazione del team
const renderTeam = () => {
  let items = "";
  teamMembers.forEach(member => {
    items += createCard(member);
  });
  teamContainerElem.innerHTML = items;
};

// Funzione per gestire l'invio del form e aggiungere un nuovo membro
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
    img: image // usa l'URL immagine inserito dall'utente
  };

  teamMembers.push(newMember); // Aggiungi il nuovo membro all'array
  renderTeam(); // Rende visibile il nuovo team

  memberForm.reset(); // Reset del form
};

// Inizializza la visualizzazione del team
renderTeam();

// Aggiungi l'evento al form
memberForm.addEventListener("submit", handleSubmit);
