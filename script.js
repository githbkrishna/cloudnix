const username = prompt("Enter your name") || "Guest";

const Btn = document.getElementById("toggleBtn");

const sidebar = document.querySelector(".sidebar");
const feedbacks = document.querySelector(".feedbacks");
const main = document.querySelector(".main");
const feedbackContainer = document.querySelector(".feedback-container");

Btn.addEventListener("click", function () {
    main.classList.toggle("main2");
    sidebar.classList.toggle("sidebaractive");
    feedbacks.classList.toggle("feedbacks2");

    const feedbackCardContainers = document.querySelectorAll(".feedback-card-container");

    feedbackCardContainers.forEach(card => {
        
        console.log(card.tagName);
        
        if (card.classList.contains("col-md-6")) {
            card.classList.replace("col-md-6", "col-md-4");
            card.classList.replace("col-lg-4", "col-lg-3");
        } else {
            card.classList.replace("col-md-4", "col-md-6");
            card.classList.replace("col-lg-3", "col-lg-4");
        }
    });
});





const feedbackData = [
    {
        id: "TCD1",
        app: "TaskMaster",
        tags: ["#TC01", "UI/UX"],
        rating: 3,
        text: "The navigation bar is a bit confusing, especially when switching between different sections. The icons are not intuitive, and it takes a while to understand where each feature is located. It would be helpful to have labels or tooltips when hovering over the icons.",
        user: "Steward leo",
        org: "TaskMaster Testing",
    },
    {
        id: "TCD2",
        app: "FitTrack",
        tags: ["#FT01", "Bug Report"],
        rating: 1,
        text: "I noticed that the app crashes every time I try to log a workout that includes a custom exercise. This happens on both Android and iOS devices. The issue started after the last update, and I’ve tried reinstalling the app, but it didn’t help.",
        user: "MarkT",
        org: "TaskMaster Testing",
    },
    {
        id: "TCD3",
        app: "TaskMaster",
        tags: ["#TC01", "Feature"],
        rating: 3,
        text: "The app loads very slowly on older devices. loading the dashboard takes over 10 seconds, and navigating between sections is also sluggish. I believe optimizing the app for lower-end devices would significantly improve the user experience.",
        user: "JaneSmith",
        org: "TaskMaster Testing",
    },
    {
        id: "TCD4",
        app: "TaskMaster",
        tags: ["#TC01", "Performance"],
        rating: 3,
        text: "It would be amazing if you could add a dark mode option. Using the app for long periods, especially at night, can strain my eyes. Many modern apps offer this feature, and I believe it would enhance the overall user experience.",
        user: "EmilyK",
        org: "TaskMaster Testing",
    },
    {
        id: "TCD5",
        app: "TaskMaster",
        tags: ["#TC302", "Bug Report"],
        rating: 2,
        text: "The step counter seems to be inaccurate. I compared it with my smartwatch and another fitness app, and HealthSync consistently undercounts my steps by about 30%. This happens even after recalibrating my phone’s motion sensor.",
        user: "David L",
        org: "Zeta Testing",
    },
    {
        id: "TCD6",
        app: "EventMate",
        tags: ["#TC01", "UI/UX"],
        rating: 2,
        text: "App crashes when logging workouts. I tried to login with google sign in. It kicking me out of the tool. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        user: "AlexW",
        org: "TaskMaster Testing",
    },
];

const container = document.getElementById("feedback-container");

function createStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
}

