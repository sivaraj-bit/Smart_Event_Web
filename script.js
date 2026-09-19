// LOGIN

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const showPasswordBtn = document.getElementById("showPassword");
const loginError = document.getElementById("loginError");


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();


        // Clear previous error
        loginError.textContent = "";


        // Validation
        if (email === "") {

            loginError.textContent = "Please enter your email.";

            emailInput.focus();

            return;
        }


        if (!email.includes("@")) {

            loginError.textContent = "Please enter a valid email.";

            emailInput.focus();

            return;
        }


        if (password === "") {

            loginError.textContent = "Please enter your password.";

            passwordInput.focus();

            return;
        }


        if (password.length < 6) {

            loginError.textContent =
                "Password must contain at least 6 characters.";

            passwordInput.focus();

            return;
        }


        // Save login state
        localStorage.setItem("eventlyLoggedIn", "true");

        localStorage.setItem(
            "eventlyUserEmail",
            email
        );


        // Redirect to Home
        window.location.href = "home.html";

    });

}


// SHOW / HIDE PASSWORD

if (showPasswordBtn) {

    showPasswordBtn.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            showPasswordBtn.textContent = "Hide";

        } else {

            passwordInput.type = "password";

            showPasswordBtn.textContent = "Show";

        }

    });

}


//  LOGIN PROTECTION

// This prevents direct access to home/planner
// when the user has not logged in.

const currentPage = window.location.pathname.split("/").pop();


if (
    currentPage === "home.html" ||
    currentPage === "planner.html"
) {

    const isLoggedIn =
        localStorage.getItem("eventlyLoggedIn");


    if (isLoggedIn !== "true") {

        window.location.href = "index.html";

    }

}


// EVENTS STORAGE

let events =
    JSON.parse(localStorage.getItem("eventlyEvents")) || [];


// SAVE EVENTS

function saveEvents() {

    localStorage.setItem(
        "eventlyEvents",
        JSON.stringify(events)
    );

}


/* =========================================================
   CREATE EVENT
   ========================================================= */

const eventForm = document.getElementById("eventForm");


if (eventForm) {

    eventForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const eventName =
            document.getElementById("eventName").value.trim();

        const eventCategory =
            document.getElementById("eventCategory").value;

        const eventDate =
            document.getElementById("eventDate").value;

        const eventTime =
            document.getElementById("eventTime").value;

        const eventVenue =
            document.getElementById("eventVenue").value.trim();

        const eventGuests =
            Number(document.getElementById("eventGuests").value) || 0;

        const eventBudget =
            Number(document.getElementById("eventBudget").value) || 0;

        const eventDescription =
            document.getElementById("eventDescription").value.trim();


        const newEvent = {

            id: Date.now(),

            name: eventName,

            category: eventCategory,

            date: eventDate,

            time: eventTime,

            venue: eventVenue,

            guests: eventGuests,

            budget: eventBudget,

            description: eventDescription,

            completedTasks: 0,

            totalTasks: 5

        };


        events.push(newEvent);


        saveEvents();

        eventForm.reset();

        closeEventModal();

        renderEvents();

    });

}


// EVENT MODAL

const eventModal =
    document.getElementById("eventModal");

const openModalBtn =
    document.getElementById("openModal");

const closeModalBtn =
    document.getElementById("closeModal");

const emptyCreateBtn =
    document.getElementById("emptyCreateBtn");


function openEventModal() {

    if (eventModal) {

        eventModal.classList.remove("hidden");

        document.body.classList.add("overflow-hidden");

    }

}


function closeEventModal() {

    if (eventModal) {

        eventModal.classList.add("hidden");

        document.body.classList.remove("overflow-hidden");

    }

}


if (openModalBtn) {

    openModalBtn.addEventListener(
        "click",
        openEventModal
    );

}


if (closeModalBtn) {

    closeModalBtn.addEventListener(
        "click",
        closeEventModal
    );

}


if (emptyCreateBtn) {

    emptyCreateBtn.addEventListener(
        "click",
        openEventModal
    );

}


//  CLOSE MODAL WHEN CLICKING OUTSIDE

if (eventModal) {

    eventModal.addEventListener("click", function (event) {

        if (event.target === eventModal) {

            closeEventModal();

        }

    });

}


// FORMAT DATE

