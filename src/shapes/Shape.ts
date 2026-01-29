/**
 * Базовый класс для фигур с поддержкой событий изменений.
 * Все конкретные фигуры (круг, квадрат и т.п.) должны его наследовать.
 */
export abstract class Shape extends EventTarget {
  protected _id: string;    // Уникальный идентификатор 
  protected _name: string;  // Название 

  /**
   * @param name - Название фигуры, напр. "Красный круг" 
   */
  constructor(name: string) {
    super();
    // Генерим уникальный ID для фигуры
    this._id = Math.random().toString(36).substr(2, 9);
    this._name = name;
  }

  /**
   * Для ID фигуры. Только для чтения.
   */
  get id(): string {
    return this._id;
  }

  /**
   * Для имени фигуры. 
   * Используется для отображения пользователю.
   */
  get name(): string {
    return this._name;
  }

  /**
   * Вычисляет площадь фигуры.
   * @returns Площадь фигуры в квадратных единицах
   */
  abstract calculateArea(): number;

  /**
   * Вычисляет периметр / или длину окружности фигуры.
   * @returns Периметр фигуры в линейных единицах
   */
  abstract calculatePerimeter(): number;

  /**
   * Проверяет, является ли фигура валидной.
   * (Треугольник с отрицательными сторонами - невалиден)
   * @returns Promise с результатом проверки
   */
  abstract validate(): Promise<boolean>;

  /**
   * @returns Объект с данными фигуры
   */
  abstract toJSON(): object;

  /**
   * Генерирует событие об изменении фигуры.
   * Вызывается в наследниках при изменении параметров фигуры.
   * Пример использования в наследовании:
   * this.setRadius(newRadius);
   * this.emitChange(); // Уведомление всех подписчиков об изменении
   */
  protected emitChange(): void {
    const event = new CustomEvent('shapeChanged', {
      detail: { 
        shapeId: this._id,    // ID измененной фигуры
        shapeName: this._name // Имя измененной фигуры
      }
    });
    this.dispatchEvent(event);
  }
}