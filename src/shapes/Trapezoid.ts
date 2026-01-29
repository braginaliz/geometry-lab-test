import { Shape } from './Shape';
import { Validator } from '../utils/Validator';

/**
 * Класс - Трапеция - для расширения типов фигур
 */
export class Trapezoid extends Shape {
  private _baseA!: number;
  private _baseB!: number;
  private _height!: number;
  private _sideC!: number;
  private _sideD!: number;

  /**
   * Создает новую трапецию
   * @param baseA - Первое основание
   * @param baseB - Второе основание
   * @param height - Высота
   * @param sideC - Первая боковая сторона
   * @param sideD - Вторая боковая сторона
   */
  constructor(baseA: number, baseB: number, height: number, sideC: number, sideD: number) {
    super('Trapezoid');
    this.setParameters(baseA, baseB, height, sideC, sideD);
  }

  /**
   * Параметры трапеции
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
   * площадь (S) трапеции
   */
  calculateArea(): number {
    return ((this._baseA + this._baseB) / 2) * this._height;
  }

  /**
   * Периметр (P) трапеции
   */
  calculatePerimeter(): number {
    return this._baseA + this._baseB + this._sideC + this._sideD;
  }

  /**
   * валидность трапеции
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
   * Трапеция в объект
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