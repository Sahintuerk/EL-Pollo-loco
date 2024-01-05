class StatusBar extends DrawableObject {

    IMAGES_STATUS = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',//0
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',//4
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png' //5
    ];





    percentage = 100; // variable 

    // dadurch wird das jeweilige img angezeigt 
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUS[this.relsolveImageIndex()] // einer aus den 5 pfarde kommt hier raus 
        this.img = this.imageCache[path]; // das img wird aus dem cache geladen
       
    }




//nimmt  den aktuellen wert der variable um das entsprechende img auszuwählen 
    relsolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        }  else  {
            return 0;
        }
    }



    //lass ich alles laden
    constructor() { 
        super();
        this.loadImages(this.IMAGES_STATUS);
        this.x = 40;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }







}