import { Shape } from './Shape';
import { Validator } from '../utils/Validator';

/**
 * РљР»Р°СЃСЃ - С‚СЂРµСѓРіРѕР»СЊРЅРёРє
 */
export class Triangle extends Shape {
  private _sideA!: number;
  private _sideB!: number;
  private _sideC!: number;

  /**
   * РЎРѕР·РґР°РµС‚ РЅРѕРІС‹Р№ С‚СЂРµСѓРіРѕР»СЊРЅРёРє
   * @param sideA - РџРµСЂРІР°СЏ СЃС‚РѕСЂРѕРЅР° С‚СЂРµСѓРіРѕР»СЊРЅРёРєР°
   * @param sideB - Р’С‚РѕСЂР°СЏ СЃС‚РѕСЂРѕРЅР° С‚СЂРµСѓРіРѕР»СЊРЅРёРєР°
   * @param sideC - РўСЂРµС‚СЊСЏ СЃС‚РѕСЂРѕРЅР° С‚СЂРµСѓРіРѕР»СЊРЅРёРєР°
   */
  constructor(sideA: number, sideB: number, sideC: number) {
    super('Triangle');
    this.setSides(sideA, sideB, sideC);
  }

  /**
   * РЈСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ СЃС‚РѕСЂРѕРЅС‹ С‚СЂРµСѓРіРѕР»СЊРЅРёРєР°
   * @param sideA - РџРµСЂРІР°СЏ СЃС‚РѕСЂРѕРЅР°
   * @param sideB - Р’С‚РѕСЂР°СЏ СЃС‚РѕСЂРѕРЅР°
   * @param sideC - РўСЂРµС‚СЊСЏ СЃС‚РѕСЂРѕРЅР°
   */
  setSides(sideA: number, sideB: number, sideC: number): void {
    Validator.validatePositive(sideA, 'Side A');
    Validator.validatePositive(sideB, 'Side B');
    Validator.validatePositive(sideC, 'Side C');
    Validator.validateTriangleSides(sideA, sideB, sideC);

    this._sideA = sideA;
    this._sideB = sideB;
    this._sideC = sideC;
    this.emitChange();
  }

  /**
   * Р¤РѕСЂРјСѓР»Р° Р“РµСЂРѕРЅР°
   * @returns РџР»РѕС‰Р°РґСЊ С‚СЂРµСѓРіРѕР»СЊРЅРёРєР°
   */
  calculateArea(): number {
    const s = this.calculatePerimeter() / 2;
    return Math.sqrt(s * (s - this._sideA) * (s - this._sideB) * (s - this._sideC));
  }

  /**
   * Р’С‹С‡РёСЃР»СЏРµС‚ РїРµСЂРёРјРµС‚СЂ С‚СЂРµСѓРіРѕР»СЊРЅРёРєР°
   * @returns РџРµСЂРёРјРµС‚СЂ С‚СЂРµСѓРіРѕР»СЊРЅРёРєР°
   */
  calculatePerimeter(): number {
    return this._sideA + this._sideB + this._sideC;
  }

  /**
   * РЇРІР»СЏРµС‚СЃСЏ Р»Рё С‚СЂРµСѓРіРѕР»СЊРЅРёРє РїСЂСЏРјРѕСѓРіРѕР»СЊРЅС‹Рј
   * @returns true, РµСЃР»Рё С‚СЂРµСѓРіРѕР»СЊРЅРёРє РїСЂСЏРјРѕСѓРіРѕР»СЊРЅС‹Р№
   */
  isRightAngled(): boolean {
    const sides = [this._sideA, this._sideB, this._sideC].sort((a, b) => a - b);
    return Math.abs(sides[2] ** 2 - (sides[0] ** 2 + sides[1] ** 2)) < 0.0001;
  }

  /**
   * РЇРІР»СЏРµС‚СЃСЏ Р»Рё С‚СЂРµСѓРіРѕР»СЊРЅРёРє СЂР°РІРЅРѕСЃС‚РѕСЂРѕРЅРЅРёРј
   * @returns true, РµСЃР»Рё С‚СЂРµСѓРіРѕР»СЊРЅРёРє СЂР°РІРЅРѕСЃС‚РѕСЂРѕРЅРЅРёР№
   */
  isEquilateral(): boolean {
    return this._sideA === this._sideB && this._sideB === this._sideC;
  }

  /**
   * РЇРІР»СЏРµС‚СЃСЏ Р»Рё С‚СЂРµСѓРіРѕР»СЊРЅРёРє СЂР°РІРЅРѕР±РµРґСЂРµРЅРЅС‹Рј
   * @returns true, РµСЃР»Рё С‚СЂРµСѓРіРѕР»СЊРЅРёРє СЂР°РІРЅРѕР±РµРґСЂРµРЅРЅС‹Р№
   */
  isIsosceles(): boolean {
    return this._sideA === this._sideB || 
           this._sideA === this._sideC || 
           this._sideB === this._sideC;
  }

  /**
   * Р’Р°Р»РёРґРЅРѕСЃС‚СЊ С‚СЂРµСѓРіРѕР»СЊРЅРёРєР°
   * @returns Promise, СЂР°Р·СЂРµС€Р°СЋС‰РёР№СЃСЏ РІ true, РµСЃР»Рё С‚СЂРµСѓРіРѕР»СЊРЅРёРє РІР°Р»РёРґРµРЅ
   */
  async validate(): Promise<boolean> {
    try {
      Validator.validatePositive(this._sideA, 'Side A');
      Validator.validatePositive(this._sideB, 'Side B');
      Validator.validatePositive(this._sideC, 'Side C');
      Validator.validateTriangleSides(this._sideA, this._sideB, this._sideC);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * 
   * @returns РћР±СЉРµРєС‚ СЃ РїР°СЂР°РјРµС‚СЂР°РјРё С‚СЂРµСѓРіРѕР»СЊРЅРёРєР°
   */
  toJSON(): object {
    return {
      type: 'Triangle',
      id: this.id,
      name: this.name,
      sideA: this._sideA,
      sideB: this._sideB,
      sideC: this._sideC,
      area: this.calculateArea(),
      perimeter: this.calculatePerimeter(),
      isRightAngled: this.isRightAngled(),
      isEquilateral: this.isEquilateral(),
      isIsosceles: this.isIsosceles()
    };
  }
}
