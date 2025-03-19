document.addEventListener("DOMContentLoaded", function () {
  // Counter functionality
  function startCounter(spanElement, targetNumber) {
    let currentNumber = 0;
    const increment = targetNumber / 100;
    const interval = 20;

    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        clearInterval(timer);
        currentNumber = targetNumber;
      }
      spanElement.textContent = Math.floor(currentNumber) + "+";
    }, interval);
  }

  const numberSpans = document.querySelectorAll(".circle span:first-child");
  numberSpans.forEach((span) => {
    const targetNumber = parseInt(span.textContent);
    startCounter(span, targetNumber);
  });

  // File upload functionality
  const fileInput = document.getElementById('file');
  const fileNameDisplay = document.querySelector('.file-name');

  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener('change', function (e) {
      if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
      } else {
        fileNameDisplay.textContent = 'No file chosen';
      }
    });
  } else {
    console.error('File input or file name display not found.');
  }
});

// Side navigation functionality
function toggleSideNav() {
  const sideNav = document.getElementById("sideNav");
  const overlay = document.getElementById("overlay");

  if (sideNav.style.width === "250px") {
    sideNav.style.width = "0";
    overlay.style.display = "none";
  } else {
    sideNav.style.width = "250px";
    overlay.style.display = "block";
  }
}

// Language dropdown functionality
function toggleLanguageDropdown() {
  const dropdown = document.getElementById("customLanguageDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

window.onclick = function (event) {
  if (!event.target.matches('.language-button')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

// Carousel functionality
const slidesContainer = document.querySelector('.custom-carousel-slides');
if (slidesContainer) {
  const slides = document.querySelectorAll('.custom-carousel-slide');
  const indicators = document.querySelectorAll('.custom-carousel-indicators button');
  const prevButton = document.querySelector('.custom-carousel-prev');
  const nextButton = document.querySelector('.custom-carousel-next');

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }

  let autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 6000);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
      }, 60000);
    });
  });

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }, 60000);
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }, 60000);
  });

  updateCarousel();
}

// Iframe functionality
const iframeContainer = document.querySelector('.iframe-fallback');
if (iframeContainer) {
  const iframe = iframeContainer.querySelector('.lazy-iframe');
  const videoThumbnail = iframeContainer.querySelector('.video-thumbnail');
  const playButton = iframeContainer.querySelector('.play-button');

  iframeContainer.addEventListener('click', function () {
    if (iframe && videoThumbnail && playButton) {
      iframe.src = iframe.getAttribute('data-src');
      videoThumbnail.style.display = 'none';
      playButton.style.display = 'none';
      iframe.style.display = 'block';
    }
  });
}

// Slider functionality
function initSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelector(".project-slides");
  const indicators = slider.querySelectorAll(".project-indicator");
  const prevButton = slider.querySelector(".project-prev");
  const nextButton = slider.querySelector(".project-next");
  let currentIndex = 0;

  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % indicators.length;
    updateSlider();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });
}

// Initialize all sliders
for (let i = 1; i <= 30; i++) {
  initSlider(`slider-${i}`);
}

// Project language dropdown functionality
function projectToggleLanguageDropdown() {
  const dropdownMenu = document.getElementById("project-languageDropdownMenu");
  dropdownMenu.classList.toggle("active");
}

window.onclick = function (event) {
  if (!event.target.matches('.project-dropdown-toggle')) {
    const dropdowns = document.getElementsByClassName("project-dropdown-menu");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("active")) {
        openDropdown.classList.remove("active");
      }
    }
  }
};

// Job popup functionality
function expandDiv(childNumber) {
  const children = document.querySelectorAll('.child');
  const popout = document.getElementById('popout');
  const popup = popout.querySelector('.popup');

  // Example data for each job (replace with your actual data)
  const jobData = {
    1: {
      title: "Data Entry",
      level: "Mid-level",
      location: "Cairo",
      country: "Egypt",
      description: "Job 1 description goes here.",
      specifications: ["Spec 1 for Job 1", "Spec 2 for Job 1"]
    },
    2: {
      title: "Software Developer",
      level: "Senior",
      location: "Alexandria",
      country: "Egypt",
      description: "Job 1 description goes here.",
      specifications: ["Spec 1 for Job 1", "Spec 2 for Job 1"]
    },
    3: {
      title: "Graphic Designer",
      level: "Junior",
      location: "Giza",
      country: "Egypt",
      description: "Job 1 description goes here.",
      specifications: ["Spec 1 for Job 1", "Spec 2 for Job 1"]
    },
    4: {
      title: "Project Manager",
      level: "Senior",
      location: "Luxor",
      country: "Egypt",
      description: "Job 1 description goes here.",
      specifications: ["Spec 1 for Job 1", "Spec 2 for Job 1"]
    },
    5: {
      title: "Marketing Specialist",
      level: "Mid-level",
      location: "Aswan",
      country: "Egypt",
      description: "Job 1 description goes here.",
      specifications: ["Spec 1 for Job 1", "Spec 2 for Job 1"]
    },
    6: {
      title: "Customer Support",
      level: "Entry-level",
      location: "Port Said",
      country: "Egypt",
      description: "Job 1 description goes here.",
      specifications: ["Spec 1 for Job 1", "Spec 2 for Job 1"]
    },
    7: {
      title: "Sales Executive",
      level: "Mid-level",
      location: "Suez",
      country: "Egypt",
      description: "Job 1 description goes here.",
      specifications: ["Spec 1 for Job 1", "Spec 2 for Job 1"]
    },
    // Add data for other jobs here...
  };

  const job = jobData[childNumber];
  if (job) {
    popup.querySelector('.pop_child1').textContent = job.title;
    popup.querySelector('.job_prop_child1').textContent = job.level;
    popup.querySelector('.job_prop_child2').textContent = job.location;
    popup.querySelector('.job_prop_child3').textContent = job.country;
    popup.querySelector('.pop_child3').textContent = job.description;
    const ul = popup.querySelector('.pop_ul');
    ul.innerHTML = `<li>Job Specification:</li>` + job.specifications.map(spec => `<li>${spec}</li>`).join('');
  }

  children.forEach(child => {
    child.classList.add('shrink');
  });
  popout.classList.add('active');
}

function closePopout() {
  const children = document.querySelectorAll('.child');
  const popout = document.getElementById('popout');
  children.forEach(child => {
    child.classList.remove('shrink');
  });
  popout.classList.remove('active');
}