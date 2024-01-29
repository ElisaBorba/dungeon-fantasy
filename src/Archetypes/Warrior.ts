import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static instancesCount = 0;

  constructor(name: string) {
    super(name);
    Warrior.instancesCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.instancesCount;
  }
}
