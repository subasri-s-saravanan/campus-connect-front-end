// Get profile pic and dropdown menu
const profilePic = document.getElementById('profilePic');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle dropdown visibility when profile image is clicked
profilePic.addEventListener('click', function() {
  dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});

// Close dropdown when clicked outside of the menu
window.addEventListener('click', function(event) {
  if (!profilePic.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = 'none';
  }
});
