function toggleSideNav() {
    const sideNav = document.getElementById("sideNav");
    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
    } else {
        sideNav.style.width = "250px";
    }
  }
  function toggleLanguageDropdown() {
    const dropdown = document.getElementById("customLanguageDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
  }
  window.onclick = function(event) {
    if (!event.target.matches('.language-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
  }
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
function animateCounter(element, target, duration) {
  let start = 0;
  const increment = target / (duration / 16);

  const updateCounter = () => {
    start += increment;
    if (start < target) {
      element.textContent = Math.ceil(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
}
function initializeCounters() {
  const circles = document.querySelectorAll('.circle span:first-child');

  circles.forEach((circle) => {
    let text = circle.textContent.trim();
    let isPlusBefore = text.startsWith('+');
    let isPlusAfter = text.endsWith('+');
    let target = parseInt(text.replace(/\+/g, ''), 10);
    circle.textContent = isPlusBefore ? '+0' : '0';
    setTimeout(() => {
      animateCounter(circle, target, 3000);
    }, 500);
    setTimeout(() => {
      if (isPlusBefore) {
        circle.textContent = `+${target}`;
      } else if (isPlusAfter) {
        circle.textContent = `${target}+`;
      }
    }, 3500);
  });
}
window.addEventListener('load', initializeCounters);
   const links = document.querySelectorAll('.nav-links a');
   const sliders = document.querySelectorAll('.slider');

   links.forEach(link => {
     link.addEventListener('click', (e) => {
       e.preventDefault();
       links.forEach(l => l.classList.remove('active'));
       sliders.forEach(slider => slider.classList.remove('active'));
       const target = link.getAttribute('data-target');
       link.classList.add('active');
       document.getElementById(target).classList.add('active');
     });
   });
   sliders.forEach(slider => {
     const imageGroups = slider.querySelectorAll('.image-group');
     const prevButton = slider.querySelector('.prev');
     const nextButton = slider.querySelector('.next');
     let currentIndex = 0;
     function showImageGroup(index) {
       imageGroups.forEach((group, i) => {
         group.classList.toggle('active', i === index);
       });
     }
     prevButton.addEventListener('click', () => {
       currentIndex = (currentIndex - 1 + imageGroups.length) % imageGroups.length;
       showImageGroup(currentIndex);
     });
     nextButton.addEventListener('click', () => {
       currentIndex = (currentIndex + 1) % imageGroups.length;
       showImageGroup(currentIndex);
     });
     showImageGroup(currentIndex);
   });
   const slidesContainer = document.querySelector('.custom-carousel-slides');
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