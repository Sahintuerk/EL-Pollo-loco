class StatusBottle extends DrawableObject {

    IMAGES_BOTTLE_STATUS = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'


    ]


    percentage = 0;

    bottlePercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLE_STATUS[this.bottleRelsolveImageIndex()]
        this.img = this.imageCache[path];


    }

    bottleRelsolveImageIndex() {
        if (this.percentage == 0) {
            return 0;
          } else if (this.percentage == 20) {
            return 1;
          } else if (this.percentage == 40) {
            return 2;
          } else if (this.percentage == 60) {
            return 3;
          } else if (this.percentage == 80) {
            return 4;
          } else {
            return 5;
          }
        }
      



    constructor() {
        super()
        this.loadImages(this.IMAGES_BOTTLE_STATUS);
        this.x = 40;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.bottlePercentage(0);
    }











}