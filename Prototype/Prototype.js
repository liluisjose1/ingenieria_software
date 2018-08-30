function CustomerPrototype(proto) {
    this.proto = proto;
 
    this.clone = function () {
        var customer = new Customer();
 
        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;
 
        return customer;
    };
}
 
function Customer(first, last, status) {
 
    this.first = first;
    this.last = last;
    this.status = status;
 
    this.say = function () {
        swal({
            type: 'success',
            title: 'Ok...',
            text: ("name: " + this.first + " " + this.last +
            ", status: " + this.status),
          });
    };
}
 
function run() {
    var first = document.getElementById("fname").value;
    var last = document.getElementById("lname").value;
    var estado = document.getElementById("status").value;
    if(first!="" && last!="" && estado!="" ){
        var proto = new Customer(first, last, estado);
        var prototype = new CustomerPrototype(proto);
    }
    else
    {
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'Put the data in the boxs!',
            btn
          });
    }

 
    var customer = prototype.clone();
    customer.say();
}