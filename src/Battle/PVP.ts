import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Character | Fighter;
  private _player2: Character | Fighter;

  constructor(player1: Character | Fighter, player2: Character | Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  override fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }

    return this._player1.lifePoints <= 0 && this._player2.lifePoints <= 0
      ? super.fight()
      : this._player1.lifePoints <= 0
      ? -1
      : 1;
  }
}
