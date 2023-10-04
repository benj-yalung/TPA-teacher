$(document).ready(function () {
    console.log('Script executed'); // Check if the script is executed
    $('#calendar-container').fullCalendar({
        defaultView: 'month',
        defaultDate: '2018-11-12',
        eventRender: function (eventObj, $el) {
            $el.popover({
                title: eventObj.title,
                content: eventObj.description,
                trigger: 'hover',
                placement: 'top',
                container: 'body'
            });
        },
        events: []
    });
});