// Pyramidz PE Website JavaScript - Fixed Version

// Product data from application_data_json - Enhanced with NTP-01 images
const productsData = {
  "Quarter Turn Locks": [
    {
      "code": "LR-HDP",
      "name": "Full Metal Heavy Duty Quarter Turn Lock",
      "material": "Zamak 5 Zinc Alloy",
      "features": ["Heavy duty construction", "Multiple barrel lengths", "Various insert types"],
      "applications": "Industrial control panels",
      images: [
        { src: "/assets/NTP-01ACO Polyamide PA6GF30.jpeg", alt: "Full Metal Heavy Duty Quarter Turn Lock", caption:"NTP-01ACO Polyamide PA6GF30" },
        { src: "/assets/NTP-01ACO Round Rod-Long Shaft.jpeg", alt: "shaft image", caption:"NTP-01ACO Round Rod-Long Shaft" }
      ]
    },
    {
      "code": "NSLK-HDP", 
      "name": "Knob Lock Heavy Duty",
      "material": "Zamak 5 Zinc Alloy body with Polyamide knob",
      "features": ["IP-65 protection available", "Ergonomic knob design", "Multiple sizes"],
      "applications": "Panel access control"
    },
    {
      "code": "NLR-IS",
      "name": "Rectangle Lock",
      "material": "Polyamide body with Zamak 5 pin",
      "features": ["Compact rectangular design", "Various barrel lengths", "Cost effective"],
      "applications": "Small enclosures"
    }
  ],
  "3 Point Locks": [
    {
      "code": "NTP-01",
      "name": "3 Point Lock Round Rod Type",
      "material": "Polyamide PA6GF30 body, Zamak 5 components",
      "features": ["Round rod system", "8mm thickness rod", "Complete accessory set included", "160mm Ã— 34mm dimensions"],
      "applications": "Large panel enclosures",
      "images": [
        {
          "id": "ntp01_photo",
          "src": "attached_image:1",
          "alt": "NTP-01 3 Point Lock Product Photo",
          "caption": "Side view of NTP-01 showing complete lock assembly with round rod mechanism",
          "type": "product_photo"
        },
        {
          "id": "ntp01_diagram",
          "src": "attached_image:2", 
          "alt": "NTP-01 Technical Diagram",
          "caption": "Technical specifications: 160mm Ã— 34mm dimensions, Polyamide PA6GF30 material",
          "type": "technical_drawing"
        }
      ],
      "specifications": {
        "overall_height": "160mm",
        "overall_width": "34mm",
        "body_material": "Polyamide PA6GF30",
        "hardware_material": "Zamak 5",
        "rod_diameter": "8mm",
        "rod_type": "Round rod system",
        "panel_cutout": "25mm Ã— 50mm",
        "mounting": "Surface mount"
      },
      "accessories_included": [
        "Rod Guide (RG-01) - 2 pieces",
        "Rod End (NRND) - 2 pieces", 
        "Lever (LEV-01) - 1 piece",
        "Round Rod with Roller - 2 pieces (1m length, 8mm diameter)"
      ]
    },
    {
      "code": "NTP-02",
      "name": "3 Point Lock Flat Rod Type", 
      "material": "Polyamide PA6GF30 body, Zamak 5 components",
      "features": ["Flat rod system", "14mm x 3mm rod", "IP-65 version available"],
      "applications": "Heavy duty applications"
    },
    {
      "code": "NTP-05SF",
      "name": "3 Point Lock Small Facia Flat Rod",
      "material": "Zamak 5 Zinc Alloy",
      "features": ["Compact facia design", "Small footprint", "Flat rod operation"],
      "applications": "Space constrained panels"
    }
  ],
  "Handles": [
    {
      "code": "NDH-02-8",
      "name": "U Rod Handle 8mm",
      "material": "MS/SS available", 
      "features": ["Various lengths (50-150mm)", "M4 x 12mm deep tap", "Customizable"],
      "applications": "General purpose door handles"
    },
    {
      "code": "NDH-03",
      "name": "Polyamide Handle",
      "material": "Polyamide",
      "features": ["115mm length", "Ergonomic design", "Chemical resistant"],
      "applications": "Chemical industry applications"
    },
    {
      "code": "NDH-10D",
      "name": "Die Cast Handle",
      "material": "Zinc Alloy Die Cast",
      "features": ["Robust construction", "Surface mount", "Weather resistant"],
      "applications": "Outdoor enclosures"
    }
  ],
  "Hinges": [
    {
      "code": "NH-03-120-8",
      "name": "Concealed Hinge 120mm",
      "material": "MS",
      "features": ["120mm length", "8mm pin", "Concealed mounting"],
      "applications": "Heavy doors"
    },
    {
      "code": "NH-05Z",
      "name": "Zinc Alloy Hinge",
      "material": "Zinc Alloy", 
      "features": ["40-60mm sizes", "Corrosion resistant", "Multiple mounting holes"],
      "applications": "Outdoor enclosures"
    },
    {
      "code": "NH-07SS",
      "name": "Stainless Steel Hinge",
      "material": "Stainless Steel",
      "features": ["Corrosion resistant", "Heavy duty", "Marine grade"],
      "applications": "Harsh environments"
    }
  ],
  "Gaskets": [
    {
      "code": "NG-01",
      "name": "EPDM Top Bubble Gasket with Metal Insert",
      "material": "EPDM with steel plate",
      "features": ["IP-65 sealing", "Metal reinforcement", "25m rolls available"],
      "applications": "Weatherproof sealing"
    },
    {
      "code": "NG-02",
      "name": "EPDM Profile Gasket",
      "material": "EPDM Rubber",
      "features": ["Multiple profiles", "UV resistant", "Temperature stable"],
      "applications": "Panel sealing"
    },
    {
      "code": "NSAFG",
      "name": "Self Adhesive Foam Gasket",
      "material": "Neoprene Foam",
      "features": ["Self adhesive", "Easy installation", "Compression recovery"],
      "applications": "Quick sealing solutions"
    }
  ]
};

