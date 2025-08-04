document.addEventListener("DOMContentLoaded", () => {
    const username = prompt("Enter your name") || "Guest";

    // dummmy data
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

    // printing stars
    function createStars(rating) {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    }

    // Render cards
    feedbackData.forEach((item) => {
        const tagsHtml = item.tags
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("");
        const stars = createStars(item.rating);

        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4 feedback-card-container";

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
              <div class=""">
                <div class="p-3 d-flex align-items-center"  style="border-bottom: 1px solid #ddd;">
                  <img src="avatar.jpg" width="32" height="32"
                    class="rounded-circle me-2" alt="${item.user}" />
                  <div>
                    <div class="profile fw-medium">${item.user}</div>
                    <small class="text-muted">${item.org}</small>
                  </div>
                </div>
                <div
                  class="px-3 pb-4 d-flex justify-content-between align-items-center feedback-buttons-container"
                  style="margin-top:12px;">
                  <p class="feedback-message text-muted mb-0"></p>
                  <div class="feedback-buttons">
                    <button class="btn btn-deny" type="button">Deny</button>
                    <button class="btn btn-approve" type="button">Approve</button>
                  </div>
                </div>
              </div>
          </div>
        `;

        // append all the cards into the body
        container.appendChild(col);
    });

    // Event delegation for approve/deny buttons
    container.addEventListener("click", (event) => {
        const target = event.target;
        if (
            target.classList.contains("btn-approve") ||
            target.classList.contains("btn-deny")
        ) {
            const btn = target;
            const card = btn.closest(".feedback-card");
            const approveBtn = card.querySelector(".btn-approve");
            const denyBtn = card.querySelector(".btn-deny");
            const message = card.querySelector(".feedback-message");

            const isApprove = btn.classList.contains("btn-approve");
            const currentHtml = btn.innerHTML;

            if (currentHtml.includes("dropdown-toggle")) {
                showDropdown(btn, approveBtn, denyBtn, message);
            } else {
                applyStatus(isApprove ? "approved" : "denied");
            }

            function applyStatus(status) {
                // Reset buttons
                // approveBtn.classList.remove("btn-primary", "btn-danger");
                approveBtn.classList.add("btn-clicked");
                approveBtn.textContent = "Approve";
                approveBtn.style.display = "inline-block";

                // denyBtn.classList.remove("btn-danger", "btn-primary");
                denyBtn.classList.add("btn-clicked");
                denyBtn.textContent = "Deny";
                denyBtn.style.display = "inline-block";

                if (status === "approved") {
                    // approveBtn.classList.remove("btn-outline-primary");
                    approveBtn.classList.add("btn-approve");
                    approveBtn.textContent = "Approved";
                    approveBtn.insertAdjacentHTML(
                        "beforeend",
                        `<span class="dropdown-toggle"></span>`
                    );
                    denyBtn.style.display = "none";
                    message.innerHTML = `<em>Approved by</em> <b style="color: #343434">${username}</b>`;
                } else {
                    // denyBtn.classList.remove("btn-outline-danger");
                    denyBtn.classList.add("btn-deny");
                    denyBtn.textContent = "Denied";
                    denyBtn.insertAdjacentHTML(
                        "beforeend",
                        `<span class="dropdown-toggle"></span>`
                    );
                    approveBtn.style.display = "none";
                    message.textContent = `Denied by ${username}`;
                }
            }

            function showDropdown(button, approveBtn, denyBtn, message) {
                const existingDropdown = document.querySelector(
                    ".dropdown-menu.show"
                );
                if (existingDropdown) existingDropdown.remove();

                const dropdown = document.createElement("ul");
                dropdown.className = "dropdown-menu show";
                dropdown.style.position = "absolute";

                const rect = button.getBoundingClientRect();
                dropdown.style.top = window.scrollY + rect.bottom + "px";
                dropdown.style.left = window.scrollX + rect.left + "px";
                dropdown.style.zIndex = 9999;
                dropdown.style.minWidth = "100px";

                dropdown.innerHTML = `
              <li><a class="dropdown-item" href="#" data-value="approved">Approved</a></li>
              <li><a class="dropdown-item" href="#" data-value="denied">Denied</a></li>
            `;

                document.body.appendChild(dropdown);

                dropdown.addEventListener("click", (e) => {
                    e.preventDefault();
                    if (e.target && e.target.matches("a.dropdown-item")) {
                        const selected = e.target.getAttribute("data-value");
                        applyStatus(selected);
                        dropdown.remove();
                    }
                });

                function onDocumentClick(e) {
                    if (!dropdown.contains(e.target) && e.target !== button) {
                        dropdown.remove();
                        document.removeEventListener("click", onDocumentClick);
                    }
                }
                document.addEventListener("click", onDocumentClick);
            }
        }
    });
});