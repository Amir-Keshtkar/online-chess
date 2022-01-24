
export default class Piece {
  constructor(player, iconName) {
    this.player = player;
    this.style={  
      backgroundImage: "url(" + iconName + ")",
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }
  }

  getPlayer() {
    return this.player
  }
}