// State management
let currentSection = 'home';
let currentCategory = 'all';
let filteredProducts = [];
let currentImageIndex = 0;
let currentImages = [];
let currentProduct = null;

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const sections = document.querySelectorAll('.section');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const categoryCards = document.querySelectorAll('.category-card');
const categoryFilters = document.querySelectorAll('.category-filter');
const productsGrid = document.getElementById('productsGrid');
const productSearch = document.getElementById('productSearch');
const productModal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const imageModal = document.getElementById('imageModal');
const imageModalOverlay = document.getElementById('imageModalOverlay');
const imageModalClose = document.getElementById('imageModalClose');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  setupNavigation();
  setupMobileMenu();
  setupCategoryCards();
  setupProductFilters();
  setupProductSearch();
  setupProductModal();
  setupImageModal();
  setupContactForm();
  setupDownloadButtons();
  setupWhatsAppButtons();
  
  // Initialize products display
  renderProducts();
  
  // Set initial active states
  updateActiveNavigation();
});

// Fixed Navigation functionality
function setupNavigation() {
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const targetSection = this.getAttribute('href').substring(1);
      navigateToSection(targetSection);
      
      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });
}

function navigateToSection(sectionName) {
  console.log('Navigating to section:', sectionName);
  currentSection = sectionName;
  
  // Hide all sections
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    console.log('Section shown:', sectionName);
  }
  
  updateActiveNavigation();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // If navigating to products, ensure products are rendered
  if (sectionName === 'products') {
    setTimeout(() => {
      renderProducts();
    }, 100);
  }
}

function updateActiveNavigation() {
  navLinks.forEach(link => {
    const href = link.getAttribute('href').substring(1);
    if (href === currentSection) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Mobile menu functionality
function setupMobileMenu() {
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
}

// Fixed Category cards functionality
function setupCategoryCards() {
  categoryCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const category = this.getAttribute('data-category');
      console.log('Category card clicked:', category);
      
      // Navigate to products section first
      navigateToSection('products');
      
      // Filter by category after navigation
      setTimeout(() => {
        filterProductsByCategory(category);
      }, 200);
    });
  });
}

