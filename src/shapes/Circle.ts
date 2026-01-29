import { Shape } from './Shape';
import { Validator } from '../utils/Validator';

/**
 * РљР»Р°СЃСЃ - РєСЂСѓРі
 */
export class Circle extends Shape {
  private _radius!: number;

  /**
   * РЎРѕР·РґР°РµС‚ РЅРѕРІС‹Р№ РєСЂСѓРі
   * @param radius - Р Р°РґРёСѓСЃ РєСЂСѓРіР°
   */
  constructor(radius: number) {
    super('Circle');
    this.setRadius(radius);
  }

  /**
   * РЈСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ СЂР°РґРёСѓСЃ РєСЂСѓРіР°
   * @param radius - РќРѕРІС‹Р№ СЂР°РґРёСѓСЃ
   */
  setRadius(radius: number): void {
    Validator.validatePositive(radius, 'Radius');
    this._radius = radius;
    this.emitChange();
  }

  /**
   * Р Р°РґРёСѓСЃ РєСЂСѓРіР°
   */
  get radius(): number {
    return this._radius;
  }

  /**
   * Р”РёР°РјРµС‚СЂ РєСЂСѓРіР°
   * @returns Р”РёР°РјРµС‚СЂ РєСЂСѓРіР°
   */
  calculateDiameter(): number {
    return 2 * this._radius;
  }

  /**
   * РџР»РѕС‰Р°РґСЊ РєСЂСѓРіР°
   * @returns РџР»РѕС‰Р°РґСЊ РєСЂСѓРіР°
   */
  calculateArea(): number {
    return Math.PI * this._radius ** 2;
  }

  /**
   * Р”Р»РёРЅР° РѕРєСЂСѓР¶РЅРѕСЃС‚Рё (РїРµСЂРёРјРµС‚СЂ РєСЂСѓРіР°)
   * @returns Р”Р»РёРЅР° РѕРєСЂСѓР¶РЅРѕСЃС‚Рё
   */
  calculatePerimeter(): number {
    return 2 * Math.PI * this._radius;
  }

  /**
   * Р’Р°Р»РёРґРЅРѕСЃС‚СЊ РєСЂСѓРіР°
   * @returns Promise, СЂР°Р·СЂРµС€Р°СЋС‰РёР№СЃСЏ РІ true, РµСЃР»Рё РєСЂСѓРі РІР°Р»РёРґРµРЅ
   */
  async validate(): Promise<boolean> {
    try {
      Validator.validatePositive(this._radius, 'Radius');
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * РљСЂСѓРі РІ РѕР±СЉРµРєС‚
   * @returns РћР±СЉРµРєС‚ СЃ РїР°СЂР°РјРµС‚СЂР°РјРё РєСЂСѓРіР°
   */
  toJSON(): object {
    return {
      type: 'Circle',
      id: this.id,
      name: this.name,
      radius: this._radius,
      diameter: this.calculateDiameter(),
      area: this.calculateArea(),
      circumference: this.calculatePerimeter()
    };
  }
}
