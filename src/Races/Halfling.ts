import Race from './Race';

export default class Halfling extends Race {
  private readonly _maxLife: number = 60;
  static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}
