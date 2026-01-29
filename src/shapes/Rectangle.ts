import { Shape } from './Shape';
import { Validator } from '../utils/Validator';

/**
 * РљР»Р°СЃСЃ - РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРє
 */
export class Rectangle extends Shape {
  private _width!: number;
  private _height!: number;

  /**
   * РЎРѕР·РґР°РµС‚ РЅРѕРІС‹Р№ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРє
   * @param width - РЁРёСЂРёРЅР° РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   * @param height - Р’С‹СЃРѕС‚Р° РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   */
  constructor(width: number, height: number) {
    super('Rectangle');
    this.setDimensions(width, height);
  }

  /**
   * РЈСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ СЂР°Р·РјРµСЂС‹ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   * @param width - РќРѕРІР°СЏ С€РёСЂРёРЅР°
   * @param height - РќРѕРІР°СЏ РІС‹СЃРѕС‚Р°
   */
  setDimensions(width: number, height: number): void {
    Validator.validatePositive(width, 'Width');
    Validator.validatePositive(height, 'Height');
    
    this._width = width;
    this._height = height;
    this.emitChange();
  }

  /**
   * РЁРёСЂРёРЅР° РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   */
  get width(): number {
    return this._width;
  }

  /**
   * Р’С‹СЃРѕС‚Р° РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   */
  get height(): number {
    return this._height;
  }

  /**
   * Р’С‹С‡РёСЃР»СЏРµС‚ РїР»РѕС‰Р°РґСЊ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   * @returns РџР»РѕС‰Р°РґСЊ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   */
  calculateArea(): number {
    return this._width * this._height;
  }

  /**
   * Р’С‹С‡РёСЃР»СЏРµС‚ РїРµСЂРёРјРµС‚СЂ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   * @returns РџРµСЂРёРјРµС‚СЂ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   */
  calculatePerimeter(): number {
    return 2 * (this._width + this._height);
  }

  /**
   * Р’С‹С‡РёСЃР»СЏРµС‚ РґР»РёРЅСѓ РґРёР°РіРѕРЅР°Р»Рё РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   * @returns Р”Р»РёРЅР° РґРёР°РіРѕРЅР°Р»Рё
   */
  calculateDiagonal(): number {
    return Math.sqrt(this._width ** 2 + this._height ** 2);
  }

  /**
   * РџСЂРѕРІРµСЂСЏРµС‚, СЏРІР»СЏРµС‚СЃСЏ Р»Рё РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРє РєРІР°РґСЂР°С‚РѕРј
   * @returns true, РµСЃР»Рё РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРє СЏРІР»СЏРµС‚СЃСЏ РєРІР°РґСЂР°С‚РѕРј
   */
  isSquare(): boolean {
    return this._width === this._height;
  }

  /**
   * РџСЂРѕРІРµСЂСЏРµС‚ РІР°Р»РёРґРЅРѕСЃС‚СЊ РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   * @returns Promise, СЂР°Р·СЂРµС€Р°СЋС‰РёР№СЃСЏ РІ true, РµСЃР»Рё РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРє РІР°Р»РёРґРµРЅ
   */
  async validate(): Promise<boolean> {
    try {
      Validator.validatePositive(this._width, 'Width');
      Validator.validatePositive(this._height, 'Height');
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * РџСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРє РІ РѕР±СЉРµРєС‚
   * @returns РћР±СЉРµРєС‚ СЃ РїР°СЂР°РјРµС‚СЂР°РјРё РїСЂСЏРјРѕСѓРіРѕР»СЊРЅРёРєР°
   */
  toJSON(): object {
    return {
      type: 'Rectangle',
      id: this.id,
      name: this.name,
      width: this._width,
      height: this._height,
      area: this.calculateArea(),
      perimeter: this.calculatePerimeter(),
      diagonal: this.calculateDiagonal(),
      isSquare: this.isSquare()
    };
  }
}
