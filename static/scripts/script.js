// document.addEventListener("DOMContentLoaded", function() {
//     const slider = document.querySelector('.logos-slider');
    
//     let scrollAmount = 0;
//     let scrollStep = 1; // Control the speed of scrolling
    
//     function autoScroll() {
//         // Scroll the slider by adding to its scrollLeft value
//         scrollAmount += scrollStep;
//         slider.style.transform = `translateX(-${scrollAmount}px)`;
        
//         // Reset the scroll amount when the scroll reaches the end of the logos
//         if (scrollAmount >= slider.scrollWidth/2.8) {
//             scrollAmount = 0; // Reset to create a loop effect
//         }
        
//         // Use requestAnimationFrame to make scrolling smooth
//         window.requestAnimationFrame(autoScroll);
//     }
    
//     // Start auto-scrolling
//     autoScroll();
// });
