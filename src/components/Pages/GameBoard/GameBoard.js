import React from 'react';
import ReactDOM from 'react-dom';
import classes from './GameBoard.module.scss';
import GameNavigation from "./GameNavigation/GameNavigation";
import ImageDescription from './ImageDescription/ImageDescription';
import img1 from '../../../assets/images/wieczerza.jpg';

class GameBoard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gameConfiguration: {
                xNumber: 20,
                yNumber: 20,
                theme: 'art',
                timer: '2 minuty',
                difficulty: 'medium'
            },
            timer: 0,
            scores: 0,
            imagesToShow: [],
            allImages: [],
            currentImage: '',
            imgHeight: 0,
            imgWidth: 0
        };
        this.img = this.refs.image;
        this.canvas = this.refs.canvas;
        this.canvasWrapper = this.refs.canvasWrapper;
    };

    gameConfig = {
        xNumber: 20,
        yNumber: 20,
        rectWidth: 0,
        rectHeight: 0,
        pixelsToCheckNumber: 5
    };

    componentDidMount = () => {
        const canvas = this.refs.canvas;
        let ctx;
        const imageObj = this.refs.image;

        imageObj.onload = () => {
            const newHeight = (window.innerHeight * 0.70).toFixed(2);
            const oldHeight = imageObj.height;
            const oldWidth = imageObj.width;
            const newWidth = ((oldWidth/oldHeight)*newHeight).toFixed(2);

            imageObj.setAttribute('width',`${newWidth}px`);
            imageObj.setAttribute('height',`${newHeight}px`);
            canvas.setAttribute('width',`${imageObj.width}px`);
            canvas.setAttribute('height',`${imageObj.height}px`);

            this.gameConfig.rectHeight = imageObj.height / this.gameConfig.yNumber;
            this.gameConfig.rectWidth = imageObj.width / this.gameConfig.xNumber;

            ctx = canvas.getContext("2d");

            ctx.drawImage(imageObj,0,0,imageObj.width,imageObj.height);
            this.collectRandomRects(canvas,ctx,this.gameConfig.pixelsToCheckNumber,this.gameConfig.xNumber,this.gameConfig.yNumber);
            this.drawGrid(imageObj,ctx);
        }
    };

    drawGrid = (imageObj,ctx) => {
        for (var x = 0; x < imageObj.width; x += this.gameConfig.rectWidth) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, imageObj.height);
        }
        for (var y = 0; y < imageObj.height; y += this.gameConfig.rectHeight) {
            ctx.moveTo(0, y);
            ctx.lineTo(imageObj.width, y);
        }
        ctx.strokeStyle = "#fff";
        ctx.stroke();
    };

    findCustomInDimension = (unitsNumber) => {
        return Math.round(Math.random()*unitsNumber);
    };

    collectRandomRects = (canvas,context,pixelsToCheckNumber,xCounter,yCounter) => {
        // choose random "pixels"
        let pixelsToCheckCords = [];
        const canvasPosition = ReactDOM.findDOMNode(canvas).getBoundingClientRect();

        for(let i=0;i<pixelsToCheckNumber;i++){
            pixelsToCheckCords.push({
                x: this.findCustomInDimension(xCounter),
                y: this.findCustomInDimension(yCounter)
            });
        }


        // get avarage for each "pixel" and implement new value
        pixelsToCheckCords.forEach(
            (rect) => {
                let imageData = context.getImageData(
                    this.gameConfig.rectWidth * (rect.x - 1),
                    this.gameConfig.rectHeight * (rect.y - 1),
                    this.gameConfig.rectWidth,
                    this.gameConfig.rectHeight);

                let sumRed = 0;
                let sumGreen = 0;
                let sumBlue = 0;
                let length = imageData.data.length;
                let avRed = 0;
                let avGreen = 0;
                let avBlue = 0;

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
                    this.gameConfig.rectWidth * (rect.x - 1),
                    this.gameConfig.rectHeight * (rect.y - 1));
            }
        );
    };

    render(){
        return (
            <>
                <GameNavigation />
                <div className={classes.boardContainer}>
                    <div ref="canvasWrapper" className={classes.canvasWrapper}>
                        <img className={[classes.img,classes.hidden].join(' ')} ref="image" src={img1} />
                        <canvas ref="canvas" id="board" className={classes.img}> </canvas>
                    </div>
                    <ImageDescription />
                </div>
            </>
        );
    }
}

export default GameBoard;
