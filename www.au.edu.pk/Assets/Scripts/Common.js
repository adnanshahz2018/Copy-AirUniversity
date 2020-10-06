////////////////////////////////////////////////Event Calendar///////////////////////////////////////////////////////////////
function GetEventCalendar() {
    var filePath = "AU_Data/Calendar_Events.txt";
    var date='2017-11-10';
    $.ajax({
        type: "POST",
        url: "UtilityMethods.aspx/GetCalendarEventData",
        data: '{filePath: "' + filePath + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var data = [];
          
            for (var i = 0; i < response.d.length; i++) {
                data.push({
                    "id": response.d[i].id,
                    "name": response.d[i].name,
                    "startdate": response.d[i].startdate,
                    "enddate": response.d[i].enddate,
                    "starttime": response.d[i].starttime,
                    "endtime": response.d[i].endtime,
                    "color": response.d[i].color,
                    "url": response.d[i].url
                });
            }

            var dataCalendar = {
                monthly: data
            };

            $('#mycalendar').monthly({
                mode: 'event',
                dataType: 'json',
                events: dataCalendar
               
            });

        },
        failure: function (response) {
            console.log(response.d);
        }
    });
}
///////////////////////////////////////////////////////////////////End Event Calendar Function////////////////////////////////////////////////////////////////////////

