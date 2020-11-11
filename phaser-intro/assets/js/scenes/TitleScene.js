class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');

  }

  create() {

    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'tutorial game', { fontSize: '64px', fill : '#fff' });
    this.titleText.setOrigin(0.5);

    this.startGameButton = new UiButton(this, this.scale.width / 2, this.scale.height * .65, 'button1', 'button2', 'start', this.startScene.bind(this, 'Game'));

  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }


};