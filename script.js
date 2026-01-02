// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const navMobile = document.querySelector(".nav-mobile")
const mobileLinks = document.querySelectorAll(".nav-mobile .nav-link")

mobileMenuToggle.addEventListener("click", () => {
  mobileMenuToggle.classList.toggle("active")
  navMobile.classList.toggle("active")
})

// Close mobile menu when clicking a link
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuToggle.classList.remove("active")
    navMobile.classList.remove("active")
  })
})

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question")

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active")

    // Close all FAQ items
    faqItems.forEach((faqItem) => {
      faqItem.classList.remove("active")
    })

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add("active")
    }
  })
})

// Smooth Scroll for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]')

anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href")

    // Skip if it's just "#"
    if (href === "#") return

    e.preventDefault()

    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = document.querySelector(".sticky-header").offsetHeight
      const targetPosition = targetElement.offsetTop - headerHeight - 20

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Back to Top Button
const backToTopButton = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add("visible")
  } else {
    backToTopButton.classList.remove("visible")
  }
})

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Header Shadow on Scroll
const header = document.querySelector(".sticky-header")

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  } else {
    header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  }
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".sticky-header") && navMobile.classList.contains("active")) {
    mobileMenuToggle.classList.remove("active")
    navMobile.classList.remove("active")
  }
})
