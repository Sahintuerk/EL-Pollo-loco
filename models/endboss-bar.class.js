class Endbossbar extends DrawableObject {


    IMAGES_ENDBOSS_BAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'

    ];




    percentage = 100;
    

    endBossSetPercentage(percentage) {
        this.percentage = percentage;
        let endboss = this.IMAGES_ENDBOSS_BAR[this.endbossRelsolveImageIndex()]
        this.img = this.imageCache[endboss];

        
    }


    endbossRelsolveImageIndex() {
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
        } else {
            return 0;
        }
    }


    constructor() {
        super();
        this.loadImages(this.IMAGES_ENDBOSS_BAR);
        this.x = 470;
        this.y = 10;
        this.width = 200;
        this.height = 60;
        this.endBossSetPercentage(100);
    }











}

