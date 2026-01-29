import { Shape } from './Shape';
import { Validator } from '../utils/Validator';

/**
 * РљР»Р°СЃСЃ, РїСЂРµРґСЃС‚Р°РІР»СЏСЋС‰РёР№ С‚СЂР°РїРµС†РёСЋ
 * Р”РµРјРѕРЅСЃС‚СЂРёСЂСѓРµС‚ РїСЂРѕСЃС‚РѕС‚Сѓ РґРѕР±Р°РІР»РµРЅРёСЏ РЅРѕРІС‹С… С„РёРіСѓСЂ
 */
export class Trapezoid extends Shape {
  private _baseA!: number;
  private _baseB!: number;
  private _height!: number;
  private _sideC!: number;
  private _sideD!: number;

  /**
   * РЎРѕР·РґР°РµС‚ РЅРѕРІСѓСЋ С‚СЂР°РїРµС†РёСЋ
   * @param baseA - РџРµСЂРІРѕРµ РѕСЃРЅРѕРІР°РЅРёРµ
   * @param baseB - Р’С‚РѕСЂРѕРµ РѕСЃРЅРѕРІР°РЅРёРµ
   * @param height - Р’С‹СЃРѕС‚Р°
   * @param sideC - РџРµСЂРІР°СЏ Р±РѕРєРѕРІР°СЏ СЃС‚РѕСЂРѕРЅР°
   * @param sideD - Р’С‚РѕСЂР°СЏ Р±РѕРєРѕРІР°СЏ СЃС‚РѕСЂРѕРЅР°
   */
  constructor(baseA: number, baseB: number, height: number, sideC: number, sideD: number) {
    super('Trapezoid');
    this.setParameters(baseA, baseB, height, sideC, sideD);
  }

  /**
   * РЈСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ РїР°СЂР°РјРµС‚СЂС‹ С‚СЂР°РїРµС†РёРё
   */
  setParameters(baseA: number, baseB: number, height: number, sideC: number, sideD: number): void {
    Validator.validatePositive(baseA, 'Base A');
    Validator.validatePositive(baseB, 'Base B');
    Validator.validatePositive(height, 'Height');
    Validator.validatePositive(sideC, 'Side C');
    Validator.validatePositive(sideD, 'Side D');

    this._baseA = baseA;
    this._baseB = baseB;
    this._height = height;
    this._sideC = sideC;
    this._sideD = sideD;
    this.emitChange();
  }

  /**
   * Р’С‹С‡РёСЃР»СЏРµС‚ РїР»РѕС‰Р°РґСЊ С‚СЂР°РїРµС†РёРё
   */
  calculateArea(): number {
    return ((this._baseA + this._baseB) / 2) * this._height;
  }

  /**
   * Р’С‹С‡РёСЃР»СЏРµС‚ РїРµСЂРёРјРµС‚СЂ С‚СЂР°РїРµС†РёРё
   */
  calculatePerimeter(): number {
    return this._baseA + this._baseB + this._sideC + this._sideD;
  }

  /**
   * РџСЂРѕРІРµСЂСЏРµС‚ РІР°Р»РёРґРЅРѕСЃС‚СЊ С‚СЂР°РїРµС†РёРё
   */
  async validate(): Promise<boolean> {
    try {
      Validator.validatePositive(this._baseA, 'Base A');
      Validator.validatePositive(this._baseB, 'Base B');
      Validator.validatePositive(this._height, 'Height');
      Validator.validatePositive(this._sideC, 'Side C');
      Validator.validatePositive(this._sideD, 'Side D');
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * РЎРµСЂРёР°Р»РёР·СѓРµС‚ С‚СЂР°РїРµС†РёСЋ РІ РѕР±СЉРµРєС‚
   */
  toJSON(): object {
    return {
      type: 'Trapezoid',
      id: this.id,
      name: this.name,
      baseA: this._baseA,
      baseB: this._baseB,
      height: this._height,
      sideC: this._sideC,
      sideD: this._sideD,
      area: this.calculateArea(),
      perimeter: this.calculatePerimeter()
    };
  }
}
