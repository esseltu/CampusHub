const properties = [
    {
        id: 1,
        name: "Old Girls Hostel",
        university: "Central University Area",
        location: "Central University campus, Miotso",
        type: "Female only",
        price: 1750,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        amenities: ["security", "laundry", "wifi"],
        gender: "female",
        description: "This female-only hostel provides comfortable accommodation with 24/7 security, free WiFi, and laundry facilities. Located just 5 minutes walk from campus."
    },
    {
        id: 2,
        name: "Starley Hostel",
        university: "Central University Area",
        location: "Near central university campus",
        type: "Mixed gender",
        price: 1500,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        amenities: ["ac", "gym", "wifi"],
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
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        images: [
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        amenities: ["ac", "laundry", "wifi"],
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
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        amenities: ["ac", "laundry", "wifi", "meals"],
        gender: "mixed",
        description: "Affordable mixed hostel with available AC options. Close to campus."
    },
    {
        id: 5,
        name: "Blue Hostel",
        university: "Central University Area",
        location: "Central University area, Miotso",
        type: "Mixed gender · AC option",
        price: 1450,
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        images: [
            "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        amenities: ["ac", "gym", "shuttle", "wifi"],
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
        image: "https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