// Product filtering functionality
function setupProductFilters() {
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const category = this.getAttribute('data-category');
      filterProductsByCategory(category);
    });
  });
}

function filterProductsByCategory(category) {
  console.log('Filtering by category:', category);
  currentCategory = category;
  
  // Update active filter
  categoryFilters.forEach(filter => {
    const filterCategory = filter.getAttribute('data-category');
    if (filterCategory === category) {
      filter.classList.add('active');
    } else {
      filter.classList.remove('active');
    }
  });
  
  renderProducts();
}

// Fixed Product search functionality
function setupProductSearch() {
  if (productSearch) {
    productSearch.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      console.log('Searching for:', searchTerm);
      renderProducts(searchTerm);
    });
  }
}

// Enhanced render products - ensuring NTP-01 appears
function renderProducts(searchTerm = '') {
  if (!productsGrid) {
    console.log('Products grid not found');
    return;
  }
  
  console.log('Rendering products for category:', currentCategory, 'search:', searchTerm);
  
  // Get products to display
  let productsToShow = [];
  
  if (currentCategory === 'all') {
    // Show all products
    Object.keys(productsData).forEach(category => {
      productsData[category].forEach(product => {
        productsToShow.push({ ...product, category });
      });
    });
  } else {
    // Show products from specific category
    if (productsData[currentCategory]) {
      productsData[currentCategory].forEach(product => {
        productsToShow.push({ ...product, category: currentCategory });
      });
    }
  }
  
  // Filter by search term
  if (searchTerm) {
    productsToShow = productsToShow.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.code.toLowerCase().includes(searchTerm) ||
      product.material.toLowerCase().includes(searchTerm) ||
      product.applications.toLowerCase().includes(searchTerm)
    );
  }
  
  // Sort products to show NTP-01 first
  productsToShow.sort((a, b) => {
    if (a.code === 'NTP-01') return -1;
    if (b.code === 'NTP-01') return 1;
    return 0;
  });
  
  console.log('Products to show:', productsToShow.length);
  
  // Clear and render products
  productsGrid.innerHTML = '';
  
  if (productsToShow.length === 0) {
    productsGrid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
    return;
  }
  
  productsToShow.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
  
  console.log('Products rendered successfully');
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  console.log('Creating card for:', product.code, 'has images:', !!product.images);

  let thumbnailSection = '';
  if (product.images && product.images.length > 0) {
    const isNTP01 = product.code === 'NTP-01';
    thumbnailSection = `
      <div class="product-thumbnail" data-has-images="true" data-product="${product.code}">
        <div class="product-image-preview ${isNTP01 ? 'ntp01-preview' : ''}">
          <img src="${product.images[0].src}" alt="${product.images[0].alt}" class="product-main-image"/>
          <span class="image-label">${isNTP01 ? 'NTP-01 Lock Assembly' : product.images[0].alt}</span>
          <div class="image-count">${product.images.length} image${product.images.length > 1 ? 's' : ''}</div>
          ${isNTP01 ? '<div class="featured-badge">Featured Product</div>' : ''}
        </div>
      </div>
    `;
  } else {
    thumbnailSection = `
      <div class="product-thumbnail">
        <div class="product-image-placeholder">
          <i class="fas fa-box"></i>
          <span>No images available</span>
        </div>
      </div>
    `;
  }

  card.innerHTML = `
    ${thumbnailSection}
    <div class="product-card-header">
      <div class="product-code">${product.code}</div>
      <h4 class="product-name">${product.name}</h4>
    </div>
    <div class="product-card-body">
      <div class="product-material">
        <strong>Material:</strong> ${product.material}
      </div>
      <div class="product-features">
        <h5>Key Features:</h5>
        <ul>
          ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      <div class="product-applications">
        <strong>Applications:</strong> ${product.applications}
      </div>
      ${product.images && product.images.length > 0 ? 
        '<div class="view-images-btn"><i class="fas fa-eye"></i> View Images & Specifications</div>' : 
        ''
      }
    </div>
  `;

  card.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('Product card clicked:', product.code);

    if (product.images && product.images.length > 0) {
      showImageModal(product.images, 0, product.name, product);
    } else {
      showProductModal(product);
    }
  });

  return card;
}


