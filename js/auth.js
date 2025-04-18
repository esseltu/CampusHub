let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (email && password) {
                currentUser = { email, name: email.split('@')[0] };
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                alert('Login successful!');
                window.location.href = 'index.html';
            }
        });
    }
    
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            currentUser = null;
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }
});

function updateAuthUI() {
    const userDropdown = document.getElementById('userDropdown');
    if (!userDropdown) return;
    
    if (currentUser) {
        userDropdown.innerHTML = `
            <a href="user-profile.html"><i class="fas fa-user"></i> ${currentUser.name}</a>
            <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a>
        `;
    } else {
        userDropdown.innerHTML = `
            <a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>
        `;
    }
}