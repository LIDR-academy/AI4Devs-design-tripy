// Mock API Data - Expanded with more examples
const MOCK_TOURS = [
    {
        id: 1,
        title: "Grand Canyon Adventure with Helicopter Tour",
        location: "Grand Canyon, Arizona",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        price: 320,
        rating: 4.9,
        reviewCount: 124,
        duration: 5,
        durationUnit: "hours",
        maxPeople: 8,
        type: ["adventure"],
        amenities: ["free-cancellation"],
        features: ["Free cancellation"],
        badge: "Featured"
    },
    {
        id: 2,
        title: "Desert Safari with Traditional Camping",
        location: "Santa Fe, New Mexico",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
        price: 180,
        rating: 4.7,
        reviewCount: 89,
        duration: 2,
        durationUnit: "days",
        maxPeople: 12,
        type: ["adventure", "cultural"],
        amenities: ["meals-included"],
        features: ["Meals included"]
    },
    {
        id: 3,
        title: "White Sands National Park Photography Tour",
        location: "Alamogordo, New Mexico",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        price: 95,
        rating: 4.8,
        reviewCount: 67,
        duration: 6,
        durationUnit: "hours",
        maxPeople: 6,
        type: ["photography", "relaxation"],
        amenities: [],
        features: ["Photo guide"]
    },
    {
        id: 4,
        title: "Albuquerque Hot Air Balloon Ride at Sunrise",
        location: "Albuquerque, New Mexico",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
        price: 220,
        rating: 4.9,
        reviewCount: 156,
        duration: 3,
        durationUnit: "hours",
        maxPeople: 4,
        type: ["adventure", "relaxation"],
        amenities: ["meals-included"],
        features: ["Breakfast included"],
        badge: "Popular"
    },
    {
        id: 5,
        title: "Carlsbad Caverns Underground Expedition",
        location: "Carlsbad, New Mexico",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        price: 140,
        rating: 4.6,
        reviewCount: 203,
        duration: 4,
        durationUnit: "hours",
        maxPeople: 15,
        type: ["adventure", "cultural"],
        amenities: ["free-cancellation", "transportation"],
        features: ["Free cancellation", "Transportation"]
    },
    {
        id: 6,
        title: "Native American Cultural Experience",
        location: "Taos, New Mexico",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
        price: 85,
        rating: 4.5,
        reviewCount: 78,
        duration: 3,
        durationUnit: "hours",
        maxPeople: 10,
        type: ["cultural"],
        amenities: ["instant-booking"],
        features: ["Instant booking"]
    },
    {
        id: 7,
        title: "Gila National Forest Wildlife Safari",
        location: "Silver City, New Mexico",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        price: 275,
        rating: 4.8,
        reviewCount: 92,
        duration: 7,
        durationUnit: "hours",
        maxPeople: 6,
        type: ["wildlife", "adventure"],
        amenities: ["free-cancellation", "meals-included"],
        features: ["Free cancellation", "Meals included"]
    },
    {
        id: 8,
        title: "Santa Fe Art District Walking Tour",
        location: "Santa Fe, New Mexico",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
        price: 45,
        rating: 4.3,
        reviewCount: 134,
        duration: 2,
        durationUnit: "hours",
        maxPeople: 20,
        type: ["cultural", "relaxation"],
        amenities: ["instant-booking"],
        features: ["Instant booking"]
    },
    {
        id: 9,
        title: "Rio Grande Rafting Adventure",
        location: "Taos, New Mexico",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        price: 160,
        rating: 4.7,
        reviewCount: 167,
        duration: 1,
        durationUnit: "days",
        maxPeople: 12,
        type: ["adventure", "wildlife"],
        amenities: ["free-cancellation", "transportation", "meals-included"],
        features: ["Free cancellation", "Transportation", "Meals included"]
    },
    {
        id: 10,
        title: "Bandelier National Monument Photography Workshop",
        location: "Los Alamos, New Mexico",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        price: 120,
        rating: 4.9,
        reviewCount: 45,
        duration: 5,
        durationUnit: "hours",
        maxPeople: 8,
        type: ["photography", "cultural"],
        amenities: ["instant-booking"],
        features: ["Instant booking"]
    },
    {
        id: 11,
        title: "Roswell UFO Investigation Tour",
        location: "Roswell, New Mexico",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
        price: 65,
        rating: 4.1,
        reviewCount: 289,
        duration: 4,
        durationUnit: "hours",
        maxPeople: 25,
        type: ["cultural"],
        amenities: ["transportation"],
        features: ["Transportation"]
    },
    {
        id: 12,
        title: "Shiprock Hiking and Climbing",
        location: "Farmington, New Mexico",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        price: 95,
        rating: 4.6,
        reviewCount: 73,
        duration: 8,
        durationUnit: "hours",
        maxPeople: 6,
        type: ["adventure"],
        amenities: ["free-cancellation"],
        features: ["Free cancellation"]
    },
    {
        id: 13,
        title: "Chaco Culture National Park Guided Tour",
        location: "Nageezi, New Mexico",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        price: 110,
        rating: 4.8,
        reviewCount: 56,
        duration: 6,
        durationUnit: "hours",
        maxPeople: 12,
        type: ["cultural", "photography"],
        amenities: ["transportation", "meals-included"],
        features: ["Transportation", "Meals included"]
    },
    {
        id: 14,
        title: "Las Cruces Wine and Spa Retreat",
        location: "Las Cruces, New Mexico",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
        price: 185,
        rating: 4.4,
        reviewCount: 112,
        duration: 2,
        durationUnit: "days",
        maxPeople: 8,
        type: ["relaxation"],
        amenities: ["instant-booking", "meals-included"],
        features: ["Instant booking", "Meals included"]
    },
    {
        id: 15,
        title: "Organ Mountains Desert Peaks Wildlife Tour",
        location: "Las Cruces, New Mexico",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
        price: 130,
        rating: 4.7,
        reviewCount: 84,
        duration: 5,
        durationUnit: "hours",
        maxPeople: 10,
        type: ["wildlife", "photography"],
        amenities: ["free-cancellation", "transportation"],
        features: ["Free cancellation", "Transportation"]
    },
    {
        id: 16,
        title: "Four Corners Monument Road Trip",
        location: "Teec Nos Pos, Arizona",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        price: 250,
        rating: 4.5,
        reviewCount: 98,
        duration: 3,
        durationUnit: "days",
        maxPeople: 14,
        type: ["adventure", "cultural"],
        amenities: ["transportation", "meals-included"],
        features: ["Transportation", "Meals included"]
    },
    {
        id: 17,
        title: "Kasha-Katuwe Tent Rocks Hiking Adventure",
        location: "Cochiti, New Mexico",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        price: 75,
        rating: 4.6,
        reviewCount: 132,
        duration: 4,
        durationUnit: "hours",
        maxPeople: 16,
        type: ["adventure", "photography"],
        amenities: ["free-cancellation"],
        features: ["Free cancellation"]
    },
    {
        id: 18,
        title: "Ghost Ranch Landscape Photography Workshop",
        location: "Abiquiu, New Mexico",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
        price: 155,
        rating: 4.9,
        reviewCount: 61,
        duration: 7,
        durationUnit: "hours",
        maxPeople: 8,
        type: ["photography", "relaxation"],
        amenities: ["instant-booking", "meals-included"],
        features: ["Instant booking", "Meals included"]
    },
    {
        id: 19,
        title: "Pecos National Historical Park Cultural Tour",
        location: "Pecos, New Mexico",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
        price: 60,
        rating: 4.2,
        reviewCount: 87,
        duration: 3,
        durationUnit: "hours",
        maxPeople: 18,
        type: ["cultural"],
        amenities: ["transportation"],
        features: ["Transportation"]
    },
    {
        id: 20,
        title: "Bosque del Apache Wildlife Refuge Bird Watching",
        location: "San Antonio, New Mexico",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        price: 85,
        rating: 4.7,
        reviewCount: 103,
        duration: 5,
        durationUnit: "hours",
        maxPeople: 12,
        type: ["wildlife", "photography"],
        amenities: ["free-cancellation", "instant-booking"],
        features: ["Free cancellation", "Instant booking"]
    },
    {
        id: 21,
        title: "Sandia Peak Tramway and Hiking Experience",
        location: "Albuquerque, New Mexico",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        price: 110,
        rating: 4.8,
        reviewCount: 175,
        duration: 6,
        durationUnit: "hours",
        maxPeople: 10,
        type: ["adventure", "relaxation"],
        amenities: ["transportation"],
        features: ["Transportation"]
    },
    {
        id: 22,
        title: "Truth or Consequences Hot Springs Retreat",
        location: "Truth or Consequences, New Mexico",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
        price: 145,
        rating: 4.6,
        reviewCount: 94,
        duration: 1,
        durationUnit: "days",
        maxPeople: 8,
        type: ["relaxation"],
        amenities: ["instant-booking", "meals-included"],
        features: ["Instant booking", "Meals included"]
    },
    {
        id: 23,
        title: "Very Large Array Radio Telescope Tour",
        location: "Socorro, New Mexico",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
        price: 40,
        rating: 4.4,
        reviewCount: 156,
        duration: 2,
        durationUnit: "hours",
        maxPeople: 25,
        type: ["cultural"],
        amenities: ["transportation"],
        features: ["Transportation"]
    },
    {
        id: 24,
        title: "Petroglyph National Monument Archaeological Walk",
        location: "Albuquerque, New Mexico",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        price: 55,
        rating: 4.3,
        reviewCount: 118,
        duration: 3,
        durationUnit: "hours",
        maxPeople: 15,
        type: ["cultural", "photography"],
        amenities: ["free-cancellation"],
        features: ["Free cancellation"]
    },
    {
        id: 25,
        title: "El Malpais Lava Tube Exploration",
        location: "Grants, New Mexico",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        price: 125,
        rating: 4.7,
        reviewCount: 82,
        duration: 5,
        durationUnit: "hours",
        maxPeople: 10,
        type: ["adventure", "cultural"],
        amenities: ["free-cancellation", "transportation"],
        features: ["Free cancellation", "Transportation"]
    },
    {
        id: 26,
        title: "Lincoln National Forest Wilderness Backpacking",
        location: "Ruidoso, New Mexico",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        price: 195,
        rating: 4.8,
        reviewCount: 67,
        duration: 2,
        durationUnit: "days",
        maxPeople: 8,
        type: ["adventure", "wildlife"],
        amenities: ["meals-included"],
        features: ["Meals included"]
    },
    {
        id: 27,
        title: "Acoma Pueblo Sky City Cultural Experience",
        location: "Acoma, New Mexico",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
        price: 90,
        rating: 4.9,
        reviewCount: 145,
        duration: 4,
        durationUnit: "hours",
        maxPeople: 12,
        type: ["cultural"],
        amenities: ["instant-booking", "transportation"],
        features: ["Instant booking", "Transportation"],
        badge: "Featured"
    },
    {
        id: 28,
        title: "Tent Rocks Slot Canyon Photography Tour",
        location: "Cochiti, New Mexico",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
        price: 105,
        rating: 4.8,
        reviewCount: 91,
        duration: 5,
        durationUnit: "hours",
        maxPeople: 8,
        type: ["photography", "adventure"],
        amenities: ["free-cancellation"],
        features: ["Free cancellation"]
    },
    {
        id: 29,
        title: "Bisti Badlands Alien Landscape Exploration",
        location: "Farmington, New Mexico",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
        price: 165,
        rating: 4.6,
        reviewCount: 76,
        duration: 8,
        durationUnit: "hours",
        maxPeople: 6,
        type: ["adventure", "photography"],
        amenities: ["meals-included", "transportation"],
        features: ["Meals included", "Transportation"]
    },
    {
        id: 30,
        title: "Santa Fe Canyon Road Art Gallery Walk",
        location: "Santa Fe, New Mexico",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
        price: 35,
        rating: 4.4,
        reviewCount: 203,
        duration: 2,
        durationUnit: "hours",
        maxPeople: 20,
        type: ["cultural", "relaxation"],
        amenities: ["instant-booking"],
        features: ["Instant booking"]
    }
];

