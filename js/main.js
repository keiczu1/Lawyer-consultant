$(document).ready(function() {
    // Phone mask
    $('.phone-mask').mask('+7 (999) 999-99-99');
    
    // Initialize CountUp for statistics
    const statisticsCounters = document.querySelectorAll('.statistic-counter');
    statisticsCounters.forEach(counter => {
        const value = parseInt(counter.getAttribute('data-value'));
        new CountUp(counter, 0, value, 0, 2.5, {
            useEasing: true,
            useGrouping: true,
            separator: ' '
        }).start();
    });
    
    // Form submission
    $('.consultation-form').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const submitBtn = form.find('.submit-btn');
        
        submitBtn.prop('disabled', true);
        
        $.ajax({
            url: form.attr('action'),
            method: 'POST',
            data: form.serialize(),
            success: function(response) {
                if(response.success) {
                    alert('Спасибо! Ваша заявка принята. Юрист свяжется с вами в течение 30 минут.');
                    form[0].reset();
                } else {
                    alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
                }
            },
            error: function() {
                alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
            },
            complete: function() {
                submitBtn.prop('disabled', false);
            }
        });
    });
    
    // Smooth scroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 500);
        }
    });
    
    // Tabs functionality
    $('.tab-button').on('click', function() {
        const tabId = $(this).data('tab');
        
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        
        $('.tab-content').removeClass('active');
        $(`#${tabId}`).addClass('active');
    });
});

// Consultation counter update
function updateConsultationCounter() {
    const counter = $('.consultation-counter');
    const currentValue = parseInt(counter.text());
    if (currentValue > 1) {
        counter.text(currentValue - 1);
    }
}

// Update counter every 5 minutes
setInterval(updateConsultationCounter, 300000);