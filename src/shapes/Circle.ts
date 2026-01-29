import { Shape } from './Shape';
import { Validator } from '../utils/Validator';

/**
 * Класс - круг
 */
export class Circle extends Shape {
  private _radius!: number;

  /**
   * Создает новый круг
   * @param radius - Радиус 
   */
  constructor(radius: number) {
    super('Circle');
    this.setRadius(radius);
  }

  /**
   * Устанавливает радиус круга
   * @param radius - Новый радиус
   */
  setRadius(radius: number): void {
    Validator.validatePositive(radius, 'Radius');
    this._radius = radius;
    this.emitChange();
  }

  /**
   * Радиус круга
   */
  get radius(): number {
    return this._radius;
  }

  /**
   * Диаметр круга
   * @returns 
   */
  calculateDiameter(): number {
    return 2 * this._radius;
  }

  /**
   * Площадь круга
   * @returns
   */
  calculateArea(): number {
    return Math.PI * this._radius ** 2;
  }

  /**
   * Длина окружности
   * @returns
   */
  calculatePerimeter(): number {
    return 2 * Math.PI * this._radius;
  }

  /**
   * Валидность круга
   * @returns Promise, разрешающийся в true, если круг валиден
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
   * Круг в объект
   * @returns 
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