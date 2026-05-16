document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelectorAll('.button--close');

    closeButton.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const promotionBlock = button.closest('.tab');
            if (promotionBlock) {
                promotionBlock.classList.add('promotion--closed');
            }
        });
    });
});