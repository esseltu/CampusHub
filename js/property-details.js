document.addEventListener('DOMContentLoaded', function() {
    // Get property ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id'));
    
    // Sample property data (should match your main.js data)
    const properties = [
        {
            id: 1,
            name: "Old Girls Hostel",
            university: "Central University Area",
            location: "Central University campus, Miotso",
            type: "Female only",
            price: 1750,
            images: [
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            amenities: ["security", "laundry"],
            gender: "female",
            description: "This female-only hostel provides comfortable accommodation with 24/7 security, free WiFi, and laundry facilities. Located just 5 minutes walk from campus."
        },
        {
            id: 2,
            name: "Starley Hostel",
            university: "Central University Area",
            location: "Near central university campus",
            type: "Mixed gender ",
            price: 1500,
            images: [
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            amenities: ["ac", "gym"],
            gender: "mixed",
            description: "Modern mixed-gender hostel with AC options, gym access. Just 7 minutes from campus with regular shuttle service."
        },
        {
            id: 3,
            name: "Mawuena Hostel",
            university: "Central University Area",
            location: "New Dawenya, near campus",
            type: "Mixed gender · AC option",
            price: 1400,
            images: [
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            amenities: [ "ac", "laundry"],
            gender: "mixed",
            description: "Comfortable mixed accommodation with AC options and on-site laundry facilities. Located within walking distance of campus."
        },
        {
            id: 4,
            name: "Naa Monkor Hostel",
            university: "Central University Area",
            location: "Miotso, near central university campus",
            type: "Mixed gender · AC option",
            price: 1850,
            images: [
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            amenities: ["ac", "laundry"],
            gender: "mixed",
            description: "Affordable mixed hostel with available  AC options. Close to campus."
        },
        {
            id: 5,
            name: "Blue Hostel",
            university: "Central University Area",
            location: "Central University area, Miotso",
            type: "Mixed gender · AC option",
            price: 1450,
            images: [
                "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            amenities: [ "ac", "gym", "shuttle"],
            gender: "mixed",
            description: "Premium mixed hostel with gym access and campus shuttle service. Air-conditioned rooms."
        },
        {
            id: 6,
            name: "Wilson's Hostel",
            university: "Central University Area",
            location: "Ada Kope, Dawhenya near Lowkey Gym",
            type: "Mixed gender · AC option",
            price: 1300,
            images: [
                "https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            amenities: ["wifi", "security"],
            gender: "mixed",
            description: "Affordable mixed hostel with 24/7 security and WiFi access. Conveniently located near popular student gym."
        },
        {
            id: 7,
            name: "Pronto Hostel",
            university: "Central University Area",
            location: "Near Central University campus",
            type: "Female only",
            price: 1250,
            images: [
                "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            amenities: ["wifi", "security", "laundry"],
            gender: "female",
            description: "Secure female-only hostel with laundry facilities and high-speed WiFi. Just 3 minutes from campus."
        },
        {
            id: 8,
            name: "CU Male Hostel",
            university: "Central University Area",
            location: "Near Central University campus",
            type: "Male only",
            price: 1100,
            images: [
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            amenities: ["wifi", "gym"],
            gender: "male",
            description: "Male-only hostel with gym access and WiFi. Affordable accommodation with study-friendly environment."
        }
    ];

    // Find the property with matching ID
    const property = properties.find(p => p.id === propertyId);
    
    if (property) {
        renderPropertyDetails(property);
        setupGallery();
        setupBookingForm();
    } else {
        // Property not found
        document.querySelector('.property-details-container').innerHTML = `
            <div class="error-message" style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <h2>Property not found</h2>
                <p>We couldn't find the hostel you're looking for.</p>
                <button onclick="window.location.href='index.html'" 
                        style="margin-top: 20px; padding: 10px 20px; 
                               background: #00a65a; color: white; 
                               border: none; border-radius: 6px; 
                               cursor: pointer;">
                    Back to listings
                </button>
            </div>
        `;
    }
});

function renderPropertyDetails(property) {
    const container = document.getElementById('propertyDetails');
    
    // Format amenities with icons
    const amenitiesHTML = property.amenities.map(amenity => {
        const icon = getAmenityIcon(amenity);
        return `<span><i class="fas fa-${icon}"></i> ${formatAmenity(amenity)}</span>`;
    }).join('');

    container.innerHTML = `
        <div class="property-gallery">
            <img src="${property.images[0]}" alt="${property.name}" class="main-image">
            <div class="thumbnail-container">
                ${property.images.map(img => `
                    <img src="${img}" class="thumbnail" alt="${property.name}">
                `).join('')}
            </div>
        </div>
        
        <div class="property-info">
            <h1>${property.name}</h1>
            <p class="university">${property.university}</p>
            <p>${property.location}</p>
            <p>${property.type}</p>
            
            <div class="amenities">
                ${amenitiesHTML}
            </div>
            
            <div class="description">
                <h3>About this hostel</h3>
                <p>${property.description}</p>
            </div>
            
            <div class="booking-section">
                <h2>GH₵ ${property.price}<span>/semester</span></h2>
                <form class="booking-form">
                    <input type="date" id="checkin" placeholder="Check-in" required>
                    <input type="date" id="checkout" placeholder="Check-out" required>
                    <select id="roomType" required>
                        <option value="">Select Room Type</option>
                        <option value="single">Two in a Room (GH₵ ${property.price})</option>
                        <option value="shared">Four in a Room (GH₵ ${property.price - 200})</option>
                    </select>
                    <button type="submit">Request Booking</button>
                </form>
            </div>
        </div>
    `;
}

function setupGallery() {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Update main image
            mainImage.src = thumb.src;
            
            // Highlight selected thumbnail
            thumbnails.forEach(t => t.style.borderColor = 'transparent');
            thumb.style.borderColor = '#00a65a';
        });
    });
}

function setupBookingForm() {
    const form = document.querySelector('.booking-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const checkin = document.getElementById('checkin').value;
            const checkout = document.getElementById('checkout').value;
            const roomType = document.getElementById('roomType').value;
            
            if (!checkin || !checkout || !roomType) {
                alert('Please fill all fields');
                return;
            }
            
            // In a real app, you would process the booking here
            alert(`Booking request submitted!\n\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nRoom Type: ${roomType}`);
            
            // Redirect to booking confirmation
            window.location.href = `booking.html?checkin=${checkin}&checkout=${checkout}&roomType=${roomType}`;
        });
    }
}

// Helper functions
function getAmenityIcon(amenity) {
    const icons = {
        wifi: 'wifi',
        security: 'lock',
        laundry: 'tshirt',
        ac: 'snowflake',
        gym: 'dumbbell',
        meals: 'utensils',
        shuttle: 'bus'
    };
    return icons[amenity] || 'check';
}

function formatAmenity(amenity) {
    return amenity.charAt(0).toUpperCase() + amenity.slice(1);
}