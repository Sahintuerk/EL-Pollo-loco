class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;




    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }



    
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }

    //tut nur chrakter in ein rahmen
    drawFrame(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y+112, this.width-10, this.height-120);
            ctx.stroke();
        }
    }



    drawFrameChicken(ctx) {
        if ( this instanceof Chicken ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }



    drawFrameBottle(ctx) {
        if (this instanceof Bottle ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }




    drawFrameCoins(ctx) {
        if (this instanceof Coins ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.x+30, this.y+30, this.width-60, this.height-60);
            ctx.stroke();
        }
    }






    drawFrameEndboss(ctx) {
        if (this instanceof Endboss ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'pink';
            ctx.rect(this.x+10, this.y+30, this.width-10, this.height-40);
            ctx.stroke();
        }
    }












    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }



}