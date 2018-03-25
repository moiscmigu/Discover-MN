myApp.service("eventsService", eventsService);

function eventsService($http) {
    let sv = this;

    sv.searchEvents = () => {
        return $http.get("/events").then(res => {
            sv.events = res;
            return sv.events;
        });//end of $http call
    };//end of searchEvents
}//end of service