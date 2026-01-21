document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id'));
    
    // Check if properties are loaded
    if (typeof properties === 'undefined') {
        console.error('Properties data not loaded');
        return;
    }

    const property = properties.find(p => p.id === propertyId);
    
    if (property) {
        renderPropertyDetails(property);
        // setupGallery(); // Gallery is now CSS grid based, maybe simple lightbox later
    } else {
        document.getElementById('propertyDetails').innerHTML = `
            <div style="text-align: center; padding: 100px 0;">
                <h2>Property not found</h2>
                <p>We couldn't find the hostel you're looking for.</p>
                <button onclick="window.location.href='listings.html'" 
                        class="booking-btn" style="width: auto; margin-top: 20px;">
                    Back to listings
                </button>
            </div>
        `;
    }
});

function renderPropertyDetails(property) {
    const container = document.getElementById('propertyDetails');
    
    // Ensure images array exists, fallback to single image if needed
    const images = property.images || [property.image, property.image, property.image];
    
    // Amenities HTML
    const amenitiesHTML = property.amenities.map(amenity => `
        <div class="amenity-item">
            <i class="fas fa-${getAmenityIcon(amenity)}"></i>
            <span>${formatAmenity(amenity)}</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="property-header">
            <h1>${property.name}</h1>
            <div class="property-meta">
                <span><i class="fas fa-star" style="color: var(--primary-color)"></i> 4.85 · 12 reviews</span>
                <span>${property.location}</span>
                <span>${property.university}</span>
            </div>
        </div>

        <div class="property-gallery">
            <img src="${images[0]}" alt="${property.name}" class="main-image">
            <div class="gallery-grid">
                <img src="${images[1] || images[0]}" alt="${property.name}" class="gallery-item">
                <img src="${images[2] || images[0]}" alt="${property.name}" class="gallery-item">
            </div>
        </div>

        <div class="property-content">
            <div class="details-column">
                <div class="host-info">
                    <div class="host-details">
                        <h2>${property.type} hosted by CampusHub</h2>
                        <p>2 guests · 1 bedroom · 1 bed · 1 shared bath</p>
                    </div>
                    <i class="fas fa-user-circle" style="font-size: 48px; color: var(--text-secondary)"></i>
                </div>

                <div class="features-section">
                    <div class="feature-item">
                        <i class="fas fa-medal"></i>
                        <div class="feature-text">
                            <h3>CampusHub Verified</h3>
                            <p>This property has been inspected and verified by the SRC.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="feature-text">
                            <h3>Great Location</h3>
                            <p>95% of recent guests gave the location a 5-star rating.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-calendar"></i>
                        <div class="feature-text">
                            <h3>Free cancellation for 48 hours</h3>
                            <p>Get a full refund if you change your mind.</p>
                        </div>
                    </div>
                </div>

                <div class="amenities-section">
                    <h2>What this place offers</h2>
                    <div class="amenities-grid">
                        ${amenitiesHTML}
                    </div>
                </div>

                <div class="description-section" style="padding: 32px 0; border-bottom: 1px solid var(--border-light);">
                    <h2>About this hostel</h2>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin-top: 16px;">
                        ${property.description}
                    </p>
                </div>
            </div>

            <div class="booking-column">
                <div class="booking-card">
                    <div class="booking-header">
                        <div class="booking-price">
                            GH₵ ${property.price} <span>/ semester</span>
                        </div>
                        <div class="booking-rating">
                            <i class="fas fa-star" style="color: var(--primary-color)"></i> 4.85
                        </div>
                    </div>

                    <form class="booking-form" onsubmit="handleBooking(event)">
                        <div style="border: 1px solid #b0b0b0; border-radius: 8px; overflow: hidden;">
                            <div style="display: flex; border-bottom: 1px solid #b0b0b0;">
                                <div style="flex: 1; padding: 10px; border-right: 1px solid #b0b0b0;">
                                    <label style="display: block; font-size: 10px; font-weight: 700;">CHECK-IN</label>
                                    <input type="date" required style="border: none; width: 100%; outline: none; font-family: inherit;">
                                </div>
                                <div style="flex: 1; padding: 10px;">
                                    <label style="display: block; font-size: 10px; font-weight: 700;">CHECKOUT</label>
                                    <input type="date" required style="border: none; width: 100%; outline: none; font-family: inherit;">
                                </div>
                            </div>
                            <div style="padding: 10px;">
                                <label style="display: block; font-size: 10px; font-weight: 700;">GUESTS</label>
                                <select style="border: none; width: 100%; outline: none; background: white;">
                                    <option>1 Student</option>
                                    <option>2 Students</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" class="booking-btn">Request to Book</button>
                    </form>
                    <p class="no-charge">You won't be charged yet</p>
                </div>
            </div>
        </div>
    `;
}

function handleBooking(e) {
    e.preventDefault();
    alert("Booking request sent! This is a demo.");
}

function getAmenityIcon(amenity) {
    const icons = {
        wifi: 'wifi',
        security: 'shield-alt',
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