function formatDate(date) {

    if (!date) return "No date";


    const formattedDate =
        new Date(date + "T00:00:00");


    return formattedDate.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


// RENDER EVENTS

const eventsContainer =
    document.getElementById("eventsContainer");

const emptyState =
    document.getElementById("emptyState");


function renderEvents(filteredEvents = events) {

    if (!eventsContainer) return;


    eventsContainer.innerHTML = "";


    if (filteredEvents.length === 0) {

        if (emptyState) {

            emptyState.classList.remove("hidden");

        }

        return;

    }


    if (emptyState) {

        emptyState.classList.add("hidden");

    }


    filteredEvents.forEach(function (event) {

        const card =
            document.createElement("div");


        card.className =
            "rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10";


        card.innerHTML = `

            <div class="flex items-start justify-between gap-4">

                <div>

                    <span class="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                        ${event.category}
                    </span>

                    <h3 class="mt-4 text-xl font-bold">
                        ${event.name}
                    </h3>

                    <p class="mt-2 text-sm text-gray-400">
                        ${event.description || "No description added."}
                    </p>

                </div>

                <button
                    onclick="deleteEvent(${event.id})"
                    class="text-gray-500 transition hover:text-red-400"
                    title="Delete event"
                >
                    🗑️
                </button>

            </div>


            <div class="mt-5 grid grid-cols-2 gap-3">

                <div class="rounded-xl bg-black/20 p-3">

                    <p class="text-xs text-gray-500">
                        Date
                    </p>

                    <p class="mt-1 text-sm font-medium">
                        ${formatDate(event.date)}
                    </p>

                </div>


                <div class="rounded-xl bg-black/20 p-3">

                    <p class="text-xs text-gray-500">
                        Time
                    </p>

                    <p class="mt-1 text-sm font-medium">
                        ${event.time || "Not set"}
                    </p>

                </div>


                <div class="rounded-xl bg-black/20 p-3">

                    <p class="text-xs text-gray-500">
                        Guests
                    </p>

                    <p class="mt-1 text-sm font-medium">
                        👥 ${event.guests}
                    </p>

                </div>


                <div class="rounded-xl bg-black/20 p-3">

                    <p class="text-xs text-gray-500">
                        Budget
                    </p>

                    <p class="mt-1 text-sm font-medium">
                        ₹${event.budget.toLocaleString("en-IN")}
                    </p>

                </div>

            </div>


            <div class="mt-4 flex items-center justify-between border-t border-white/10 pt-4">

                <p class="text-xs text-gray-500">
                    📍 ${event.venue || "Venue not set"}
                </p>

                <p class="text-xs text-green-400">
                    ${event.completedTasks}/${event.totalTasks} tasks
                </p>

            </div>

        `;


        eventsContainer.appendChild(card);

    });

}


// DELETE EVENT


function deleteEvent(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this event?");


    if (!confirmDelete) return;


    events =
        events.filter(function (event) {

            return event.id !== id;

        });


    saveEvents();

    renderEvents();

}


// SEARCH


const searchInput =
    document.getElementById("searchEvent");


const categoryFilter =
    document.getElementById("categoryFilter");


function filterEvents() {

    const searchValue =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    const categoryValue =
        categoryFilter
            ? categoryFilter.value
            : "all";


    const filtered =
        events.filter(function (event) {

            const matchesSearch =
                event.name
                    .toLowerCase()
                    .includes(searchValue);


            const matchesCategory =
                categoryValue === "all" ||
                event.category === categoryValue;


            return matchesSearch && matchesCategory;

        });


    renderEvents(filtered);

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterEvents
    );

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterEvents
    );

}


// DASHBOARD STATS

function updateStats() {

    const totalEvents =
        document.getElementById("totalEvents");

    const totalGuests =
        document.getElementById("totalGuests");

    const totalBudget =
        document.getElementById("totalBudget");

    const totalTasks =
        document.getElementById("totalTasks");


    if (totalEvents) {

        totalEvents.textContent =
            events.length;

    }


    if (totalGuests) {

        const guests =
            events.reduce(function (total, event) {

                return total + Number(event.guests || 0);

            }, 0);


        totalGuests.textContent =
            guests;

    }


    if (totalBudget) {

        const budget =
            events.reduce(function (total, event) {

                return total + Number(event.budget || 0);

            }, 0);


        totalBudget.textContent =
            "₹" + budget.toLocaleString("en-IN");

    }


    if (totalTasks) {

        const completed =
            events.reduce(function (total, event) {

                return total + Number(event.completedTasks || 0);

            }, 0);


        totalTasks.textContent =
            completed;

    }

}


// INITIAL LOAD

if (eventsContainer) {

    renderEvents();

    updateStats();

}