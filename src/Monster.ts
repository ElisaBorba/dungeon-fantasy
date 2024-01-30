import { SimpleFighter } from '././Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number = 85;
  private _strength: number = 63;

  constructor() {
    this._lifePoints;
    this._strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damageTaken = attackPoints - this._lifePoints;
    this._lifePoints -= damageTaken;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
