import Race from './Race';

export default class Elf extends Race {
  private readonly _maxLife: number = 99;
  static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}
