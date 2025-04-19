// Complete properties data with all hostels
const properties = [
    {
        id: 1,
        name: "Old Girls Hostel",
        university: "Central University Area",
        location: "Central University, Miotso, New Dawenya",
        type: "Female only",
        price: 1200,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        amenities: ["wifi", "security", "laundry"],
        gender: "female"
    },
    {
        id: 2,
        name: "Starley Hostel",
        university: "Central University Area",
        location: "Prantheart, Dawhenya Medical Centre",
        type: "Mixed gender · AC option",
        price: 1500,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        amenities: ["wifi", "ac", "gym"],
        gender: "mixed"
    },
    {
        id: 3,
        name: "Mawuena Hostel",
        university: "Central University Area",
        location: "New Dawenya, near campus",
        type: "Mixed gender · AC option",
        price: 1400,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        amenities: ["wifi", "ac", "laundry"],
        gender: "mixed"
    },
    {
        id: 4,
        name: "Naa Monkor Hostel",
        university: "Central University Area",
        location: "Dawhenya, near medical centre",
        type: "Mixed gender · AC option",
        price: 1350,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        amenities: ["wifi", "ac", "meals"],
        gender: "mixed"
    },
    {
        id: 5,
        name: "Blue Hostel",
        university: "Central University Area",
        location: "Central University area, Miotso",
        type: "Mixed gender · AC option",
        price: 1450,
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        amenities: ["wifi", "ac", "gym", "shuttle"],
        gender: "mixed"
    },
    {
        id: 6,
        name: "Wilson's Hostel",
        university: "Central University Area",
        location: "Ada Kope, Dawhenya near Lowkey Gym",
        type: "Mixed gender · AC option",
        price: 1300,
        image: "https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        amenities: ["wifi", "security"],
        gender: "mixed"
    },
    {
        id: 7,
        name: "Pronto Hostel",
        university: "Central University Area",
        location: "Near Central University campus",
        type: "Female only",
        price: 1250,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        amenities: ["wifi", "security", "laundry"],
        gender: "female"
    },
    {
        id: 8,
        name: "CU Male Hostel",
        university: "Central University Area",
        location: "Near Central University campus",
        type: "Male only",
        price: 1100,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        amenities: ["wifi", "gym"],
        gender: "male"
    }
];

// Initialize the page with all hostels
document.addEventListener('DOMContentLoaded', function() {
    loadProperties(properties);
    setupEventListeners();
});

function loadProperties(propertiesToLoad) {
    const listingsContainer = document.getElementById('propertyListings');
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
                <h3>${property.name} <i class="fas fa-check-circle verified-badge"></i></h3>
                <p class="university">${property.university}</p>
                <p>${property.location}</p>
                <p>${property.type}</p>
                <p class="price">GH₵ ${property.price}/semester</p>
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
            document.querySelector('.filter-item.active').classList.remove('active');
            this.classList.add('active');
            filterProperties(this.dataset.filter);
        });
    });

    const searchButton = document.querySelector('.search-bar .fa-search');
    searchButton.addEventListener('click', performSearch);
    
    document.querySelector('.search-bar input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
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
    const query = document.querySelector('.search-bar input').value.trim().toLowerCase();
    if (!query) return;
    
    const filtered = properties.filter(property => {
        return property.name.toLowerCase().includes(query) ||
               property.location.toLowerCase().includes(query);
    });
    
    if (filtered.length > 0) {
        loadProperties(filtered);
    } else {
        document.getElementById('propertyListings').innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <h3>No properties found</h3>
                <button onclick="window.location.href='index.html'" 
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