//   // Create feedback cards
feedbackData.forEach((item) => {
    const tagsHtml = item.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");
    const stars = createStars(item.rating);

    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 feedback-card-container";

    col.innerHTML = `
      <div class="feedback-card h-100 w-100 d-flex flex-column justify-content-between" data-id="${item.id}">
        <div class="feedback-content d-flex flex-column">
          <div class="d-flex justify-content-between">
            <h5 class="fw-medium">${item.app}</h5>
            <div class="star-rating">${stars}</div>
          </div>
          <div class="mb-2">${tagsHtml}</div>
          <p class="flex-grow-1-1">${item.text}</p>
        </div>
        <div>
          <div class="p-3 d-flex align-items-center" style="border-bottom: 1px solid #ddd;">
            <img src="avatar.jpg" width="32" height="32" class="rounded-circle me-2" alt="${item.user}" />
            <div>
              <div class="profile fw-medium">${item.user}</div>
              <small class="text-muted">${item.org}</small>
            </div>
          </div>
          <div class="px-3 pr-2 pb-3 d-flex justify-content-between align-items-center feedback-buttons-container" style="margin-top:12px;">
            <p class="feedback-message text-muted mb-0"></p>
            <div class="feedback-buttons">
              <button class="btn btn-deny" type="button">Deny</button>
              <button class="btn btn-approve" type="button">Approve</button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
});

// const msg = document.querySelector(".feedback-message");
// const btnApprove = document.querySelectorAll('.btn-approve');
// const btnDeny = document.querySelectorAll('.btn-deny');

// btnApprove.forEach((btn) => {
//   btn.addEventListener('click', function () {
//     const card = btn.closest('.feedback-card'); // Get the current card
//     const msg = card.querySelector('.feedback-message'); // Message inside this card
//     const btnDeny = card.querySelector('.btn-deny'); // Other button in same card
//     const btnApprove = card.querySelector('.btn-approve');
//     btnApprove.classList.add('selected');
//     btnDeny.style.display = 'none'; // Hide Deny
//     msg.innerHTML = `<em>Approved by</em> <b style="color:#343434">${username}</b>`;
//   });
// });

// btnDeny.forEach((btn) => {
//   btn.addEventListener('click', function () {
//     const card = btn.closest('.feedback-card');
//     const msg = card.querySelector('.feedback-message');
//     const btnApprove = card.querySelector('.btn-approve');
//     const btnDeny = card.querySelector('.btn-deny');
//     btnDeny.classList.add('selected'); // Mark as selected
//     btnApprove.style.display = 'none'; // Hide Approve
//     msg.innerHTML = `<em>Denied by</em> <b style="color:#343434">${username}</b>`;
//   });
// });


const btnApprove = document.querySelectorAll(".btn-approve");
const btnDeny = document.querySelectorAll(".btn-deny");

btnApprove.forEach((btn) => {
    btn.addEventListener("click", function () {
        const card = btn.closest(".feedback-card");
        const msg = card.querySelector(".feedback-message");
        const btnDeny = card.querySelector(".btn-deny");

        if (btn.classList.contains("selected")) {
            toggleDropdown(card, btn);
        } else {
            btn.classList.add("selected");
            btn.innerHTML = `Approved <span class='arrow'>&gt;</span>`;
            btnDeny.style.display = "none";
            msg.innerHTML = `<em>Approved by</em> <b style="color:#343434">${username}</b>`;
        }
    });
});

btnDeny.forEach((btn) => {
    btn.addEventListener("click", function () {
        const card = btn.closest(".feedback-card");
        const msg = card.querySelector(".feedback-message");
        const btnApprove = card.querySelector(".btn-approve");

        if (btn.classList.contains("selected")) {
            toggleDropdown(card, btn);
        } else {
            btn.classList.add("selected");
            btn.innerHTML = `Denied <span class='arrow'>&gt;</span>`;
            btnApprove.style.display = "none";
            msg.innerHTML = `<em>Denied by</em> <b style="color:#343434">${username}</b>`;
        }
    });
});

function toggleDropdown(card, selectedBtn) {
    const existingDropdown = card.querySelector(".decision-dropdown");
    if (existingDropdown) {
        existingDropdown.remove();
        return;
    }

    const dropdown = document.createElement("div");
    dropdown.className = "decision-dropdown";
    dropdown.innerHTML = `
    <button class="dropdown-option" data-decision="approve">Approve</button>
    <button class="dropdown-option" data-decision="deny">Deny</button>
  `;

    selectedBtn.parentElement.classList.add("dropdown-parent");
    selectedBtn.parentElement.appendChild(dropdown);

    dropdown.querySelectorAll(".dropdown-option").forEach((option) => {
        option.addEventListener("click", () => {
            const decision = option.getAttribute("data-decision");
            const msg = card.querySelector(".feedback-message");
            const btnApprove = card.querySelector(".btn-approve");
            const btnDeny = card.querySelector(".btn-deny");

            btnApprove.style.display = "inline-block";
            btnDeny.style.display = "inline-block";
            btnApprove.classList.remove("selected");
            btnDeny.classList.remove("selected");

            if (decision === "approve") {
                btnApprove.classList.add("selected");
                btnApprove.innerHTML = `Approved <span class='arrow'>&gt;</span>`;
                btnDeny.style.display = "none";
                msg.innerHTML = `<em>Approved by</em> <b style="color:#343434">${username}</b>`;
            } else {
                btnDeny.classList.add("selected");
                btnDeny.innerHTML = `Denied <span class='arrow'>&gt;</span>`;
                btnApprove.style.display = "none";
                msg.innerHTML = `<em>Denied by</em> <b style="color:#343434">${username}</b>`;
            }

            dropdown.remove();
        });
    });
}

