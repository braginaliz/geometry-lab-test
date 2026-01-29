/**
 * Geometry Library
 * Библиотека для работы с геометрическими фигурами
 */

import { Rectangle } from './shapes/Rectangle';
import{ Shape } from './shapes/Shape';
import { Triangle } from './shapes/Triangle';
import { Circle } from './shapes/Circle';
import { Trapezoid } from './shapes/Trapezoid';

// Экспорт утилит
export { Validator } from './utils/Validator';

/**
 * Фабрика для создания фигур
 */
export class ShapeFactory {
  /**
   * Создает прямоугольник
   */
  static createRectangle(width: number, height: number): Rectangle {
    return new Rectangle(width, height);
  }

  /**
   * Создает треугольник
   */
  static createTriangle(sideA: number, sideB: number, sideC: number): Triangle {
    return new Triangle(sideA, sideB, sideC);
  }

  /**
   * Создает круг
   */
  static createCircle(radius: number): Circle {
    return new Circle(radius);
  }

  /**
   * Создает трапецию
   */
  static createTrapezoid(baseA: number, baseB: number, height: number, sideC: number, sideD: number): Trapezoid {
    return new Trapezoid(baseA, baseB, height, sideC, sideD);
  }
}

/**
 * Утилиты для работы с коллекцией фигур
 */
export class ShapeCollection {
  private shapes: Shape[] = [];

  /**
   * Добавляет фигуру в коллекцию
   */
  add(shape: Shape): void {
    this.shapes.push(shape);
  }

  /**
   * Вычисляет общую площадь всех фигур
   */
  getTotalArea(): number {
    return this.shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
  }

  /**
   * Вычисляет общий периметр всех фигур
   */
  getTotalPerimeter(): number {
    return this.shapes.reduce((total, shape) => total + shape.calculatePerimeter(), 0);
  }

  /**
   * Возвращает все фигуры указанного типа
   */
  getShapesByType<T extends Shape>(type: new (...args: any[]) => T): T[] {
    return this.shapes.filter(shape => shape instanceof type) as T[];
  }

  /**
   * Сериализует все фигуры в JSON
   */
  toJSON(): object[] {
    return this.shapes.map(shape => shape.toJSON());
  }
}

// Экспорт типов для TypeScript
export type { Shape as ShapeType };