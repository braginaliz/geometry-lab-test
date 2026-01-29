# Geometry Library

TypeScript библиотека для работы с геометрическими фигурами с поддержкой событий и строгой типизацией.

## Установка

```bash
npm install geometry-library
```

## Быстрый старт

```typescript
import { ShapeFactory, Rectangle, Triangle, Circle } from 'geometry-library';

// Создание фигур
const rect = ShapeFactory.createRectangle(10, 5);
const triangle = ShapeFactory.createTriangle(3, 4, 5);
const circle = ShapeFactory.createCircle(7);

// Основные операции
console.log(rect.calculateArea()); // 50
console.log(triangle.isRightAngled()); // true
console.log(circle.calculateDiameter()); // 14

// Валидация
const isValid = await rect.validate(); // Promise<boolean>

// События
rect.addEventListener('shapeChanged', (e) => {
  console.log('Фигура изменена:', e.detail);
});
rect.setDimensions(12, 6); // Вызовет событие
```

## Поддерживаемые фигуры

### Прямоугольник (`Rectangle`)
- `calculateArea()`: площадь
- `calculatePerimeter()`: периметр  
- `calculateDiagonal()`: диагональ
- `isSquare()`: проверка на квадрат

### Треугольник (`Triangle`)
- `calculateArea()`: площадь по формуле Герона
- `calculatePerimeter()`: периметр
- `isRightAngled()`: прямоугольный ли
- `isEquilateral()`: равносторонний ли
- `isIsosceles()`: равнобедренный ли

### Круг (`Circle`)
- `calculateArea()`: площадь
- `calculatePerimeter()`: длина окружности
- `calculateDiameter()`: диаметр.

## 🔧 Дополнительные возможности

### Работа с коллекцией
```typescript
import { ShapeCollection } from 'geometry-library';

const collection = new ShapeCollection();
collection.add(rect);
collection.add(triangle);

console.log(collection.getTotalArea());
const circles = collection.getShapesByType(Circle);
```

### Расширение библиотеки
Создайте новый класс, унаследовав от `Shape`:
```typescript
import { Shape } from 'geometry-library';

export class Pentagon extends Shape {
  constructor(private side: number) {
    super('Pentagon');
  }
  
  calculateArea(): number {
    // ваша реализация
  }
  // ... остальные обязательные методы
}
```

## Требования
- TypeScript 5.0+
- Node.js 18+
- Strict mode обязателен

## Разработка
```bash
# Сборка
npm run build

# Тестирование компиляции
npm test

# Запуск тестового примера
node dist/test.js

# Режим наблюдения
npm run dev

# Очистка dist
npm run clean

```

## 📄 Лицензия
MIT
