// layering and this scene in particular doesn't work right, suspect phaser has changed some stuff since the tutorial i'm using was uploaded. not a big deal, just using the tutorial to refamiliarize myself with js syntax and refactoring

class UiScene extends Phaser.Scene {
  constructor() {
    super('Ui');

  }

  init() {
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.setupUiElements;
    this.setupEvents;
  }

  setupUiElements() {
    this.scoreText = this.add.text(35, 8, 'Coins: 0', {fontSize : '16px', fill: '#fff'});
    this.coinIcon = this.add.image(15, 15, 'items', 3);
  }

  setupEvents() {
    this.gameScene.events.on('updateScore', (score) => {
      this.scoreText.setText(`coins: ${score}`);
    });
  }

};