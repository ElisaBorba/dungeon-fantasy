import Race from './Race';

export default class Dwarf extends Race {
  private readonly _maxLife: number = 80;
  static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}
