// about.js

document.addEventListener('DOMContentLoaded', () => {
    const profilePhoto = document.querySelector('.profile-photo');
    const textContent = document.querySelector('.text-content');

    // Add hover effect on the profile photo
    profilePhoto.addEventListener('mouseover', () => {
        profilePhoto.style.transform = 'scale(1.1)';
    });

    profilePhoto.addEventListener('mouseout', () => {
        profilePhoto.style.transform = 'scale(1)';
    });

    // Add more complex animations if needed
});



    document.addEventListener('DOMContentLoaded', function() {
        var video = document.getElementById('bgVideo');
        video.playbackRate = 0.5; // Adjust the value to slow down the video (0.5 is half speed)
    });
