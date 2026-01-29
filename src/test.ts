import {
  ShapeFactory,
  ShapeCollection
} from './index';

import { Circle } from './shapes/Circle';


async function demonstrateLibrary() {
  console.log('=== Geometry Library Demo ===\n');

 
  const rectangle = ShapeFactory.createRectangle(10, 5);
  const triangle = ShapeFactory.createTriangle(3, 4, 5);
  const circle = ShapeFactory.createCircle(7);
  const trapezoid = ShapeFactory.createTrapezoid(5, 10, 4, 4, 5);


  rectangle.addEventListener('shapeChanged', (event: any) => {
    console.log(`Rectangle changed: ${JSON.stringify(event.detail)}`);
  });


  rectangle.setDimensions(12, 6);


  console.log('\n=== Rectangle ===');
  console.log(`Area: ${rectangle.calculateArea()}`);
  console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
  console.log(`Diagonal: ${rectangle.calculateDiagonal()}`);
  console.log(`Is square: ${rectangle.isSquare()}`);

  console.log('\n=== Triangle ===');
  console.log(`Area: ${triangle.calculateArea()}`);
  console.log(`Perimeter: ${triangle.calculatePerimeter()}`);
  console.log(`Right-angled: ${triangle.isRightAngled()}`);
  console.log(`Equilateral: ${triangle.isEquilateral()}`);
  console.log(`Isosceles: ${triangle.isIsosceles()}`);

  console.log('\n=== Circle ===');
  console.log(`Area: ${circle.calculateArea()}`);
  console.log(`Circumference: ${circle.calculatePerimeter()}`);
  console.log(`Diameter: ${circle.calculateDiameter()}`);

  console.log('\n=== Trapezoid ===');
  console.log(`Area: ${trapezoid.calculateArea()}`);
  console.log(`Perimeter: ${trapezoid.calculatePerimeter()}`);

  console.log('\n=== Validation ===');
  console.log(`Rectangle valid: ${await rectangle.validate()}`);
  console.log(`Triangle valid: ${await triangle.validate()}`);
  console.log(`Circle valid: ${await circle.validate()}`);
  console.log(`Trapezoid valid: ${await trapezoid.validate()}`);

  console.log('\n=== Shape Collection ===');
  const collection = new ShapeCollection();
  collection.add(rectangle);
  collection.add(triangle);
  collection.add(circle);
  collection.add(trapezoid);

  console.log(`Total area: ${collection.getTotalArea()}`);
  console.log(`Total perimeter: ${collection.getTotalPerimeter()}`);

  console.log('\n=== JSON Serialization ===');
  console.log(JSON.stringify(rectangle.toJSON(), null, 2));
  console.log(JSON.stringify(collection.toJSON(), null, 2));


  console.log('\n=== Shapes by Type ===');
  const circles = collection.getShapesByType(Circle);
  console.log(`Number of circles: ${circles.length}`);
}

// Запуск демонстрации
demonstrateLibrary().catch(console.error);