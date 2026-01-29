import { Shape } from './Shape';
import { Validator } from '../utils/Validator';

/**
 * Класс - прямоугольник
 */
export class Rectangle extends Shape {
  private _width!: number;
  private _height!: number;

  /**
   * Создает новый прямоугольник
   * @param width - Ширина 
   * @param height - Высота 
   */
  constructor(width: number, height: number) {
    super('Rectangle');
    this.setDimensions(width, height);
  }

  /**
   * Устанавливает размеры 
   * @param width - Новая ширина
   * @param height - Новая высота
   */
  setDimensions(width: number, height: number): void {
    Validator.validatePositive(width, 'Width');
    Validator.validatePositive(height, 'Height');
    
    this._width = width;
    this._height = height;
    this.emitChange();
  }

  /**
   * Ширина 
   */
  get width(): number {
    return this._width;
  }

  /**
   * Высота 
   */
  get height(): number {
    return this._height;
  }

  /**
   * Вычисляет площадь прямоугольника
   * @returns 
   */
  calculateArea(): number {
    return this._width * this._height;
  }

  /**
   * Вычисляет периметр прямоугольника
   * @returns 
   */
  calculatePerimeter(): number {
    return 2 * (this._width + this._height);
  }

  /**
   * Вычисляет длину диагонали прямоугольника
   * @returns
   */
  calculateDiagonal(): number {
    return Math.sqrt(this._width ** 2 + this._height ** 2);
  }

  /**
   * Проверяет, является ли прямоугольник квадратом
   * @returns true, если  является 
   */
  isSquare(): boolean {
    return this._width === this._height;
  }

  /**
   * Проверяет валидность прямоугольника
   * @returns Promise, разрешающийся в true, если прямоугольник валиден
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
   * Прямоугольник в объект
   * @returns
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