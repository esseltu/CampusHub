// Initialize the page with all hostels
document.addEventListener('DOMContentLoaded', function() {
    // Check if properties are loaded
    if (typeof properties === 'undefined') {
        console.error('Properties data not loaded');
        return;
    }

    // Only run main logic if we are on the listings page (or if the container exists)
    const listingsContainer = document.getElementById('propertyListings');
    if (listingsContainer) {
        loadProperties(properties);
        setupEventListeners();
    }
});

function loadProperties(propertiesToLoad) {
    const listingsContainer = document.getElementById('propertyListings');
    if (!listingsContainer) return;
    
    listingsContainer.innerHTML = '';
    
    propertiesToLoad.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.name}">
                <i class="far fa-heart heart-icon"></i>
            </div>
            <div class="property-info">
                <div class="rating-row">
                    <h3>${property.name}</h3>
                    <span><i class="fas fa-star"></i> 4.8</span>
                </div>
                <p class="university">${property.university}</p>
                <p>${property.location}</p>
                <p>${property.type}</p>
                <p class="price"><strong>GH₵ ${property.price}</strong> / semester</p>
            </div>
        `;
        
        propertyCard.addEventListener('click', () => {
            window.location.href = `property-details.html?id=${property.id}`;
        });
        
        listingsContainer.appendChild(propertyCard);
    });
}

function setupEventListeners() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('heart-icon')) {
            e.stopPropagation();
            e.target.classList.toggle('far');
            e.target.classList.toggle('fas');
            e.target.style.color = e.target.classList.contains('fas') ? '#ff385c' : 'white';
        }
    });

    document.querySelectorAll('.filter-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            document.querySelectorAll('.filter-item').forEach(i => i.classList.remove('active'));
            // Add to clicked item
            this.classList.add('active');
            filterProperties(this.dataset.filter);
        });
    });

    // Update selectors for new search box structure
    const searchButton = document.querySelector('.search-box .fa-search');
    if (searchButton) {
        // The icon might be clicked, or the button itself
        const btn = searchButton.closest('button');
        if (btn) btn.addEventListener('click', performSearch);
    }
    
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

function filterProperties(filter) {
    if (filter === 'all') return loadProperties(properties);
    
    const filtered = properties.filter(property => {
        return property.amenities.includes(filter) || 
               property.gender === filter;
    });
    
    loadProperties(filtered);
}

function performSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (!searchInput) return;
    
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;
    
    const filtered = properties.filter(property => {
        return property.name.toLowerCase().includes(query) ||
               property.location.toLowerCase().includes(query);
    });
    
    if (filtered.length > 0) {
        loadProperties(filtered);
    } else {
        const container = document.getElementById('propertyListings');
        if (container) {
            container.innerHTML = `
                <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px;">
                    <h3>No properties found</h3>
                    <button onclick="window.location.reload()" 
                            style="margin-top: 20px; padding: 10px 20px; 
                                   background: #ff385c; color: white; 
                                   border: none; border-radius: 6px; 
                                   cursor: pointer;">
                        Back to all listings
                    </button>
                </div>
            `;
        }
    }
}