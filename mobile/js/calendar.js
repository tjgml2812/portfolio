
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var da = new Date();
    var gmonth=(da.getMonth()+1);
    var gdate=(da.getDate());
    if(gmonth<10)gmonth='0'+gmonth;
    if(gdate<10)gdate='0'+gdate;

    var idate =da.getFullYear() +'-'+gmonth+'-'+gdate;
    //console.log(idate);

    var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
        left: 'title',
        center: 'dayGridMonth,dayGridWeek',
        right: 'prevYear,prev,next,nextYear'
       
    },
    initialDate: idate,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
        {
        title: '10:00 - 20:00',
        start: '2024-04-01',
        
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-02',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-03',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-04',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-05',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-06',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-07',
        color: '#00a7ce',
        
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-08',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-09',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-10',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-11',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-12',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-13',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-14',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-15',
        
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-16',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-17',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-18',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-19',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-20',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-21',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-22',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-23',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-24',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-25',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-26',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-27',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 22:00',
        start: '2024-04-28',
        color: '#00a7ce',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-29',
        },
        {
        title: '10:00 - 20:00',
        start: '2024-04-30',
        },
    ]
    });

    calendar.render();
});

