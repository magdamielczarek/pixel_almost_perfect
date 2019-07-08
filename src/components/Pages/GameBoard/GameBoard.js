import React from 'react';
import classes from './GameBoard.module.scss';
import GameNavigation from './GameNavigation/GameNavigation';
import ImageDescription from './ImageDescription/ImageDescription';
import axios from '../../../axiosPreset';
import Spinner from "../../Layout/Spinner/Spinner";
import Backdrop from "../../Layout/Backdrop/Backdrop";
import Communication from "./Communication/Communication";

class GameBoard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gameIsOn: false,
            gameIsFinished: false,
            timer: 5000,
            scores: 0,
            allImagesData: [],
            imagesPassed: [],
            currentImageDescription: null,
            currentImagePath: ''
        };
    };

    gameConfig = {
        punctationUnit: 1,
        xNumber: 20,
        yNumber: 20,
        rectWidth: 0,
        rectHeight: 0,
        pixelsToCheckNumber: 5,
        difficulty: 'medium',
        pixelsToCheckCords: [],
        activeCords: [],
        images: []
    };

    componentWillMount() {
        this.gameConfig.images = this.importAllImages(require.context('../../../assets/images', false, /\.(png|jpe?g|svg)$/));
    };

    componentDidMount = () => {
        axios.get('/images.json')
            .then(data => this.setState({
                allImagesData: data
            }))
            .then(this.setRandomImage)
            .then(this.setState({
                gameIsOn: true
            }))
            .catch((err)=>console.log(err));
    };

    importAllImages = (r) => {
        let images = {};
        r.keys().map((item) => { images[item.replace('./assets/images', '')] = r(item); });
        return images;
    };

    createNewImage = (src) => {
        const imageObj = new Image();
        imageObj.className = 'img';
        imageObj.src = src;
        imageObj.onload = () => {
            this.prepareCanvas(imageObj);
        };
    };

    // adjust image and canvas size
    updateImage = (image,canvas) => {
        const newHeight = (window.innerHeight * 0.70).toFixed(2);
        const oldHeight = image.height;
        const oldWidth = image.width;
        const newWidth = ((oldWidth/oldHeight)*newHeight).toFixed(2);

        image.setAttribute('width',`${newWidth}px`);
        image.setAttribute('height',`${newHeight}px`);
        canvas.setAttribute('width',`${image.width}px`);
        canvas.setAttribute('height',`${image.height}px`);

        this.gameConfig.rectHeight = image.height / this.gameConfig.yNumber;
        this.gameConfig.rectWidth = image.width / this.gameConfig.xNumber;
    };

    drawGrid = (imageObj,ctx) => {
        for (let x = 0; x < imageObj.width; x += this.gameConfig.rectWidth) {
            setTimeout(()=>{
                ctx.moveTo(x, 0);
                ctx.lineTo(x, imageObj.height);
                ctx.strokeStyle = "#fff";
                ctx.stroke();
            },x*0.2);
        }
        for (let y = 0; y < imageObj.height; y += this.gameConfig.rectHeight) {
            setTimeout(()=>{
                ctx.moveTo(0, y);
                ctx.lineTo(imageObj.width, y);
                ctx.strokeStyle = "#fff";
                ctx.stroke();
            },y*0.2);
        }
    };

    prepareCanvas = (image) => {
        const canvas = this.refs.canvas;
        let ctx;
        this.updateImage(image,canvas);
        ctx = canvas.getContext("2d");
        ctx.drawImage(image,0,0,image.width,image.height);
        // setTimeout(()=>{
            this.collectRandomRects(
                canvas,
                ctx,
                this.gameConfig.pixelsToCheckNumber,
                this.gameConfig.xNumber,
                this.gameConfig.yNumber);
        // },500);
        this.drawGrid(image,ctx);
    };

    setRandomImage = () => {
        let selectedImage = this.returnCustomNumber(Object.keys(this.gameConfig.images).length);
        if(this.state.imagesPassed.includes(selectedImage)){
            this.setRandomImage();
        } else {
            const randomImage = this.gameConfig.images[Object.keys(this.gameConfig.images)[selectedImage]];
            const imageDescription = this.state.allImagesData.data.filter((image) => {
                return  randomImage.indexOf(`id${image.id}`) !== -1;
            });

            this.setState(()=>{
                return {currentImagePath: randomImage,currentImageDescription: imageDescription[0]}
            }, () => this.createNewImage(this.state.currentImagePath));
        }
    };

    changeScores = (operation,number) => {
        switch (operation) {
            case 'addition' :
                this.setState((prevState)=>{
                    return {scores: prevState.scores + number}
                });
                break;

            case 'deletion' :
                this.setState((prevState)=>{
                    if(prevState.scores > number){
                        return {scores: prevState.scores - number}
                    } else {
                        return {scores: 0}
                    }
                });
                break;

            case 'multiplication' :
                this.setState((prevState)=>{
                    return {scores: prevState.scores * number}
                });
                break;

            default:
                break;
        }
    };

    showNextImage = () => {
        this.resetCanvas();
        this.setRandomImage();
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
                this.changeScores('addition',this.gameConfig.punctationUnit);
            }
        });
        if(!this.gameConfig.activeCords.length){
            this.changeScores('addition',this.gameConfig.pixelsToCheckNumber * 2);
            this.resetCanvas();
            this.setRandomImage();
        }
    };

    resetCanvas = () => {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0,  canvas.width, canvas.height);
        this.gameConfig.pixelsToCheckCords = [];
        this.gameConfig.activeCords = [];
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
        this.changeScores('deletion',5);
        // ctx.clearRect(pixel.positionLeft,pixel.positionTop,pixel.width,pixel.height);
    };

    endGame = () => {
        this.setState({gameIsFinished: true});
    };

    continueGame = () => {
        this.setState({gameIsFinished: false});
    };

    confirmEndGame = () => {
        console.log('zakończ grę');
    };

    render(){
        const gameBoardContent = (
            <>
                <div ref="canvasWrapper" className={classes.canvasWrapper}>
                <canvas ref="canvas"
                        className={classes.img}
                        onClick={this.markPixel}> </canvas>
                </div>
                {this.state.currentImageDescription ? <ImageDescription description={this.state.currentImageDescription}/> : null}
            </>
        );
        return (
            <>
                <Backdrop visible={this.state.gameIsFinished}>
                    <Communication gameIsFinished={this.state.gameIsFinished}
                                   scores={this.state.scores}
                                   continueGame={this.continueGame}
                                   endGame={this.confirmEndGame}/>
                </Backdrop>
                <GameNavigation scores={this.state.scores}
                                next={this.showNextImage}
                                showHint={this.handleGetHint}
                                time={this.state.timer}
                                gameIsOn={this.state.gameIsOn}
                                endGame={this.endGame}/>
                <div className={classes.boardContainer}>
                    {this.state.currentImagePath ? gameBoardContent : <Spinner />}
                </div>
            </>
        );
    }
}

export default GameBoard;
