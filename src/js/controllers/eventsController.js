function eventsController(eventsService) {
    console.log("In the events Controller");
    let vm = this;
    vm.loader = true;
    vm.data = false;
    var color = "bg-primary";

    eventsService.searchEvents().then(res => {
        vm.loader = false;
        vm.address = eventsService.events.data.address;
        vm.results = eventsService.events.data.results;


       for(let i = 0; i < vm.results.length; i++) {
        
           if (vm.address[i] == null) {
                vm.results[i].address = "N/A";
                console.log("Not A" );

           } else {
               vm.results[i].address = vm.address[i][0].formattedAddress;
           }
       }

       vm.data = vm.results;
        console.log("The Results", vm.data)

    });//end of eventsService

    vm.bg = () => {
        if(color == "bg-primary") {
            return "bg-warning";
        }
        else if(color == "bg-warning") {
            return "bg-danger";
        }
        else if (color == "bg-danger") {
            return "bg-success"
        } else {
            return "bg-primary";
        }
    };




}//end of events controller