// Enhanced image modal functionality
function setupImageModal() {
  if (imageModalClose) {
    imageModalClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeImageModal();
    });
  }
  if (imageModalOverlay) {
    imageModalOverlay.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeImageModal();
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (imageModal && !imageModal.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        closeImageModal();
      } else if (e.key === 'ArrowLeft') {
        navigateImage(-1);
      } else if (e.key === 'ArrowRight') {
        navigateImage(1);
      }
    }
  });
}

function showImageModal(images, startIndex = 0, productName = '', product = null) {
  if (!imageModal) return;
  
  console.log('Opening image modal for:', productName, 'with', images.length, 'images');
  
  currentImageIndex = startIndex;
  currentImages = images;
  currentProduct = product;
  
  document.getElementById('imageModalTitle').textContent = productName || 'Product Images';
  
  // Setup navigation buttons
  const prevBtn = document.getElementById('imagePrevBtn');
  const nextBtn = document.getElementById('imageNextBtn');
  
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigateImage(-1);
    };
    prevBtn.style.display = images.length > 1 ? 'flex' : 'none';
  }
  
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigateImage(1);
    };
    nextBtn.style.display = images.length > 1 ? 'flex' : 'none';
  }
  
  updateImageDisplay();
  
  imageModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function updateImageDisplay() {
  const imageContainer = document.getElementById('imageContainer');
  const imageCounter = document.getElementById('imageCounter');

  if (imageContainer && currentImages.length > 0) {
    const currentImage = currentImages[currentImageIndex];
    const isNTP01 = currentProduct && currentProduct.code === 'NTP-01';
    const isFirstImage = currentImageIndex === 0;
    const isSecondImage = currentImageIndex === 1;

    let additionalInfo = '';

    // Add extra info for special product
    if (isNTP01) {
      if (isFirstImage) {
        additionalInfo = `
          <div class="image-specs">
            <div class="spec-item"><strong>Type:</strong> Product Photography</div>
            <div class="spec-item"><strong>View:</strong> Side view with extended rod</div>
            <div class="spec-item"><strong>Material:</strong> Polyamide PA6GF30</div>
            <div class="spec-item"><strong>Dimensions:</strong> 160mm Ã— 34mm</div>
          </div>
        `;
      } else if (isSecondImage) {
        additionalInfo = `
          <div class="image-specs">
            <div class="spec-item"><strong>Type:</strong> Technical Drawing</div>
            <div class="spec-item"><strong>Dimensions:</strong> 160mm Ã— 34mm/div>
            <div class="spec-item"><strong>Material:</strong> Polyamide PA6GF30</div>
            <div class="spec-item"><strong>Rod Type:</strong> 8mm Round Rod</div>
          </div>
        `;
      }
    }

    // Use <img> tag to actually display the image
    imageContainer.innerHTML = `
      <div class="image-placeholder-large ${isNTP01 ? 'ntp01-large' : ''}">
        <img src="${currentImage.src}" alt="${currentImage.alt}" class="large-image"/>
        <p class="image-title">${currentImage.alt}</p>
        <p class="image-caption">${currentImage.caption}</p>
        ${additionalInfo}
      </div>
    `;
  }

  if (imageCounter && currentImages.length > 1) {
    imageCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
  }
}


function navigateImage(direction) {
  if (!currentImages || currentImages.length <= 1) return;
  
  currentImageIndex += direction;
  
  if (currentImageIndex < 0) {
    currentImageIndex = currentImages.length - 1;
  } else if (currentImageIndex >= currentImages.length) {
    currentImageIndex = 0;
  }
  
  updateImageDisplay();
}

