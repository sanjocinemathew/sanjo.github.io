(function () {
  const topbar = document.getElementById("topbar");
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menu-btn");

  const galleryImages = [
    "academic-rediness-proramme-for-students-bishop-moore-vidyapith-cherthala-sanjo-mathew-trainer.png",
    "creative-thinking-session-unity-womens-college-malappuram-sanjo-mathew-trainer.jpg",
    "learning-science-experimental-way-sri-vijaya-vidaya-metric-school-salem-tamil-nadu-sanjo-mathew-trainer.jpg",
    "makam-english-medium-public-school-trivandrum-sanjo-mathew-trainer.jpeg",
    "mathi-coding-ai-residentail-summer-camp-nit-calicut-sanjo-mathew-trainer.jpg",
    "parents-orientation-program-vimala-central-school-chathanoor-kollam-sanjo-mathew-trainer.jpeg",
    "parents-orientation-programme-de-paul-school-thodupuzha-idukki-sanjo-mathew-trainer.jpeg",
    "parents-orientation-programme-st-maria-goretti-public-school-ernakulam-sanjo-mathew-trainer.jpeg",
    "school-reopening-njanodayam-public-school-edakochi-ernakulam-sanjo-mathew-trainer.jpg",
    "students-training-programme-caarmel-english-medium-school-ernakulam-sanjo-mathew-trainer.jpeg",
    "teachers-training-programme-gregorian-public-school-kottayam-sanjo-mathew-trainer.jpg",
    "teachers-training-programme-st-marys-english-medium-school-kollam-sanjo-mathew-trainer.jpeg"
  ];

  function setYear() {
    const yearNode = document.getElementById("year");
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear());
    }
  }

  function toggleTopbar() {
    if (!topbar) return;
    if (window.scrollY > 8) {
      topbar.classList.add("scrolled");
    } else {
      topbar.classList.remove("scrolled");
    }
  }

  function bindMobileNav() {
    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function bindActiveNav() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const links = Array.from(document.querySelectorAll(".nav a[href^='#']"));
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function renderGallery() {
    const container = document.getElementById("gallery-grid");
    if (!container) return;

    function buildAltText(filename) {
      const normalized = filename
        .replace(/\.[^.]+$/, "")
        .replace(/sanjo-mathew-trainer/gi, "")
        .replace(/-/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      return "Sanjo Mathew workshop session: " + normalized;
    }

    galleryImages.forEach(function (name) {
      const article = document.createElement("article");
      article.className = "gallery-item";

      const img = document.createElement("img");
      img.src = "assets/imgs/gallery/" + name;
      img.alt = buildAltText(name);
      img.loading = "lazy";
      img.decoding = "async";

      article.appendChild(img);
      container.appendChild(article);
    });
  }

  function bindReveals() {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  async function submitForm(formId, buttonId, successMessage, errorMessage) {
    const form = document.getElementById(formId);
    const button = document.getElementById(buttonId);
    if (!form || !button) return;

    button.addEventListener("click", async function (event) {
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      event.preventDefault();
      button.disabled = true;

      try {
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData);
        payload.access_key = "f9c83cdc-a3a4-4441-922b-dced7f52a1cd";

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        alert(successMessage);
        form.reset();
      } catch (error) {
        console.error(error);
        alert(errorMessage);
      } finally {
        button.disabled = false;
      }
    });
  }

  setYear();
  toggleTopbar();
  bindMobileNav();
  bindActiveNav();
  renderGallery();
  bindReveals();
  submitForm(
    "contactForm",
    "submit",
    "Your request has been sent successfully!",
    "Unable to send your request. Please try again."
  );
  submitForm(
    "appointmentForm",
    "bookAppointmentSubmitBtn",
    "Thank you for reaching out. I appreciate your message and will respond promptly!",
    "Unable to book your appointment. Please try again."
  );

  window.addEventListener("scroll", toggleTopbar, { passive: true });
})();
