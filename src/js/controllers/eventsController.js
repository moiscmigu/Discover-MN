function eventsController(eventsService) {
    
    let vm = this;

    vm.loader = true;
    vm.data = false;
    
    vm.color = "bg-info";

    eventsService.searchEvents().then(res => {
        vm.loader = false;
        vm.address = eventsService.events.data.address;
        vm.results = eventsService.events.data.results;


       for(let i = 0; i < vm.results.length; i++) {
        
           if (vm.address[i] == null) {
                vm.results[i].address = "N/A";
           } else {
               vm.results[i].address = vm.address[i][0].formattedAddress;
           }
       }//end of for loop

       vm.data = vm.results;

       return vm.data;
        

    });//end of eventsService

    vm.colorSelector = () => {

        if (vm.color == "bg-info") {
            vm.color = "bg-warning";
            return "bg-warning"
        } 
        else if (vm.color == "bg-warning") {
            vm.color = "bg-success";
            return "bg-success";
        }
        else if (vm.color == "bg-success") {
            vm.color = "bg-primary";
            return "bg-primary";
        }
        else if (vm.color == "bg-primary") {
            vm.color = "bg-danger";
            return "bg-danger";
        }
        else {
            vm.color = "bg-info";
            return "bg-info";
        }
        
        
    };//end of colorSelector


}//end of events controller