function closeImageModal() {
  if (imageModal) {
    imageModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentImages = [];
    currentImageIndex = 0;
    currentProduct = null;
  }
}

// Product modal functionality
function setupProductModal() {
  if (modalClose) {
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeProductModal();
    });
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeProductModal();
    });
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && productModal && !productModal.classList.contains('hidden')) {
      closeProductModal();
    }
  });
}

function showProductModal(product) {
  if (!productModal) return;
  
  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductCode').textContent = product.code;
  document.getElementById('modalProductMaterial').textContent = product.material;
  document.getElementById('modalProductApplications').textContent = product.applications;
  
  const featuresList = document.getElementById('modalProductFeatures');
  if (featuresList) {
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }
  
  // Fixed WhatsApp link
  const whatsappBtn = document.getElementById('modalWhatsAppBtn');
  if (whatsappBtn) {
    const message = `I'm interested in product: ${product.name} (${product.code})`;
    whatsappBtn.href = `https://wa.me/918884136192?text=${encodeURIComponent(message)}`;
  }
  
  productModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  if (productModal) {
    productModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Contact form functionality
function setupContactForm() {
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const message = formData.get('message');
      
      // Create WhatsApp message
      let whatsappMessage = `Hi, I'm ${name}.\n\n${message}\n\nContact Details:\nEmail: ${email}`;
      if (phone) {
        whatsappMessage += `\nPhone: ${phone}`;
      }
      
      // Open WhatsApp - Fixed
      const whatsappUrl = `https://wa.me/918884136192?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      showNotification('Message sent via WhatsApp!', 'success');
      
      // Reset form
      this.reset();
    });
  }
}

// Download catalogue functionality
function setupDownloadButtons() {
  const downloadButtons = [
    document.getElementById('downloadBtn'),
    document.getElementById('mobileDownloadBtn'),
    document.getElementById('heroDownloadBtn')
  ];
  
  downloadButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        downloadCatalogue();
      });
    }
  });
}

function downloadCatalogue() {
  showNotification('Catalogue download will be available soon. Please contact us for the latest catalogue.', 'info');
}

// Fixed WhatsApp buttons functionality
function setupWhatsAppButtons() {
  const heroContactBtn = document.getElementById('heroContactBtn');
  
  if (heroContactBtn) {
    heroContactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const message = 'Hi, I would like to know more about your products.';
      const whatsappUrl = `https://wa.me/918884136192?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
  
  // Ensure all WhatsApp links work
  document.addEventListener('click', function(e) {
    const whatsappLink = e.target.closest('a[href*="wa.me"]');
    if (whatsappLink) {
      e.preventDefault();
      window.open(whatsappLink.href, '_blank');
    }
  });
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-base);
    box-shadow: var(--shadow-md);
    padding: var(--space-16);
    z-index: 3000;
    max-width: 400px;
    animation: slideIn 0.3s ease-out;
  `;
  
  // Add notification-specific styles
  if (type === 'success') {
    notification.style.borderColor = 'var(--color-success)';
    notification.style.background = `rgba(var(--color-success-rgb), 0.1)`;
  } else if (type === 'info') {
    notification.style.borderColor = 'var(--color-info)';
    notification.style.background = `rgba(var(--color-info-rgb), 0.1)`;
  }
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-12);
  }
  
  .notification-message {
    color: var(--color-text);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
  }
  
  .notification-close {
    background: none;
    border: none;
    color: var(--color-text-secondary);
    cursor: pointer;
    padding: var(--space-4);
    border-radius: var(--radius-base);
    transition: color var(--duration-fast) var(--ease-standard);
  }
  
  .notification-close:hover {
    color: var(--color-text);
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .no-products {
    grid-column: 1 / -1;
    text-align: center;
    padding: var(--space-32);
    color: var(--color-text-secondary);
    font-size: var(--font-size-lg);
  }
`;
document.head.appendChild(notificationStyles);