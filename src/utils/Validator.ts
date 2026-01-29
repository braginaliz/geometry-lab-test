/**
 * Утилиты для валидации 
 */
export class Validator {
  /**
   * Является ли число положительным
   * @param value - Проверяемое значение
   * @param name - Название параметра для сообщения об ошибке
   */
  static validatePositive(value: number, name: string): void {
    if (value <= 0) {
      throw new Error(`${name} must be greater than 0`);
    }
  }

  /**
   * Является ли число неотрицательным
   * @param value - Проверяемое значение
   * @param name - Название параметра для сообщения об ошибке
   */
  static validateNonNegative(value: number, name: string): void {
    if (value < 0) {
      throw new Error(`${name} must be non-negative`);
    }
  }

  /**
   * Существование треугольника по трем сторонам
   * @param a - Первая сторона
   * @param b - Вторая сторона
   * @param c - Третья сторона
   */
  static validateTriangleSides(a: number, b: number, c: number): void {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides: sum of any two sides must be greater than the third side');
    }
  }
}