 const appState = {
            currentUser: null,
            currentPage: 'home',
            isHotelOwner: false,
            language: 'en',
            hotels: [
                {
                    id: 1,
                    name: "Booking Downtown Hotel",
                    location: "New York, NY",
                    address: "123 Booking Street, New York, NY 10001",
                    lat: 40.7128,
                    lng: -74.0060,
                    ownerId: 3,
                    rooms: [101, 102, 103, 104]
                },
                {
                    id: 2,
                    name: "Booking Beach Resort",
                    location: "Miami, FL",
                    address: "456 Beach Avenue, Miami, FL 33139",
                    lat: 25.7617,
                    lng: -80.1918,
                    ownerId: 3,
                    rooms: [201, 202]
                },
                {
                    id: 3,
                    name: "Booking Mountain Lodge",
                    location: "Denver, CO",
                    address: "789 Mountain Road, Denver, CO 80202",
                    lat: 39.7392,
                    lng: -104.9903,
                    ownerId: 4,
                    rooms: [301, 302]
                }
            ],
            rooms: [
                {
                    id: 101,
                    hotelId: 1,
                    name: "Deluxe King Room",
                    type: "deluxe",
                    price: 299,
                    capacity: 2,
                    amenities: ["Free WiFi", "TV", "AC", "Mini Bar", "Breakfast"],
                    description: "Spacious room with king bed and city view",
                    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    status: "available"
                },
                {
                    id: 102,
                    hotelId: 1,
                    name: "Executive Suite",
                    type: "suite",
                    price: 459,
                    capacity: 3,
                    amenities: ["Free WiFi", "Smart TV", "AC", "Kitchenette", "Jacuzzi"],
                    description: "Luxury suite with separate living area",
                    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    status: "available"
                },
                {
                    id: 103,
                    hotelId: 1,
                    name: "Family Room",
                    type: "suite",
                    price: 399,
                    capacity: 4,
                    amenities: ["Free WiFi", "TV", "AC", "Extra Bed", "Balcony"],
                    description: "Perfect for families with children",
                    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    status: "available"
                },
                {
                    id: 104,
                    hotelId: 1,
                    name: "Standard Single Room",
                    type: "single",
                    price: 149,
                    capacity: 1,
                    amenities: ["Free WiFi", "TV", "AC"],
                    description: "Comfortable single room for solo travelers",
                    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    status: "available"
                },
                {
                    id: 201,
                    hotelId: 2,
                    name: "Ocean View Room",
                    type: "double",
                    price: 349,
                    capacity: 2,
                    amenities: ["Free WiFi", "TV", "AC", "Balcony", "Beach Access"],
                    description: "Beautiful ocean view with private balcony",
                    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    status: "available"
                },
                {
                    id: 202,
                    hotelId: 2,
                    name: "Beachfront Suite",
                    type: "suite",
                    price: 599,
                    capacity: 3,
                    amenities: ["Free WiFi", "TV", "AC", "Private Pool", "Beach Front"],
                    description: "Luxury suite with direct beach access",
                    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    status: "booked"
                },
                {
                    id: 301,
                    hotelId: 3,
                    name: "Mountain View Room",
                    type: "single",
                    price: 199,
                    capacity: 1,
                    amenities: ["Free WiFi", "TV", "Fireplace", "Mountain View"],
                    description: "Cozy room with stunning mountain view",
                    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    status: "available"
                },
                {
                    id: 302,
                    hotelId: 3,
                    name: "Mountain Lodge Suite",
                    type: "suite",
                    price: 399,
                    capacity: 4,
                    amenities: ["Free WiFi", "TV", "Fireplace", "Kitchen", "Balcony"],
                    description: "Large suite perfect for families or groups",
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    status: "available"
                }
            ],
            bookings: [],
            users: [
                { id: 1, name: "John Doe", email: "john@booking.com", password: "john123", role: "customer", phone: "0987654321" },
                { id: 2, name: "Hotel Owner", email: "owner@booking.com", password: "owner123", role: "hotel_owner", phone: "1112223333", hotelIds: [1, 2] },
                { id: 3, name: "Mountain Lodge Owner", email: "mountain@booking.com", password: "owner123", role: "hotel_owner", phone: "4445556666", hotelIds: [3] }
            ],
            notifications: [
                { id: 1, userId: 1, type: "welcome", title: "Welcome to Booking.com!", message: "Thank you for registering with us.", date: "2023-12-01", read: true },
                { id: 2, userId: 1, type: "promotion", title: "Special Offer: 20% Off", message: "Book your next stay within 30 days and get 20% discount.", date: "2023-12-05", read: false }
            ]
        };

        document.addEventListener('DOMContentLoaded', function() {
            initApp();
            setupEventListeners();
            loadRooms();
            
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                const user = JSON.parse(savedUser);
                loginUser(user);
            }
        });

        function initApp() {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            document.getElementById('checkin').valueAsDate = today;
            document.getElementById('checkout').valueAsDate = tomorrow;
            
            const savedBookings = localStorage.getItem('bookings');
            if (savedBookings) {
                appState.bookings = JSON.parse(savedBookings);
            }
            
            const savedUsers = localStorage.getItem('users');
            if (savedUsers) {
                appState.users = JSON.parse(savedUsers);
            }
            
            const savedRooms = localStorage.getItem('rooms');
            if (savedRooms) {
                appState.rooms = JSON.parse(savedRooms);
            }
        
            document.getElementById('reg-role').addEventListener('change', function() {
                const hotelInfoGroup = document.getElementById('hotel-info-group');
                hotelInfoGroup.style.display = this.value === 'hotel_owner' ? 'block' : 'none';
            });
        }

        function setupEventListeners() {
            document.addEventListener('click', function(e) {
                if (e.target.matches('.nav-links a, [data-page]')) {
                    e.preventDefault();
                    const page = e.target.getAttribute('data-page');
                    if (page) navigateToPage(page);
                }
                
                if (e.target.matches('[data-hotel-owner]')) {
                    const section = e.target.getAttribute('data-hotel-owner');
                    loadHotelOwnerSection(section);
                }
                
                if (e.target.matches('[data-dashboard]')) {
                    e.preventDefault();
                    const section = e.target.getAttribute('data-dashboard');
                    loadDashboardSection(section);
                    
                    document.querySelectorAll('[data-dashboard]').forEach(l => {
                        l.classList.remove('active');
                    });
                    e.target.classList.add('active');
                }
                
                if (e.target.matches('.lang-btn')) {
                    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    appState.language = e.target.getAttribute('data-lang');
                    updateLanguage();
                }
                
                if (e.target.matches('.payment-method') || e.target.closest('.payment-method')) {
                    const method = e.target.closest('.payment-method');
                    document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
                    method.classList.add('active');
          
                    document.querySelectorAll('.payment-form-content').forEach(f => f.classList.add('hidden'));
                    const methodType = method.getAttribute('data-method');
                    document.getElementById(`${methodType}-form`).classList.remove('hidden');
                }
            });
            
            document.getElementById('search-hotels-btn').addEventListener('click', function(e) {
                e.preventDefault();
                navigateToPage('search');
            });
            
            document.getElementById('login-btn').addEventListener('click', () => openModal('login'));
            document.getElementById('register-btn').addEventListener('click', () => openModal('register'));
            document.getElementById('logout-btn').addEventListener('click', logoutUser);
            document.getElementById('show-register').addEventListener('click', (e) => {
                e.preventDefault();
                closeModal('login');
                openModal('register');
            });
            
            document.getElementById('search-form').addEventListener('submit', handleSearch);
            document.getElementById('login-form').addEventListener('submit', handleLogin);
            document.getElementById('register-form').addEventListener('submit', handleRegister);
            document.getElementById('room-management-form').addEventListener('submit', handleSaveRoom);
            document.getElementById('notification-form').addEventListener('submit', handleSendNotification);
            
            document.querySelectorAll('.close-modal').forEach(btn => {
                btn.addEventListener('click', function() {
                    const modal = this.getAttribute('data-modal');
                    closeModal(modal);
                });
            });
            
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        const modalId = this.id.replace('-modal', '');
                        closeModal(modalId);
                    }
                });
            });
            
            document.getElementById('confirm-payment').addEventListener('click', handlePayment);
            document.getElementById('delete-room-btn').addEventListener('click', handleDeleteRoom);
        }

        function navigateToPage(page) {
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            const pageSection = document.getElementById(`${page}-section`);
            if (pageSection) {
                pageSection.classList.remove('hidden');
                appState.currentPage = page;
                
                const navLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
                if (navLink) {
                    navLink.classList.add('active');
                }
                
                if (page === 'dashboard') {
                    loadDashboard();
                } else if (page === 'hotel-owner') {
                    loadHotelOwnerSection('rooms');
                } else if (page === 'search') {
                    loadRooms();
                }
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const role = document.getElementById('login-role').value;
            
            const user = appState.users.find(u => u.email === email && u.password === password && u.role === role);
            
            if (user) {
                loginUser(user);
                closeModal('login');
                showNotification('Login successful!', 'success');
                
                sendWelcomeNotification(user);
            } else {
                showNotification('Invalid credentials or role', 'error');
            }
        }

        function handleRegister(e) {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const phone = document.getElementById('reg-phone').value;
            const role = document.getElementById('reg-role').value;
            const hotelName = document.getElementById('hotel-name').value;
            const hotelAddress = document.getElementById('hotel-address').value;
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return;
            }
            
            if (appState.users.find(u => u.email === email)) {
                showNotification('User with this email already exists', 'error');
                return;
            }
            
            const newUser = {
                id: appState.users.length + 1,
                name,
                email,
                phone,
                password,
                role: role
            };
            
            if (role === 'hotel_owner') {
                newUser.hotelIds = [];
                
                if (hotelName && hotelAddress) {
                    const newHotel = {
                        id: appState.hotels.length + 1,
                        name: hotelName,
                        location: hotelAddress.split(',')[1]?.trim() || hotelAddress,
                        address: hotelAddress,
                        lat: 30.0444 + (Math.random() - 0.5) * 0.1,
                        lng: 31.2357 + (Math.random() - 0.5) * 0.1,
                        ownerId: newUser.id,
                        rooms: []
                    };
                    
                    appState.hotels.push(newHotel);
                    newUser.hotelIds = [newHotel.id];
                }
            }
            
            appState.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(appState.users));
            
            loginUser(newUser);
            closeModal('register');
            showNotification('Registration successful!', 'success');
        }

        function loginUser(user) {
            appState.currentUser = user;
            appState.isHotelOwner = user.role === 'hotel_owner';
            
            document.getElementById('auth-buttons').classList.add('hidden');
            document.getElementById('user-menu').classList.remove('hidden');
            document.getElementById('user-display-name').textContent = user.name;
            
            const roleBadge = document.getElementById('user-role-badge');
            roleBadge.textContent = user.role;
            roleBadge.className = 'user-role-badge ';
            if (user.role === 'customer') roleBadge.classList.add('role-customer');
            else if (user.role === 'hotel_owner') roleBadge.classList.add('role-hotel-owner');
            
            if (appState.isHotelOwner) {
                document.getElementById('hotel-owner-link').classList.remove('hidden');
            } else {
                document.getElementById('hotel-owner-link').classList.add('hidden');
            }
            
            document.getElementById('dashboard-link').classList.remove('hidden');
            
            localStorage.setItem('currentUser', JSON.stringify(user));
        }

        function logoutUser() {
            appState.currentUser = null;
            appState.isHotelOwner = false;
            
            document.getElementById('auth-buttons').classList.remove('hidden');
            document.getElementById('user-menu').classList.add('hidden');
            document.getElementById('hotel-owner-link').classList.add('hidden');
            document.getElementById('dashboard-link').classList.add('hidden');
            
            navigateToPage('home');
            localStorage.removeItem('currentUser');
            showNotification('Logged out successfully', 'success');
        }

        function loadRooms() {
            const container = document.getElementById('rooms-container');
            container.innerHTML = '';
            
            appState.rooms.forEach(room => {
                if (room.status === 'available') {
                    const hotel = appState.hotels.find(h => h.id === room.hotelId);
                    const roomCard = createRoomCard(room, hotel);
                    container.appendChild(roomCard);
                }
            });
            
            setTimeout(() => {
                document.querySelectorAll('.book-room-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        if (!appState.currentUser) {
                            openModal('login');
                            return;
                        }
                        const roomId = parseInt(this.getAttribute('data-room-id'));
                        openBookingModal(roomId);
                    });
                });
            }, 100);
        }

        function createRoomCard(room, hotel) {
            const roomCard = document.createElement('div');
            roomCard.className = 'room-card fade-in';
            
            const statusClass = room.status === 'available' ? 'status-available' : 'status-booked';
            const statusText = room.status === 'available' ? 'Available' : 'Booked';
            
            roomCard.innerHTML = `
                <img src="${room.image}" alt="${room.name}" class="room-img">
                <div class="room-info">
                    <div class="d-flex justify-between align-center">
                        <h4 class="room-title">${room.name}</h4>
                        <span class="status-badge ${statusClass}">${statusText}</span>
                    </div>
                    <p><i class="fas fa-map-marker-alt"></i> ${hotel.name}, ${hotel.location}</p>
                    <div class="room-features">
                        <span class="room-feature">${room.type}</span>
                        <span class="room-feature">${room.capacity} Guests</span>
                        ${room.amenities.slice(0, 2).map(amenity => `<span class="room-feature">${amenity}</span>`).join('')}
                    </div>
                    <p>${room.description}</p>
                    <div class="d-flex justify-between align-center">
                        <div>
                            <div class="room-price">$${room.price} <span>per night</span></div>
                            <p><i class="fas fa-user-friends"></i> ${room.capacity} guests</p>
                        </div>
                        <button class="btn btn-primary book-room-btn" data-room-id="${room.id}" ${room.status !== 'available' ? 'disabled' : ''}>
                            ${room.status === 'available' ? 'Book Now' : 'Booked'}
                        </button>
                    </div>
                </div>
            `;
            return roomCard;
        }

        function handleSearch(e) {
            e.preventDefault();
            navigateToPage('search');
            
            const checkin = document.getElementById('checkin').value;
            const checkout = document.getElementById('checkout').value;
            const guests = parseInt(document.getElementById('guests').value) || 0;
            const roomType = document.getElementById('room-type').value;
            const minPrice = parseInt(document.getElementById('min-price').value) || 0;
            const maxPrice = parseInt(document.getElementById('max-price').value) || 9999;
            
            const container = document.getElementById('rooms-container');
            container.innerHTML = '';
            
            let filteredRooms = appState.rooms.filter(room => {
             
                if (roomType !== 'all' && room.type !== roomType) return false;
                
                if (room.price < minPrice || room.price > maxPrice) return false;
               
                if (guests > 0 && room.capacity < guests) return false;
                
                const roomBookings = appState.bookings.filter(b => 
                    b.roomId === room.id && 
                    b.status === 'confirmed'
                );
          
                for (let booking of roomBookings) {
                    if ((checkin >= booking.checkin && checkin < booking.checkout) ||
                        (checkout > booking.checkin && checkout <= booking.checkout)) {
                        return false;
                    }
                }
                
                return true;
            });
            
            if (filteredRooms.length === 0) {
                container.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 50px; background: #f8f9fa; border-radius: 8px;">
                        <i class="fas fa-search fa-3x" style="color: #ccc; margin-bottom: 20px;"></i>
                        <h3 style="color: #666; margin-bottom: 15px;">No rooms found</h3>
                        <p style="color: #888; margin-bottom: 20px;">Try adjusting your search filters.</p>
                        <button class="btn btn-primary" onclick="clearSearchFilters()">
                            Clear Filters
                        </button>
                    </div>
                `;
                return;
            }
            
            const searchSummary = document.createElement('div');
            searchSummary.style.cssText = 'grid-column: 1 / -1; background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px;';
            searchSummary.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong style="color: var(--primary);">Search Results (${filteredRooms.length} rooms found)</strong>
                        <div style="display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap;">
                            ${roomType !== 'all' ? `
                                <span style="background: white; padding: 5px 10px; border-radius: 15px; font-size: 0.9rem;">
                                    <i class="fas fa-bed"></i> ${roomType}
                                </span>
                            ` : ''}
                            ${guests > 0 ? `
                                <span style="background: white; padding: 5px 10px; border-radius: 15px; font-size: 0.9rem;">
                                    <i class="fas fa-user-friends"></i> ${guests} Guest${guests > 1 ? 's' : ''}
                                </span>
                            ` : ''}
                            <span style="background: white; padding: 5px 10px; border-radius: 15px; font-size: 0.9rem;">
                                <i class="fas fa-dollar-sign"></i> $${minPrice} - $${maxPrice}
                            </span>
                        </div>
                    </div>
                    <button class="btn btn-outline btn-sm" onclick="clearSearchFilters()">
                        Clear Filters
                    </button>
                </div>
            `;
            container.appendChild(searchSummary);
           
            filteredRooms.forEach(room => {
                const hotel = appState.hotels.find(h => h.id === room.hotelId);
                const roomCard = createRoomCard(room, hotel);
                container.appendChild(roomCard);
            });
            
            setTimeout(() => {
                document.querySelectorAll('.book-room-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        if (!appState.currentUser) {
                            openModal('login');
                            return;
                        }
                        const roomId = parseInt(this.getAttribute('data-room-id'));
                        openBookingModal(roomId);
                    });
                });
            }, 100);
        }

        window.clearSearchFilters = function() {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            document.getElementById('checkin').valueAsDate = today;
            document.getElementById('checkout').valueAsDate = tomorrow;
            document.getElementById('guests').value = '0';
            document.getElementById('room-type').value = 'all';
            document.getElementById('min-price').value = '';
            document.getElementById('max-price').value = '';
            
            loadRooms();
            showNotification('Filters cleared', 'info');
        };

        function openBookingModal(roomId) {
            const room = appState.rooms.find(r => r.id === roomId);
            const hotel = appState.hotels.find(h => h.id === room.hotelId);
            
            const checkin = document.getElementById('checkin')?.value || new Date().toISOString().split('T')[0];
            const checkout = document.getElementById('checkout')?.value || new Date(Date.now() + 86400000).toISOString().split('T')[0];
            const guests = document.getElementById('guests')?.value || '2';
            
            const checkinDate = new Date(checkin);
            const checkoutDate = new Date(checkout);
            const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
            const total = room.price * nights;
            const tax = total * 0.1;
            const grandTotal = total + tax;
            
            document.getElementById('booking-details').innerHTML = `
                <div class="mb-4">
                    <h4>Booking Details</h4>
                    <p><strong>Room:</strong> ${room.name}</p>
                    <p><strong>Hotel:</strong> ${hotel.name}</p>
                    <p><strong>Address:</strong> ${hotel.address}</p>
                    <p><strong>Check-in:</strong> ${checkin}</p>
                    <p><strong>Check-out:</strong> ${checkout}</p>
                    <p><strong>Nights:</strong> ${nights}</p>
                    <p><strong>Guests:</strong> ${guests}</p>
                </div>
                
                <div class="mb-4">
                    <h4>Price Summary</h4>
                    <p>Room Rate: $${room.price} x ${nights} nights = $${total}</p>
                    <p>Tax (10%): $${tax.toFixed(2)}</p>
                    <h4>Total: $${grandTotal.toFixed(2)}</h4>
                </div>
                
                <button class="btn btn-success w-100" id="proceed-to-payment" data-room-id="${roomId}" data-total="${grandTotal}" data-checkin="${checkin}" data-checkout="${checkout}" data-nights="${nights}" data-guests="${guests}">
                    Proceed to Payment
                </button>
            `;
            
            openModal('booking');
            
            setTimeout(() => {
                const proceedBtn = document.getElementById('proceed-to-payment');
                if (proceedBtn) {
                    proceedBtn.addEventListener('click', function() {
                        const roomId = parseInt(this.getAttribute('data-room-id'));
                        const total = parseFloat(this.getAttribute('data-total'));
                        const checkin = this.getAttribute('data-checkin');
                        const checkout = this.getAttribute('data-checkout');
                        const nights = parseInt(this.getAttribute('data-nights'));
                        const guests = this.getAttribute('data-guests');
                        
                        openPaymentModal(roomId, total, checkin, checkout, nights, guests);
                    });
                }
            }, 100);
        }

        function openPaymentModal(roomId, total, checkin, checkout, nights, guests) {
            document.getElementById('payment-amount').value = `$${total.toFixed(2)}`;
            closeModal('booking');
            openModal('payment');
            
            document.getElementById('confirm-payment').setAttribute('data-booking-data', JSON.stringify({
                roomId,
                total,
                checkin,
                checkout,
                nights,
                guests
            }));
        }

        function handlePayment() {
            const bookingData = JSON.parse(document.getElementById('confirm-payment').getAttribute('data-booking-data'));
            const paymentMethod = document.querySelector('.payment-method.active').getAttribute('data-method');
            
            const newBooking = {
                id: appState.bookings.length + 1,
                userId: appState.currentUser.id,
                roomId: bookingData.roomId,
                checkin: bookingData.checkin,
                checkout: bookingData.checkout,
                nights: bookingData.nights,
                guests: bookingData.guests,
                total: bookingData.total,
                paymentMethod: paymentMethod,
                status: 'confirmed',
                date: new Date().toISOString().split('T')[0]
            };
            
            appState.bookings.push(newBooking);
            localStorage.setItem('bookings', JSON.stringify(appState.bookings));
            
            const roomIndex = appState.rooms.findIndex(r => r.id === bookingData.roomId);
            if (roomIndex !== -1) {
                appState.rooms[roomIndex].status = 'booked';
                localStorage.setItem('rooms', JSON.stringify(appState.rooms));
            }
            
            closeModal('payment');
            showNotification('Booking confirmed! Payment successful.', 'success');
            
            sendBookingConfirmation(newBooking);
            
            scheduleReminders(newBooking);
            
            navigateToPage('dashboard');
        }

        function loadDashboard() {
            if (!appState.currentUser) {
                showNotification('Please login to access dashboard', 'error');
                navigateToPage('home');
                return;
            }
            
            const dashboardContainer = document.getElementById('dashboard');
            dashboardContainer.innerHTML = `
                <div class="dashboard">
                    <div class="sidebar">
                        <ul class="sidebar-menu">
                            <li><a href="#" class="active" data-dashboard="bookings">My Bookings</a></li>
                            <li><a href="#" data-dashboard="profile">Profile Settings</a></li>
                            <li><a href="#" data-dashboard="notifications">Notifications</a></li>
                            <li><a href="#" data-dashboard="payment-methods">Payment Methods</a></li>
                        </ul>
                    </div>
                    <div class="dashboard-content" id="dashboard-content">
                    </div>
                </div>
            `;
            
            loadDashboardSection('bookings');
        }

        function loadDashboardSection(section) {
            const content = document.getElementById('dashboard-content');
            if (!content) return;
            
            if (section === 'bookings') {
                const userBookings = appState.bookings.filter(b => b.userId === appState.currentUser.id);
                const today = new Date().toISOString().split('T')[0];
                
                const currentBookings = userBookings.filter(b => b.checkout >= today);
                const pastBookings = userBookings.filter(b => b.checkout < today);
                
                let html = '<h3>My Bookings</h3>';
                
                html += '<h4 class="mt-4">Current Bookings</h4>';
                if (currentBookings.length === 0) {
                    html += '<p>No current bookings.</p>';
                } else {
                    html += '<div style="overflow-x: auto;"><table class="data-table"><thead><tr><th>ID</th><th>Room</th><th>Check-in</th><th>Check-out</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead><tbody>';
                    
                    currentBookings.forEach(booking => {
                        const room = appState.rooms.find(r => r.id === booking.roomId);
                        const hotel = appState.hotels.find(h => h.id === room.hotelId);
                        
                        html += `
                            <tr>
                                <td>#${booking.id}</td>
                                <td>${room.name}<br><small>${hotel.name}</small></td>
                                <td>${booking.checkin}</td>
                                <td>${booking.checkout}</td>
                                <td>$${booking.total.toFixed(2)}</td>
                                <td><span class="status-badge ${booking.status === 'confirmed' ? 'status-available' : 'status-booked'}">${booking.status}</span></td>
                                <td>
                                    <button class="btn btn-outline btn-sm" onclick="viewBookingDetails(${booking.id})">View</button>
                                    ${booking.status === 'confirmed' && booking.checkin > today ? 
                                        `<button class="btn btn-danger btn-sm" onclick="cancelBooking(${booking.id})">Cancel</button>` : ''}
                                </td>
                            </tr>
                        `;
                    });
                    
                    html += '</tbody></table></div>';
                }
                
                html += '<h4 class="mt-4">Past Bookings</h4>';
                if (pastBookings.length === 0) {
                    html += '<p>No past bookings.</p>';
                } else {
                    html += '<div style="overflow-x: auto;"><table class="data-table"><thead><tr><th>ID</th><th>Room</th><th>Check-in</th><th>Check-out</th><th>Total</th><th>Status</th></tr></thead><tbody>';
                    
                    pastBookings.forEach(booking => {
                        const room = appState.rooms.find(r => r.id === booking.roomId);
                        const hotel = appState.hotels.find(h => h.id === room.hotelId);
                        
                        html += `
                            <tr>
                                <td>#${booking.id}</td>
                                <td>${room.name}<br><small>${hotel.name}</small></td>
                                <td>${booking.checkin}</td>
                                <td>${booking.checkout}</td>
                                <td>$${booking.total.toFixed(2)}</td>
                                <td><span class="status-badge ${booking.status === 'confirmed' ? 'status-available' : 'status-booked'}">${booking.status}</span></td>
                            </tr>
                        `;
                    });
                    
                    html += '</tbody></table></div>';
                }
                
                content.innerHTML = html;
                
            } else if (section === 'profile') {
                content.innerHTML = `
                    <h3>Profile Settings</h3>
                    <form id="profile-form">
                        <div class="form-group mb-3">
                            <label for="profile-name">Full Name</label>
                            <input type="text" id="profile-name" class="form-control" value="${appState.currentUser.name}">
                        </div>
                        <div class="form-group mb-3">
                            <label for="profile-email">Email Address</label>
                            <input type="email" id="profile-email" class="form-control" value="${appState.currentUser.email}" readonly>
                        </div>
                        <div class="form-group mb-3">
                            <label for="profile-phone">Phone Number</label>
                            <input type="tel" id="profile-phone" class="form-control" value="${appState.currentUser.phone}">
                        </div>
                        <div class="form-group mb-3">
                            <label for="profile-password">New Password (leave blank to keep current)</label>
                            <input type="password" id="profile-password" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Update Profile</button>
                    </form>
                `;
                
                setTimeout(() => {
                    const profileForm = document.getElementById('profile-form');
                    if (profileForm) {
                        profileForm.addEventListener('submit', function(e) {
                            e.preventDefault();
                            updateUserProfile();
                        });
                    }
                }, 100);
                
            } else if (section === 'notifications') {
                const userNotifications = appState.notifications.filter(n => n.userId === appState.currentUser.id);
                
                content.innerHTML = `
                    <h3>Notifications</h3>
                    <div class="mb-3">
                        <button class="btn btn-outline" onclick="markAllAsRead()">Mark All as Read</button>
                    </div>
                    ${userNotifications.map(notification => `
                        <div class="room-card mb-3 ${notification.read ? '' : 'border-left: 4px solid var(--secondary)'}">
                            <div class="room-info">
                                <div class="d-flex justify-between align-center">
                                    <h4>${notification.title}</h4>
                                    <small>${notification.date}</small>
                                </div>
                                <p>${notification.message}</p>
                                ${!notification.read ? `<button class="btn btn-sm btn-outline" onclick="markAsRead(${notification.id})">Mark as Read</button>` : ''}
                            </div>
                        </div>
                    `).join('')}
                `;
                
            } else if (section === 'payment-methods') {
                content.innerHTML = `
                    <h3>Payment Methods</h3>
                    <p>We support the following payment methods:</p>
                    <div class="rooms-grid">
                        <div class="room-card">
                            <div class="room-info">
                                <h4 class="room-title">Credit/Debit Cards</h4>
                                <p><i class="fab fa-cc-visa"></i> VISA, <i class="fab fa-cc-mastercard"></i> MasterCard</p>
                                <p>Secure payment through encrypted connection</p>
                            </div>
                        </div>
        
                        <div class="room-card">
                            <div class="room-info">
                                <h4 class="room-title">Fawry</h4>
                                <p><i class="fas fa-mobile-alt"></i> Fawry Payment</p>
                                <p>Pay through Fawry outlets or online</p>
                            </div>
                        </div>
                        <div class="room-card">
                            <div class="room-info">
                                <h4 class="room-title">InstaPay</h4>
                                <p><i class="fas fa-bolt"></i> Instant Bank Transfer</p>
                                <p>Real-time bank transfers</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        function loadHotelOwnerSection(section) {
            if (!appState.isHotelOwner) {
                showNotification('Access denied. Hotel owners only.', 'error');
                return;
            }
            
            const content = document.getElementById('hotel-owner-content');
            if (!content) return;
            
            const ownerHotels = appState.hotels.filter(h => h.ownerId === appState.currentUser.id);
            const ownerHotelIds = ownerHotels.map(h => h.id);
            const ownerRooms = appState.rooms.filter(r => ownerHotelIds.includes(r.hotelId));
            
            if (section === 'rooms') {
                content.innerHTML = `
                    <h3>My Hotel Rooms</h3>
                    <button class="btn btn-success mb-3" id="add-owner-room-btn"><i class="fas fa-plus"></i> Add New Room</button>
                    <div style="overflow-x: auto;">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Room Name</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Capacity</th>
                                    <th>Hotel</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${ownerRooms.map(room => {
                                    const hotel = appState.hotels.find(h => h.id === room.hotelId);
                                    return `
                                        <tr>
                                            <td>${room.id}</td>
                                            <td>${room.name}</td>
                                            <td>${room.type}</td>
                                            <td>$${room.price}</td>
                                            <td>${room.capacity}</td>
                                            <td>${hotel.name}</td>
                                            <td>
                                                <span class="status-badge ${room.status === 'available' ? 'status-available' : 'status-booked'}">
                                                    ${room.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button class="btn btn-outline btn-sm" onclick="editRoom(${room.id})">Edit</button>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
                
                setTimeout(() => {
                    const addRoomBtn = document.getElementById('add-owner-room-btn');
                    if (addRoomBtn) {
                        addRoomBtn.addEventListener('click', () => openRoomManagementModal(null, true));
                    }
                }, 100);
                
            } else if (section === 'bookings') {
                const ownerBookings = appState.bookings.filter(booking => {
                    const room = appState.rooms.find(r => r.id === booking.roomId);
                    return ownerHotelIds.includes(room.hotelId);
                });
                
                content.innerHTML = `
                    <h3>My Hotel Bookings</h3>
                    <div style="overflow-x: auto;">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>User</th>
                                    <th>Room</th>
                                    <th>Check-in</th>
                                    <th>Check-out</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${ownerBookings.map(booking => {
                                    const room = appState.rooms.find(r => r.id === booking.roomId);
                                    const user = appState.users.find(u => u.id === booking.userId);
                                    const hotel = appState.hotels.find(h => h.id === room.hotelId);
                                    return `
                                        <tr>
                                            <td>#${booking.id}</td>
                                            <td>${user.name}</td>
                                            <td>${room.name}<br><small>${hotel.name}</small></td>
                                            <td>${booking.checkin}</td>
                                            <td>${booking.checkout}</td>
                                            <td>$${booking.total.toFixed(2)}</td>
                                            <td>${booking.status}</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
                
            } else if (section === 'reports') {
                const ownerBookings = appState.bookings.filter(booking => {
                    const room = appState.rooms.find(r => r.id === booking.roomId);
                    return ownerHotelIds.includes(room.hotelId);
                });
                
                const totalRevenue = ownerBookings.reduce((sum, booking) => sum + booking.total, 0);
                const avgBookingValue = ownerBookings.length > 0 ? totalRevenue / ownerBookings.length : 0;
                const availableRooms = ownerRooms.filter(r => r.status === 'available').length;
                const occupancyRate = ((ownerRooms.length - availableRooms) / ownerRooms.length) * 100;
                
                content.innerHTML = `
                    <h3>My Hotel Reports</h3>
                    <div class="rooms-grid">
                        <div class="room-card">
                            <div class="room-info">
                                <h4>Hotel Revenue</h4>
                                <div class="room-price">$${totalRevenue.toFixed(2)}</div>
                                <p>All time bookings</p>
                            </div>
                        </div>
                        <div class="room-card">
                            <div class="room-info">
                                <h4>Total Bookings</h4>
                                <div class="room-price">${ownerBookings.length}</div>
                                <p>Confirmed reservations</p>
                            </div>
                        </div>
                        <div class="room-card">
                            <div class="room-info">
                                <h4>Average Booking</h4>
                                <div class="room-price">$${avgBookingValue.toFixed(2)}</div>
                                <p>Per reservation</p>
                            </div>
                        </div>
                        <div class="room-card">
                            <div class="room-info">
                                <h4>Occupancy Rate</h4>
                                <div class="room-price">${occupancyRate.toFixed(1)}%</div>
                                <p>Current occupancy</p>
                            </div>
                        </div>
                    </div>
                `;
                
            } else if (section === 'notifications') {
                openNotificationModal(true);
            }
        }

        function openRoomManagementModal(roomId, isOwner = false) {
            if (roomId) {
                const room = appState.rooms.find(r => r.id === roomId);
                document.getElementById('room-id').value = room.id;
                document.getElementById('room-name').value = room.name;
                document.getElementById('room-type-edit').value = room.type;
                document.getElementById('room-price').value = room.price;
                document.getElementById('room-capacity').value = room.capacity;
                document.getElementById('room-description').value = room.description;
                document.getElementById('room-amenities').value = room.amenities.join(', ');
                document.getElementById('room-status').value = room.status;
                document.getElementById('delete-room-btn').classList.remove('hidden');
            } else {
                document.getElementById('room-id').value = '';
                document.getElementById('room-name').value = '';
                document.getElementById('room-type-edit').value = 'single';
                document.getElementById('room-price').value = '';
                document.getElementById('room-capacity').value = '';
                document.getElementById('room-description').value = '';
                document.getElementById('room-amenities').value = '';
                document.getElementById('room-status').value = 'available';
                document.getElementById('delete-room-btn').classList.add('hidden');
            }
            
            openModal('room-management');
        }

        function handleSaveRoom(e) {
            e.preventDefault();
            
            const roomId = document.getElementById('room-id').value;
            const roomName = document.getElementById('room-name').value;
            const roomType = document.getElementById('room-type-edit').value;
            const roomPrice = parseFloat(document.getElementById('room-price').value);
            const roomCapacity = parseInt(document.getElementById('room-capacity').value);
            const roomDescription = document.getElementById('room-description').value;
            const roomAmenities = document.getElementById('room-amenities').value.split(',').map(a => a.trim());
            const roomStatus = document.getElementById('room-status').value;
            
            if (roomId) {
                const roomIndex = appState.rooms.findIndex(r => r.id === parseInt(roomId));
                if (roomIndex !== -1) {
                    appState.rooms[roomIndex].name = roomName;
                    appState.rooms[roomIndex].type = roomType;
                    appState.rooms[roomIndex].price = roomPrice;
                    appState.rooms[roomIndex].capacity = roomCapacity;
                    appState.rooms[roomIndex].description = roomDescription;
                    appState.rooms[roomIndex].amenities = roomAmenities;
                    appState.rooms[roomIndex].status = roomStatus;
                }
            } else {
                const newRoom = {
                    id: appState.rooms.length > 0 ? Math.max(...appState.rooms.map(r => r.id)) + 1 : 101,
                    hotelId: appState.isHotelOwner ? appState.hotels.find(h => h.ownerId === appState.currentUser.id)?.id || 1 : 1,
                    name: roomName,
                    type: roomType,
                    price: roomPrice,
                    capacity: roomCapacity,
                    amenities: roomAmenities,
                    description: roomDescription,
                    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    status: roomStatus
                };
                appState.rooms.push(newRoom);
            }
            
            localStorage.setItem('rooms', JSON.stringify(appState.rooms));
            closeModal('room-management');
            
            if (appState.isHotelOwner) {
                loadHotelOwnerSection('rooms');
            }
            
            loadRooms();
            showNotification('Room saved successfully', 'success');
        }

        function handleDeleteRoom() {
            const roomId = parseInt(document.getElementById('room-id').value);
            const roomIndex = appState.rooms.findIndex(r => r.id === roomId);
            
            if (roomIndex !== -1) {
                appState.rooms.splice(roomIndex, 1);
                localStorage.setItem('rooms', JSON.stringify(appState.rooms));
                closeModal('room-management');
                
                if (appState.isHotelOwner) {
                    loadHotelOwnerSection('rooms');
                }
                
                loadRooms();
                showNotification('Room deleted successfully', 'success');
            }
        }

        function openNotificationModal(isOwner = false) {
            if (isOwner) {
                document.getElementById('notification-type').innerHTML = `
                    <option value="promotion">Promotional Offer</option>
                    <option value="special_offer">Special Offer</option>
                `;
            }
            
            openModal('notification');
        }

        function handleSendNotification(e) {
            e.preventDefault();
            
            const type = document.getElementById('notification-type').value;
            const title = document.getElementById('notification-title').value;
            const message = document.getElementById('notification-message').value;
            
            if (appState.isHotelOwner) {
                const ownerHotelIds = appState.hotels.filter(h => h.ownerId === appState.currentUser.id).map(h => h.id);
                const ownerRoomIds = appState.rooms.filter(r => ownerHotelIds.includes(r.hotelId)).map(r => r.id);
                const hotelBookings = appState.bookings.filter(b => ownerRoomIds.includes(b.roomId));
                const userIds = [...new Set(hotelBookings.map(b => b.userId))];
                
                userIds.forEach(userId => {
                    const notification = {
                        id: appState.notifications.length + 1,
                        userId: userId,
                        type: type,
                        title: title,
                        message: message,
                        date: new Date().toISOString().split('T')[0],
                        read: false
                    };
                    appState.notifications.push(notification);
                });
                
                showNotification(`Notification sent to ${userIds.length} customers`, 'success');
            }
            
            closeModal('notification');
        }

        function sendWelcomeNotification(user) {
            const notification = {
                id: appState.notifications.length + 1,
                userId: user.id,
                type: 'welcome',
                title: 'Welcome to Booking.com!',
                message: 'Thank you for registering with us. Enjoy exclusive member benefits.',
                date: new Date().toISOString().split('T')[0],
                read: false
            };
            appState.notifications.push(notification);
        }

        function sendBookingConfirmation(booking) {
            const notification = {
                id: appState.notifications.length + 1,
                userId: booking.userId,
                type: 'booking_confirmation',
                title: 'Booking Confirmed!',
                message: `Your booking #${booking.id} has been confirmed. Check-in: ${booking.checkin}, Check-out: ${booking.checkout}.`,
                date: new Date().toISOString().split('T')[0],
                read: false
            };
            appState.notifications.push(notification);
            showNotification('Booking confirmation sent', 'info');
        }

        function scheduleReminders(booking) {
            const checkinDate = new Date(booking.checkin);
            const reminderDate = new Date(checkinDate);
            reminderDate.setDate(reminderDate.getDate() - 1);
            
            const checkoutDate = new Date(booking.checkout);
            const checkoutReminderDate = new Date(checkoutDate);
            checkoutReminderDate.setDate(checkoutReminderDate.getDate() - 1);
            
            showNotification('Reminders scheduled for your booking', 'info');
        }

        function openModal(modalId) {
            document.getElementById(`${modalId}-modal`).classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(`${modalId}-modal`).classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function showNotification(message, type = 'info') {
            document.querySelectorAll('.notification').forEach(n => n.remove());
            
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'fadeOut 0.3s ease forwards';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }

        function updateLanguage() {
            if (appState.language === 'ar') {
                document.querySelector('html').setAttribute('dir', 'rtl');
                document.querySelector('.logo span').textContent = 'بوكينج.كوم';
                document.querySelector('.hero h1').textContent = 'ابحث عن إقامتك المثالية';
                document.getElementById('search-hotels-btn').textContent = 'ابحث عن الفنادق الآن';
            } else {
                document.querySelector('html').setAttribute('dir', 'ltr');
                document.querySelector('.logo span').textContent = 'Booking.com';
                document.querySelector('.hero h1').textContent = 'Find Your Perfect Stay';
                document.getElementById('search-hotels-btn').textContent = 'Search Hotels Now';
            }
        }

        function updateUserProfile() {
            const name = document.getElementById('profile-name').value;
            const phone = document.getElementById('profile-phone').value;
            const password = document.getElementById('profile-password').value;
            
            appState.currentUser.name = name;
            appState.currentUser.phone = phone;
            if (password) {
                appState.currentUser.password = password;
            }
            
            const userIndex = appState.users.findIndex(u => u.id === appState.currentUser.id);
            if (userIndex !== -1) {
                appState.users[userIndex] = {...appState.currentUser};
                localStorage.setItem('users', JSON.stringify(appState.users));
                localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
            }
            
            document.getElementById('user-display-name').textContent = name;
            showNotification('Profile updated successfully', 'success');
        }

        window.viewBookingDetails = function(bookingId) {
            const booking = appState.bookings.find(b => b.id === bookingId);
            const room = appState.rooms.find(r => r.id === booking.roomId);
            const hotel = appState.hotels.find(h => h.id === room.hotelId);
            
            alert(`Booking #${booking.id}\n\nRoom: ${room.name}\nHotel: ${hotel.name}\nAddress: ${hotel.address}\nCheck-in: ${booking.checkin}\nCheck-out: ${booking.checkout}\nNights: ${booking.nights}\nGuests: ${booking.guests}\nTotal: $${booking.total.toFixed(2)}\nPayment Method: ${booking.paymentMethod}\nStatus: ${booking.status}`);
        };

        window.cancelBooking = function(bookingId) {
            if (confirm('Are you sure you want to cancel this booking?')) {
                const bookingIndex = appState.bookings.findIndex(b => b.id === bookingId);
                if (bookingIndex !== -1) {
                    appState.bookings[bookingIndex].status = 'cancelled';
                    
                    const roomId = appState.bookings[bookingIndex].roomId;
                    const roomIndex = appState.rooms.findIndex(r => r.id === roomId);
                    if (roomIndex !== -1) {
                        appState.rooms[roomIndex].status = 'available';
                        localStorage.setItem('rooms', JSON.stringify(appState.rooms));
                    }
                    
                    localStorage.setItem('bookings', JSON.stringify(appState.bookings));
                    
                    if (appState.currentPage === 'dashboard') {
                        loadDashboardSection('bookings');
                    }
                    showNotification('Booking cancelled successfully', 'success');
                }
            }
        };

        window.editRoom = function(roomId) {
            openRoomManagementModal(roomId);
        };

        window.markAllAsRead = function() {
            appState.notifications.forEach(n => {
                if (n.userId === appState.currentUser.id) {
                    n.read = true;
                }
            });
            loadDashboardSection('notifications');
            showNotification('All notifications marked as read', 'success');
        };

        window.markAsRead = function(notificationId) {
            const notification = appState.notifications.find(n => n.id === notificationId);
            if (notification) {
                notification.read = true;
                loadDashboardSection('notifications');
            }
        };
   
