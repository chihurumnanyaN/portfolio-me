const seeMoreBtn = document.querySelector('.see-more-btn');
const moreText = document.querySelector('.more-text');
const textContent = document.querySelector('.text-content');

seeMoreBtn.addEventListener('click', () => {
  if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'inline';  /* Show the extra text */
    seeMoreBtn.textContent = 'See Less';  /* Change button text to "See Less" */
    textContent.style.maxHeight = 'none';  /* Remove the height limit */
  } else {
    moreText.style.display = 'none';  /* Hide the extra text */
    seeMoreBtn.textContent = 'See More';  /* Change button text back to "See More" */
    textContent.style.maxHeight = '100px';  /* Restore the height limit */
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('showMore');
    const showLessBtn = document.getElementById('showLess');
    const secondSection = document.querySelector('.second-section');

    // Show more images (display the second section)
    showMoreBtn.addEventListener('click', () => {
        secondSection.style.display = 'flex';  // Show the rest of the images
        showMoreBtn.style.display = 'none';    // Hide "Show More" button
        showLessBtn.style.display = 'block';   // Show "Show Less" button
    });

    // Show less images (hide the second section)
    showLessBtn.addEventListener('click', () => {
        secondSection.style.display = 'none';  // Hide the rest of the images
        showMoreBtn.style.display = 'block';   // Show "Show More" button
        showLessBtn.style.display = 'none';    // Hide "Show Less" button
    });
});



// Get references to elements
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

// Toggle the "active" class on the navbar when the hamburger icon is clicked
hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


