class CoinsBar extends DrawableObject {

    IMAGES_COINS_STATUS = [

        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'

        
    ]




    percentage = 0;

    // dadurch wird das jeweilige img angezeigt 
    coinsSetPercentage(percentage) {
        this.percentage = percentage;
        let coin = this.IMAGES_COINS_STATUS[this.coinsRelsolveImageIndex()]
        this.img = this.imageCache[coin];

    }


// damit die coins wieder voll werden 
    coinsRelsolveImageIndex() {
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
      



    //lass ich alles laden höhe x,y kordinaten 
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS_STATUS);
        this.x = 40;
        this.y =50;
        this.width = 200;
        this.height = 60;
        this.coinsSetPercentage(0);
    }






}