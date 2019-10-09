import * as Phaser from "phaser";
import * as MainScene from "./Basic/MainScene";

const gameConfig : Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    version: '0.0',
    width: 800,
    height: 600,
    scene: MainScene.default,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

const game = new Phaser.Game(gameConfig);

export default game;