// Toggle Login Modal
function toggleLogin() {
    const modal = document.getElementById('login-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

// Handle Login/Signup Submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;

    // Basic validation
    if (!username || !role) {
        alert('Please fill out all fields.');
        return;
    }

    // Generate Unique User ID
    const userId = 'ID-' + Math.floor(Math.random() * 100000);

    // Store User Details in LocalStorage
    const user = { username, role, userId };
    localStorage.setItem('user', JSON.stringify(user));

    // Display User Profile
    displayProfile(user);

    // Close Modal
    document.getElementById('login-modal').style.display = 'none';

    // Show Profile Section
    document.getElementById('profile-section').style.display = 'inline-block';
    document.querySelector('.login-btn').style.display = 'none';
});
function toggleProfile() {
    const profileCard = document.getElementById('profile-card');
    const displayStyle = profileCard.style.display === 'block' ? 'none' : 'block';
    profileCard.style.display = displayStyle;
}

// Handle Login/Signup Submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;

    // Basic validation
    if (!username || !role) {
        alert('Please fill out all fields.');
        return;
    }

    // Generate Unique User ID
    const userId = 'ID-' + Math.floor(Math.random() * 100000);

    // Store User Details in LocalStorage
    const user = { username, role, userId };
    localStorage.setItem('user', JSON.stringify(user));

    // Display User Profile
    displayProfile(user);

    // Close Modal
    document.getElementById('login-modal').style.display = 'none';

    // Show Profile Section and Hide Login Button
    document.getElementById('profile-btn').style.display = 'inline-block';
    document.querySelector('.login-btn').style.display = 'none';
});

// Check if User is Already Logged In
document.addEventListener('DOMContentLoaded', function () {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        displayProfile(storedUser);
        document.getElementById('profile-btn').style.display = 'inline-block';
        document.querySelector('.login-btn').style.display = 'none';
    }
});

// Check if User is Already Logged In
document.addEventListener('DOMContentLoaded', function () {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        displayProfile(storedUser);
        document.getElementById('profile-section').style.display = 'inline-block';
        document.querySelector('.login-btn').style.display = 'none';
    }
});
 
function displayProfile(user) {
    document.getElementById('user-name').textContent = `Name: ${user.username}`;
    document.getElementById('user-id').textContent = `ID: ${user.userId}`;
    document.getElementById('user-role').textContent = `Role: ${user.role}`;

    // Generate QR Code
    const qr = new QRious({
        element: document.getElementById('qr-code'),
        value: user.userId,
        value:user.role,
        size: 105
    });

    // Show Profile Card
    document.getElementById('profile-card').style.display = 'none'; // Hide by default, shown on toggle
}

// Logout Function
function logout() {
    // Remove user details from localStorage
    localStorage.removeItem('user');

    // Hide Profile Card and Profile Section
    document.getElementById('profile-card').style.display = 'none';
    document.getElementById('profile-btn').style.display = 'none';

    // Show Login Button
    document.querySelector('.login-btn').style.display = 'inline-block';
}