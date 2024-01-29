import Race from './Race';

export default class Orc extends Race {
  private readonly _maxLife: number = 74;
  static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}
