import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  static instancesCount = 0;

  constructor(name: string) {
    super(name);
    Mage.instancesCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.instancesCount;
  }
}
