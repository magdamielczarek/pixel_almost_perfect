import React from 'react';
import classes from './GameBoard.module.scss';
import GameNavigation from "./GameNavigation/GameNavigation";
import ImageDescription from './ImageDescription/ImageDescription';

class GameBoard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            timer: 0,
            scores: 0,
            allImages: [],
            currentImage: '',
            activePixels: []
        };
    };

    gameConfig = {
        xNumber: 20,
        yNumber: 20,
        rectWidth: 0,
        rectHeight: 0,
        pixelsToCheckNumber: 5,
        timer: 180000, // 3 minuty
        difficulty: 'medium',
        pixelsToCheckCords: [],
        activeCords: [],
        images: []
    };

    componentWillMount() {
        this.gameConfig.images = this.importAllImages(require.context('../../../assets/images', false, /\.(png|jpe?g|svg)$/));
    };

    componentWillUpdate(nextProps, nextState, nextContext) {
        // this.setRandomImage();
    };

    componentDidMount = () => {
        const canvas = this.refs.canvas;
        let ctx;
        const imageObj = this.refs.image;

        imageObj.onload = () => {
            this.updateImage(imageObj,canvas);
            ctx = canvas.getContext("2d");
            ctx.drawImage(imageObj,0,0,imageObj.width,imageObj.height);
            this.collectRandomRects(
                canvas,
                ctx,
                this.gameConfig.pixelsToCheckNumber,
                this.gameConfig.xNumber,
                this.gameConfig.yNumber);
            this.drawGrid(imageObj,ctx);
        }
    };

    importAllImages = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./assets/images', '')] = r(item); });
        return images;
    };

    setRandomImage = () => {
        let selectedImage = this.returnCustomNumber();
        // jeśli obraz był już wylosowany, to nie powinien losować się kolejny raz
        this.setState({
            currentImage: ''
        });
    };

    markPixel = (e) => {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        this.gameConfig.activeCords.forEach(
            (config,index) => {
            if((e.pageX >= config.positionLeft + this.refs.canvas.offsetLeft && e.pageX <= config.positionLeft + config.width + this.refs.canvas.offsetLeft)
                && (e.pageY >= config.positionTop + this.refs.canvas.offsetTop && e.pageY <= config.positionTop + config.width + this.refs.canvas.offsetTop)) {

                ctx.rect(config.positionLeft,config.positionTop,config.width,config.height);
                ctx.fillStyle = '#00FFBB';
                ctx.fill();
                this.gameConfig.activeCords.splice(index,1);
            }
        });
        if(!this.gameConfig.activeCords.length){
            // double scores with animation
            // go to the next image
        }
    };

    updateImage = (image,canvas) => {
        const newHeight = (window.innerHeight * 0.70).toFixed(2);
        const oldHeight = image.height;
        const oldWidth = image.width;
        const newWidth = ((oldWidth/oldHeight)*newHeight).toFixed(2);

        // ustawiać wysokość i szerokość za pomocą zmiennych
        image.setAttribute('width',`${newWidth}px`);
        image.setAttribute('height',`${newHeight}px`);
        canvas.setAttribute('width',`${image.width}px`);
        canvas.setAttribute('height',`${image.height}px`);

        this.gameConfig.rectHeight = image.height / this.gameConfig.yNumber;
        this.gameConfig.rectWidth = image.width / this.gameConfig.xNumber;
    };

    drawGrid = (imageObj,ctx) => {
        // animować
        for (let x = 0; x < imageObj.width; x += this.gameConfig.rectWidth) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, imageObj.height);
        }
        for (let y = 0; y < imageObj.height; y += this.gameConfig.rectHeight) {
            ctx.moveTo(0, y);
            ctx.lineTo(imageObj.width, y);
        }
        ctx.strokeStyle = "#fff";
        ctx.stroke();
    };

    returnCustomNumber = (unitsNumber) => {
        let num =  Math.round(Math.random()*unitsNumber);
        if (num === 0) num++;
        return num;
    };

    collectRandomRects = (canvas,context,pixelsToCheckNumber,xCounter,yCounter) => {
        for(let i=0;i<pixelsToCheckNumber;i++){
            this.gameConfig.pixelsToCheckCords.push({
                x: this.returnCustomNumber(xCounter),
                y: this.returnCustomNumber(yCounter)
            });
        }

        this.gameConfig.pixelsToCheckCords.forEach(
            (rect) => {
                const positionLeft = this.gameConfig.rectWidth * (rect.x - 1);
                const positionTop = this.gameConfig.rectHeight * (rect.y - 1);
                const width = this.gameConfig.rectWidth;
                const height = this.gameConfig.rectHeight;

                let imageData = context.getImageData(
                    positionLeft, positionTop, width, height);

                let sumRed = 0,
                    sumGreen = 0,
                    sumBlue = 0,
                    length = imageData.data.length,
                    avRed = 0,
                    avGreen = 0,
                    avBlue = 0;

                this.gameConfig.activeCords.push({
                    positionLeft,
                    positionTop,
                    width,
                    height
                });

                for(let i = 0; i < length;i=i+4){
                    sumRed += imageData.data[i];
                    sumGreen += imageData.data[i+1];
                    sumBlue += imageData.data[i+2];
                }

                avRed = Math.round(sumRed/(length/4));
                avGreen = Math.round(sumGreen/(length/4));
                avBlue = Math.round(sumBlue/(length/4));

                for(let i = 0; i < length;i=i+4){
                    imageData.data[i] = avRed;
                    imageData.data[i+1] = avGreen;
                    imageData.data[i+2] = avBlue;
                    imageData.data[i+3] = imageData.data[i+3];
                }

                context.putImageData(
                    imageData,
                    this.gameConfig.rectWidth * (rect.x - 1) + 1,
                    this.gameConfig.rectHeight * (rect.y - 1) + 1);
            }
        );
    };

    handleGetHint = () => {
        const ctx = this.refs.canvas.getContext('2d');
        const pixel = this.gameConfig.activeCords[0];
        ctx.rect(pixel.positionLeft,pixel.positionTop,pixel.width,pixel.height);
        ctx.fill();
        // ctx.clearRect(pixel.positionLeft,pixel.positionTop,pixel.width,pixel.height);
        // odejmij jeden punkt albo odejmij 5 sekund czasu
    };

    render(){
        return (
            <>
                <GameNavigation showHint={this.handleGetHint}/>
                <div className={classes.boardContainer}>
                    <div ref="canvasWrapper" className={classes.canvasWrapper}>
                        <img className={[classes.img,classes.hidden].join(' ')}
                             ref="image"
                             src={this.gameConfig.images['./Bernardo_Bellotto_il_Canaletto_-_New_Market_Square_in_Dresden_from_the_Judenhof.jpg']} />
                        <canvas ref="canvas"
                                className={classes.img} onClick={this.markPixel}> </canvas>
                    </div>
                    <ImageDescription />
                </div>
            </>
        );
    }
}

export default GameBoard;
