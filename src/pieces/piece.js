export default class Piece {
  constructor(player, iconName) {
    this.player = player;
    this.style = { backgroundImage: "url('" + iconName + "') " };
    //this.style = { backgroundImage: 'url(img/bb.png) no-repeat center center'};
    this.style.backgroundSize = "100% 100%";
    //this.style.background = "url('bb.png') repeat fixed /300px";
  }

  getPlayer() {
    return this.player
  }
}