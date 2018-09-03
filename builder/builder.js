class Shop {
    constructor() {
        this.construct = function (builder) {
            builder.step1();
            builder.step2();
            return builder.get();
        };
    }
}
// Constructor Iphone
class IphoneBuilder {
    constructor() {
        this.iphone = null;
        this.step1 = function () {
            this.iphone = new Iphone();
        };
        this.step2 = function () {
            this.iphone.addParts();
        };
        this.get = function () {
            return this.iphone;
        };
    }
}
// Constructor Samsung
class SamsungBuilder {
    constructor() {
        this.samsung = null;
        this.step1 = function () {
            this.samsung = new Samsung();
        };
        this.step2 = function () {
            this.samsung.addParts();
        };
        this.get = function () {
            return this.samsung;
        };
    }
}
//Producto IphoneX
class Iphone {
    constructor() {
        this.name = '';
        this.date = 0;
        this.addParts = function () {
            this.name = 'Iphone X';
            this.date = '3 de noviembre de 2017';
        };
        this.say = function () {
            log.add(this.name + '<br>\n <center><img src="./img/iphonex.png" class="img-fluid" width="10%" alt=""></center>  \n Lanzamiento: <spam class="text-danger">'
             + this.date + '</spam>');
        };
    }
}
//Producto Samsung
class Samsung {
    constructor() {
        this.name = '';
        this.date = 0;
        this.addParts = function () {
            this.name = 'Samsung S9';
            this.date = '25 de febrero de 2018';
        };
        this.say = function () {
            log.add(this.name + '<br>\n <center><img src="./img/samsungS9.png" class="img-fluid" width="10%" alt=""></center>  \n Lanzamiento: <spam class="text-danger">'
             + this.date + '</spam>');
        };
    }
}

// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log = msg + "\n"; },
        show: function () {
            swal({
                text: log,
            });
        }
    }
})();

//Ejecutar eleccion Iphone
function runIphone() {
    var shop = new Shop();
    var iphoneBuilder = new IphoneBuilder();
    var iphone = shop.construct(iphoneBuilder);
    iphone.say();
    log.show();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado_img").innerHTML = '<center><img src="./img/iphonex.png" class="img-fluid" alt="Responsive image"></center>';
}
//Ejecutar eleccion Samgung
function runSamsung() {
    var shop = new Shop();
    var samsungBuilder = new SamsungBuilder();
    var samsung = shop.construct(samsungBuilder);
    samsung.say();
    log.show();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado_img").innerHTML = '<center><img src="./img/samsungS9.png" class="img-fluid" alt="Responsive image"></center>';
}