// Application State
class TourFilterApp {
    constructor() {
        this.tours = [...MOCK_TOURS];
        this.filteredTours = [...MOCK_TOURS];
        this.currentPage = 1;
        this.toursPerPage = 10; // Changed from 4 to 10
        this.filters = {
            priceRange: [0, 1000],
            tourTypes: [],
            durations: [],
            minRating: 0,
            amenities: [],
            groupSize: [1, 20],
            sortBy: 'popularity'
        };
        
        console.log('🚀 Tour Filter App initialized');
        console.log('📊 Total tours in database:', this.tours.length);
        console.log('⚙️ Initial filters:', this.filters);
        
        this.init();
    }

    // Mock API call
    async fetchTours() {
        console.log('🔄 Fetching tours from API...');
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('✅ API call completed, received', MOCK_TOURS.length, 'tours');
                resolve([...MOCK_TOURS]);
            }, 300);
        });
    }

    // Initialize the application
    async init() {
        console.log('🔧 Initializing app components...');
        this.bindEvents();
        this.tours = await this.fetchTours();
        this.filteredTours = [...this.tours];
        this.updateUI();
        this.updateFilterCounts();
        console.log('✨ App initialization complete');
    }

    // Bind all event handlers
    bindEvents() {
        console.log('🔗 Binding event handlers...');
        
        // Price range slider
        const priceRange = document.getElementById('priceRange');
        if (priceRange) {
            priceRange.addEventListener('input', this.handlePriceRangeChange.bind(this));
            console.log('✓ Price range slider events bound');
        }

        // Group size slider
        const groupSizeRange = document.getElementById('groupSize');
        if (groupSizeRange) {
            groupSizeRange.addEventListener('input', this.handleGroupSizeChange.bind(this));
            console.log('✓ Group size slider events bound');
        }

        // Tour type checkboxes
        const tourTypeCheckboxes = document.querySelectorAll('.checkbox-input');
        tourTypeCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', this.handleTourTypeChange.bind(this));
        });
        console.log('✓ Tour type checkbox events bound (', tourTypeCheckboxes.length, 'checkboxes)');

        // Rating options
        const ratingOptions = document.querySelectorAll('.rating-option');
        ratingOptions.forEach(option => {
            option.addEventListener('click', this.handleRatingChange.bind(this));
        });
        console.log('✓ Rating filter events bound (', ratingOptions.length, 'options)');

        // Amenity toggles
        const toggleSwitches = document.querySelectorAll('.toggle-switch');
        toggleSwitches.forEach((toggle, index) => {
            toggle.addEventListener('click', () => this.handleAmenityToggle(index));
        });
        console.log('✓ Amenity toggle events bound (', toggleSwitches.length, 'toggles)');

        // Sort dropdown
        const sortSelect = document.querySelector('.sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', this.handleSortChange.bind(this));
            console.log('✓ Sort dropdown events bound');
        }

        // Filter action buttons
        const applyBtn = document.querySelector('.btn-filter-apply');
        const clearBtn = document.querySelector('.btn-filter-clear');
        
        if (applyBtn) {
            applyBtn.addEventListener('click', this.applyFilters.bind(this));
            console.log('✓ Apply filters button events bound');
        }
        
        if (clearBtn) {
            clearBtn.addEventListener('click', this.clearFilters.bind(this));
            console.log('✓ Clear filters button events bound');
        }

        // Favorite buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.result-card-favorite')) {
                this.handleFavoriteToggle(e.target.closest('.result-card-favorite'));
            }
        });
        console.log('✓ Favorite button events bound');

        // Pagination
        document.addEventListener('click', (e) => {
            if (e.target.closest('.pagination-btn') && !e.target.closest('.pagination-btn-disabled')) {
                e.preventDefault();
                const pageBtn = e.target.closest('.pagination-btn');
                if (pageBtn && !pageBtn.classList.contains('pagination-arrow')) {
                    this.handlePageChange(parseInt(pageBtn.textContent));
                }
            }
        });
        console.log('✓ Pagination events bound');
    }

    // Event Handlers
    handlePriceRangeChange(e) {
        const value = parseInt(e.target.value);
        const oldRange = [...this.filters.priceRange];
        this.filters.priceRange = [0, value];
        
        console.log('💰 Price range filter changed:');
        console.log('  - Previous range:', oldRange);
        console.log('  - New range:', this.filters.priceRange);
        console.log('  - Slider value:', value);
        
        this.updatePriceDisplay(value);
        this.applyFilters();
    }

    handleGroupSizeChange(e) {
        const value = parseInt(e.target.value);
        const oldRange = [...this.filters.groupSize];
        this.filters.groupSize = [1, value];
        
        console.log('👥 Group size filter changed:');
        console.log('  - Previous range:', oldRange);
        console.log('  - New range:', this.filters.groupSize);
        console.log('  - Slider value:', value);
        
        this.updateGroupSizeDisplay(value);
        this.applyFilters();
    }

    handleTourTypeChange(e) {
        const tourTypeMap = {
            0: 'adventure',
            1: 'cultural', 
            2: 'relaxation',
            3: 'wildlife',
            4: 'photography'
        };
        
        const checkboxes = document.querySelectorAll('.checkbox-input');
        const index = Array.from(checkboxes).indexOf(e.target);
        const tourType = tourTypeMap[index];
        const oldTypes = [...this.filters.tourTypes];
        
        if (e.target.checked) {
            if (!this.filters.tourTypes.includes(tourType)) {
                this.filters.tourTypes.push(tourType);
            }
        } else {
            this.filters.tourTypes = this.filters.tourTypes.filter(type => type !== tourType);
        }
        
        console.log('🎯 Tour type filter changed:');
        console.log('  - Checkbox index:', index);
        console.log('  - Tour type:', tourType);
        console.log('  - Checked:', e.target.checked);
        console.log('  - Previous types:', oldTypes);
        console.log('  - New types:', this.filters.tourTypes);
        
        this.applyFilters();
    }

    handleRatingChange(e) {
        const ratingOptions = document.querySelectorAll('.rating-option');
        ratingOptions.forEach(opt => opt.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        const ratingText = e.currentTarget.querySelector('.rating-text').textContent;
        const rating = parseFloat(ratingText.split(' ')[0]);
        const oldRating = this.filters.minRating;
        this.filters.minRating = rating;
        
        console.log('⭐ Rating filter changed:');
        console.log('  - Rating text:', ratingText);
        console.log('  - Previous min rating:', oldRating);
        console.log('  - New min rating:', this.filters.minRating);
        
        this.applyFilters();
    }

    handleAmenityToggle(index) {
        const amenityMap = {
            0: 'free-cancellation',
            1: 'instant-booking',
            2: 'meals-included',
            3: 'transportation'
        };
        
        const amenity = amenityMap[index];
        const toggle = document.querySelectorAll('.toggle-switch')[index];
        const oldAmenities = [...this.filters.amenities];
        
        toggle.classList.toggle('active');
        
        if (toggle.classList.contains('active')) {
            if (!this.filters.amenities.includes(amenity)) {
                this.filters.amenities.push(amenity);
            }
        } else {
            this.filters.amenities = this.filters.amenities.filter(a => a !== amenity);
        }
        
        console.log('🎫 Amenity filter changed:');
        console.log('  - Toggle index:', index);
        console.log('  - Amenity:', amenity);
        console.log('  - Active:', toggle.classList.contains('active'));
        console.log('  - Previous amenities:', oldAmenities);
        console.log('  - New amenities:', this.filters.amenities);
        
        this.applyFilters();
    }

    handleSortChange(e) {
        const oldSort = this.filters.sortBy;
        this.filters.sortBy = e.target.value.toLowerCase().replace(/[^a-z]/g, '');
        
        console.log('📊 Sort order changed:');
        console.log('  - Sort option text:', e.target.value);
        console.log('  - Previous sort:', oldSort);
        console.log('  - New sort:', this.filters.sortBy);
        
        this.applyFilters();
    }

    handleFavoriteToggle(button) {
        const icon = button.querySelector('i');
        const isHearted = icon.getAttribute('data-lucide') === 'heart';
        
        if (isHearted) {
            icon.setAttribute('data-lucide', 'heart');
            icon.style.fill = '#E61C5D';
            icon.style.color = '#E61C5D';
        } else {
            icon.setAttribute('data-lucide', 'heart');
            icon.style.fill = 'none';
            icon.style.color = '';
        }
        
        console.log('❤️ Favorite toggled:', isHearted ? 'removed' : 'added');
        lucide.createIcons();
    }

    handlePageChange(page) {
        const oldPage = this.currentPage;
        this.currentPage = page;
        
        console.log('📄 Page changed:');
        console.log('  - Previous page:', oldPage);
        console.log('  - New page:', this.currentPage);
        console.log('  - Tours per page:', this.toursPerPage);
        
        this.updateUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Filtering Logic
    applyFilters() {
        console.log('🔍 Applying filters...');
        console.log('📋 Current filter state:', JSON.parse(JSON.stringify(this.filters)));
        
        let filtered = [...this.tours];
        const initialCount = filtered.length;

        // Filter by price range
        filtered = filtered.filter(tour => 
            tour.price >= this.filters.priceRange[0] && tour.price <= this.filters.priceRange[1]
        );
        console.log('💰 After price filter:', filtered.length, 'tours (removed', initialCount - filtered.length, ')');

        // Filter by tour types
        if (this.filters.tourTypes.length > 0) {
            const beforeTypeFilter = filtered.length;
            filtered = filtered.filter(tour => 
                tour.type.some(type => this.filters.tourTypes.includes(type))
            );
            console.log('🎯 After tour type filter:', filtered.length, 'tours (removed', beforeTypeFilter - filtered.length, ')');
        }

        // Filter by duration
        if (this.filters.durations.length > 0) {
            const beforeDurationFilter = filtered.length;
            filtered = filtered.filter(tour => {
                return this.filters.durations.some(duration => {
                    switch(duration) {
                        case 'half-day':
                            return tour.durationUnit === 'hours' && tour.duration <= 4;
                        case 'full-day':
                            return tour.durationUnit === 'hours' && tour.duration >= 5 && tour.duration <= 8;
                        case 'multi-day':
                            return tour.durationUnit === 'days' && tour.duration >= 2 && tour.duration <= 7;
                        case 'week':
                            return tour.durationUnit === 'days' && tour.duration >= 8;
                        default:
                            return false;
                    }
                });
            });
            console.log('⏰ After duration filter:', filtered.length, 'tours (removed', beforeDurationFilter - filtered.length, ')');
        }

        // Filter by minimum rating
        if (this.filters.minRating > 0) {
            const beforeRatingFilter = filtered.length;
            filtered = filtered.filter(tour => tour.rating >= this.filters.minRating);
            console.log('⭐ After rating filter:', filtered.length, 'tours (removed', beforeRatingFilter - filtered.length, ')');
        }

        // Filter by amenities
        if (this.filters.amenities.length > 0) {
            const beforeAmenityFilter = filtered.length;
            filtered = filtered.filter(tour => 
                this.filters.amenities.every(amenity => tour.amenities.includes(amenity))
            );
            console.log('🎫 After amenity filter:', filtered.length, 'tours (removed', beforeAmenityFilter - filtered.length, ')');
        }

        // Filter by group size
        const beforeGroupFilter = filtered.length;
        filtered = filtered.filter(tour => 
            tour.maxPeople >= this.filters.groupSize[0] && tour.maxPeople <= this.filters.groupSize[1]
        );
        console.log('👥 After group size filter:', filtered.length, 'tours (removed', beforeGroupFilter - filtered.length, ')');

        // Apply sorting
        this.sortTours(filtered);

        this.filteredTours = filtered;
        this.currentPage = 1;
        
        console.log('✅ Filtering complete:');
        console.log('  - Total matching tours:', this.filteredTours.length);
        console.log('  - Total pages:', Math.ceil(this.filteredTours.length / this.toursPerPage));
        console.log('  - Reset to page 1');
        
        this.updateUI();
        this.updateFilterCounts();
    }

    sortTours(tours) {
        const sortMap = {
            'popularity': (a, b) => b.reviewCount - a.reviewCount,
            'pricelowtohigh': (a, b) => a.price - b.price,
            'pricehightolow': (a, b) => b.price - a.price,
            'rating': (a, b) => b.rating - a.rating,
            'duration': (a, b) => {
                const getDurationInHours = (tour) => {
                    return tour.durationUnit === 'days' ? tour.duration * 24 : tour.duration;
                };
                return getDurationInHours(a) - getDurationInHours(b);
            }
        };

        const sortFn = sortMap[this.filters.sortBy] || sortMap['popularity'];
        tours.sort(sortFn);
        
        console.log('📊 Tours sorted by:', this.filters.sortBy);
    }

    clearFilters() {
        console.log('🧹 Clearing all filters...');
        console.log('📋 Previous filter state:', JSON.parse(JSON.stringify(this.filters)));
        
        this.filters = {
            priceRange: [0, 1000],
            tourTypes: [],
            durations: [],
            minRating: 0,
            amenities: [],
            groupSize: [1, 20],
            sortBy: 'popularity'
        };

        // Reset UI elements
        document.getElementById('priceRange').value = 500;
        document.getElementById('groupSize').value = 10;
        
        document.querySelectorAll('.checkbox-input').forEach(cb => cb.checked = false);
        document.querySelectorAll('.toggle-switch').forEach(toggle => toggle.classList.remove('active'));
        
        const ratingOptions = document.querySelectorAll('.rating-option');
        ratingOptions.forEach(opt => opt.classList.remove('active'));
        if (ratingOptions.length > 0) ratingOptions[0].classList.add('active');

        document.querySelector('.sort-select').value = 'Popularity';

        this.updatePriceDisplay(500);
        this.updateGroupSizeDisplay(10);
        
        console.log('✅ All filters cleared');
        console.log('📋 New filter state:', this.filters);
        
        this.applyFilters();
    }

    // UI Update Methods
    updateUI() {
        console.log('🖼️ Updating UI components...');
        this.updateResultsHeader();
        this.updateResultsGrid();
        this.updatePagination();
        console.log('✅ UI update complete');
    }

    updateResultsHeader() {
        const titleElement = document.querySelector('.results-title-sidebar');
        const countElement = document.querySelector('.results-count-sidebar');
        
        if (titleElement) {
            titleElement.textContent = `${this.filteredTours.length} Tours Found`;
        }
        
        if (countElement) {
            countElement.textContent = `Showing results for "Allentown, New Mexico" on "04 Aug, 2022"`;
        }
        
        console.log('📊 Results header updated:', this.filteredTours.length, 'tours found');
    }

    updateResultsGrid() {
        const grid = document.querySelector('.results-grid-2col');
        if (!grid) return;

        const startIndex = (this.currentPage - 1) * this.toursPerPage;
        const endIndex = startIndex + this.toursPerPage;
        const toursToShow = this.filteredTours.slice(startIndex, endIndex);

        console.log('🎯 Updating results grid:');
        console.log('  - Page:', this.currentPage);
        console.log('  - Start index:', startIndex);
        console.log('  - End index:', endIndex);
        console.log('  - Tours to show:', toursToShow.length);

        grid.innerHTML = toursToShow.map(tour => this.createTourCard(tour)).join('');
        lucide.createIcons();
    }

    createTourCard(tour) {
        const durationText = tour.durationUnit === 'days' ? 
            `${tour.duration} ${tour.duration === 1 ? 'day' : 'days'}` : 
            `${tour.duration} ${tour.duration === 1 ? 'hour' : 'hours'}`;

        const badgeHtml = tour.badge ? `<div class="result-card-badge">${tour.badge}</div>` : '';
        const featuresHtml = tour.features.map(feature => 
            `<div class="result-card-feature">
                <i data-lucide="${this.getFeatureIcon(feature)}" class="w-3 h-3"></i>
                <span>${feature}</span>
            </div>`
        ).join('');

        return `
            <div class="result-card">
                <div class="result-card-image">
                    <img src="${tour.image}" alt="${tour.title}">
                    ${badgeHtml}
                    <button class="result-card-favorite">
                        <i data-lucide="heart" class="w-4 h-4"></i>
                    </button>
                </div>
                <div class="result-card-content">
                    <h3 class="result-card-title">${tour.title}</h3>
                    <div class="result-card-location">
                        <i data-lucide="map-pin" class="w-4 h-4"></i>
                        <span>${tour.location}</span>
                    </div>
                    <div class="result-card-features">
                        <div class="result-card-feature">
                            <i data-lucide="clock" class="w-3 h-3"></i>
                            <span>${durationText}</span>
                        </div>
                        <div class="result-card-feature">
                            <i data-lucide="users" class="w-3 h-3"></i>
                            <span>Max ${tour.maxPeople} people</span>
                        </div>
                        ${featuresHtml}
                    </div>
                    <div class="result-card-footer">
                        <div class="result-card-rating">
                            <i data-lucide="star" class="star-filled"></i>
                            <span class="text-sm font-semibold text-secondary">${tour.rating}</span>
                            <span class="text-xs text-gray">(${tour.reviewCount})</span>
                        </div>
                        <div class="result-card-price">
                            <div class="result-card-price-amount">$${tour.price}</div>
                            <div class="result-card-price-duration">per person</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getFeatureIcon(feature) {
        const iconMap = {
            'Free cancellation': 'shield-check',
            'Meals included': 'utensils',
            'Photo guide': 'camera',
            'Breakfast included': 'coffee',
            'Transportation': 'car',
            'Instant booking': 'zap'
        };
        return iconMap[feature] || 'check';
    }

    updatePagination() {
        const totalPages = Math.ceil(this.filteredTours.length / this.toursPerPage);
        const pagination = document.querySelector('.pagination');
        
        console.log('📄 Updating pagination:');
        console.log('  - Total tours:', this.filteredTours.length);
        console.log('  - Tours per page:', this.toursPerPage);
        console.log('  - Total pages:', totalPages);
        console.log('  - Current page:', this.currentPage);
        
        if (!pagination || totalPages <= 1) {
            if (pagination) pagination.style.display = 'none';
            console.log('  - Pagination hidden (≤1 page)');
            return;
        }
        
        pagination.style.display = 'flex';
        
        let paginationHTML = '';
        
        // Previous button
        paginationHTML += `
            <a href="#" class="pagination-arrow ${this.currentPage === 1 ? 'pagination-btn-disabled' : ''}">
                <i data-lucide="chevron-left" class="w-4 h-4"></i>
            </a>
        `;
        
        // Page numbers
        for (let i = 1; i <= Math.min(totalPages, 5); i++) {
            paginationHTML += `
                <a href="#" class="pagination-btn ${i === this.currentPage ? 'pagination-btn-active' : 'pagination-btn-default'}">
                    ${i}
                </a>
            `;
        }
        
        // Dots and last page if needed
        if (totalPages > 5) {
            paginationHTML += `<span class="pagination-dots">...</span>`;
            paginationHTML += `
                <a href="#" class="pagination-btn pagination-btn-default">${totalPages}</a>
            `;
        }
        
        // Next button
        paginationHTML += `
            <a href="#" class="pagination-arrow ${this.currentPage === totalPages ? 'pagination-btn-disabled' : ''}">
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </a>
        `;
        
        pagination.innerHTML = paginationHTML;
        lucide.createIcons();
        console.log('✅ Pagination updated');
    }

    updateFilterCounts() {
        console.log('🔢 Updating filter counts...');
        
        // Update tour type counts
        const typeCountMap = {
            'adventure': 0,
            'cultural': 0,
            'relaxation': 0,
            'wildlife': 0,
            'photography': 0
        };

        this.tours.forEach(tour => {
            tour.type.forEach(type => {
                if (typeCountMap.hasOwnProperty(type)) {
                    typeCountMap[type]++;
                }
            });
        });

        const checkboxItems = document.querySelectorAll('.checkbox-item');
        const typeOrder = ['adventure', 'cultural', 'relaxation', 'wildlife', 'photography'];
        
        checkboxItems.forEach((item, index) => {
            const countSpan = item.querySelector('.checkbox-count');
            if (countSpan && typeOrder[index]) {
                countSpan.textContent = typeCountMap[typeOrder[index]];
            }
        });
        
        console.log('📊 Filter counts updated:', typeCountMap);
    }

    updatePriceDisplay(value) {
        const priceValues = document.querySelector('#priceRange').parentElement.querySelector('.range-values');
        if (priceValues) {
            priceValues.children[1].textContent = '$' + value;
        }
    }

    updateGroupSizeDisplay(value) {
        const groupValues = document.querySelector('#groupSize').parentElement.querySelector('.range-values');
        if (groupValues) {
            groupValues.children[1].textContent = value + (value === 20 ? '+ people' : ' people');
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌟 DOM loaded, initializing Tour Filter App...');
    new TourFilterApp();
}); 