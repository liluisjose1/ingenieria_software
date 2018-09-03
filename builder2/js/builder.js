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
// Constructor Huawei
class HuaweiBuilder {
    constructor() {
        this.huawei = null;
        this.step1 = function () {
            this.huawei = new Huawei();
        };
        this.step2 = function () {
            this.huawei.addParts();
        };
        this.get = function () {
            return this.huawei;
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
            log.add(this.name + '<br>\n <center><img src="./vendor/img/iphonex.png" class="img-fluid" width="20%" alt=""></center>  \n Lanzamiento: <spam class="text-danger">'
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
            log.add(this.name + '<br>\n <center><img src="./vendor/img/samsungS9.png" class="img-fluid" width="20%" alt=""></center>  \n Lanzamiento: <spam class="text-danger">'
                + this.date + '</spam>');
        };
    }
}
//Producto Huawei
class Huawei {
    constructor() {
        this.name = '';
        this.date = 0;
        this.addParts = function () {
            this.name = 'Huawei P20';
            this.date = '27 de marzo de 2018';
        };
        this.say = function () {
            log.add(this.name + '<br>\n <center><img src="./vendor/img/huawei-p20.jpg" class="img-fluid" width="20%" alt=""></center>  \n Lanzamiento: <spam class="text-danger">'
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
    // habilito div oculto
    document.getElementById("product_info").hidden = false;
    //mando caracteristicas del celular por DOM
    document.getElementById("os").innerHTML = "iOS 12";
    document.getElementById("memory").innerHTML = "64 GB — 256 GB";
    document.getElementById("ram").innerHTML = "3 GB";
    document.getElementById("procesador").innerHTML = "Apple A11 Bionic";
    document.getElementById("parrafo").innerHTML = "Phone X (pronunciado como iPhone 10 por el número romano X que representa el décimo aniversario del iPhone) es un teléfono inteligente de gama alta, diseñado, desarrollado y comercializado por Apple.";
    document.getElementById("resultado_img").innerHTML = '<center><img src="./vendor/img/iphonex.png" width="30%"  class="" alt="Responsive image"></center>';
}
//Ejecutar eleccion Samgung
function runSamsung() {
    var shop = new Shop();
    var samsungBuilder = new SamsungBuilder();
    var samsung = shop.construct(samsungBuilder);
    samsung.say();
    log.show();
    // habilito div oculto
    document.getElementById("product_info").hidden = false;
    //mando caracteristicas del celular por DOM
    document.getElementById("os").innerHTML = "Android 8.0 Oreo";
    document.getElementById("memory").innerHTML = "64 GB — 256 GB Expandible";
    document.getElementById("ram").innerHTML = "4 - 6 GB RAM";
    document.getElementById("procesador").innerHTML = "Samsung Exynos: Octa-core (4×2.8 GHz & 4x 1.7 GHz Cortex-A53 (GTS) 10 nm";
    document.getElementById("parrafo").innerHTML = "El Samsung Galaxy S9 y Galaxy S9+ son teléfonos inteligentes Android fabricados por Samsung Mobile como parte de la gama alta Galaxy S. Los dispositivos fueron presentados en el Mobile World Congress de Barcelona el 25 de febrero de 2018. Son los sucesores del Galaxy S8 y S8+.";
    document.getElementById("resultado_img").innerHTML = '<center><img src="./vendor/img/samsungS9.png" class="img-fluid" alt="Responsive image"></center>';
}
//Ejecutar eleccion Huawei
function runHuawei() {
    var shop = new Shop();
    var huaweiBuilder = new HuaweiBuilder();
    var huawei = shop.construct(huaweiBuilder);
    huawei.say();
    log.show();
    // habilito div oculto
    document.getElementById("product_info").hidden = false;
    //mando caracteristicas del celular por DOM
    document.getElementById("os").innerHTML = "EMUI 8.1 basado en Android 8.1 Oreo";
    document.getElementById("memory").innerHTML = "128 GB Expandible";
    document.getElementById("ram").innerHTML = "4 GB RAM";
    document.getElementById("procesador").innerHTML = "Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53";
    document.getElementById("parrafo").innerHTML = "El Huawei P20 y el Huawei P20 Pro son teléfonos inteligentes avanzados de Android fabricados por Huawei . Fueron anunciados el 27 de marzo de 2018 como los sucesores de la serie Huawei P10 .Sus características incluyen una cámara dual Leica para P20 y una cámara triple para P20 Pro, esta serie incluye un teléfono inteligente de gama media llamado Huawei P20 Lite, que incluye especificaciones y diferencias ligeramente inferiores al P20. ";
    document.getElementById("resultado_img").innerHTML = '<center><img src="./vendor/img/huawei-p20.jpg" width="60%" class="img-fluid" alt="Responsive image"></center>';
}