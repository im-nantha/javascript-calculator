// Calculator
$(document).ready(function () {
    const display = $('#display');

    const appendToDisplay = (input) => {
        display.val(display.val() + input);
    };

    const clearDisplay = () => {
        display.val(' ');
    };

    const calculate = () => {
        try {
            const result = eval(display.val());
            display.val(result);
        } catch (error) {
            display.val('Syntax Error');
        }
    };

    $('#theme-toggle').click(function () {

        $('.body-container').toggleClass('white-theme');

        const $icon = $('#theme-toggle .bi');

        if ($('.body-container').hasClass('white-theme')) {
            $icon.removeClass('bi-moon').addClass('bi-sun');
            $('#theme-toggle').css({
                'background-color': 'black',
                'color': 'white'
            });
        } else {
            $icon.removeClass('bi-sun').addClass('bi-moon');
            $('#theme-toggle').css({
                'background-color': 'white',
                'color': 'black'
            });
        }
    });

    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;
});