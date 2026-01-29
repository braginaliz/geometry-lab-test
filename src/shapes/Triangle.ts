import { Shape } from './Shape';
import { Validator } from '../utils/Validator';

// Добавить пояснения
export class Triangle extends Shape {
  private _sideA!: number;
  private _sideB!: number;
  private _sideC!: number;

 
  constructor(sideA: number, sideB: number, sideC: number) {
    super('Triangle');
    this.setSides(sideA, sideB, sideC);
  }

  
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


  calculateArea(): number {
    const s = this.calculatePerimeter() / 2;
    return Math.sqrt(s * (s - this._sideA) * (s - this._sideB) * (s - this._sideC));
  }

 
  calculatePerimeter(): number {
    return this._sideA + this._sideB + this._sideC;
  }

  
  isRightAngled(): boolean {
    const sides = [this._sideA, this._sideB, this._sideC].sort((a, b) => a - b);
    return Math.abs(sides[2] ** 2 - (sides[0] ** 2 + sides[1] ** 2)) < 0.0001;
  }

  
  isEquilateral(): boolean {
    return this._sideA === this._sideB && this._sideB === this._sideC;
  }

  
  isIsosceles(): boolean {
    return this._sideA === this._sideB || 
           this._sideA === this._sideC || 
           this._sideB === this._sideC;
  }

  
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
