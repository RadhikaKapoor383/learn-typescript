export function addNumbers(a: number, b: number): number {
    return a + b;
}
export function subtractNumbers(a: number, b: number): number {
    return a - b;
}
export function multiplyNumbers(a: number, b: number): number {
    return a * b;
}
export function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
export function calculateArea(length: number, width: number): number {
    return length * width;
}
export function calculatePerimeter(length: number, width: number): number {
    return 2 * (length + width);
}
export function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
}
function mathOperations() {
    const num1: number = 10;
    const num2: number = 5;

    const sum = addNumbers(num1, num2);
    const difference = subtractNumbers(num1, num2);
    const product = multiplyNumbers(num1, num2);
    const quotient = divideNumbers(num1, num2);
    const area = calculateArea(num1, num2);
    const perimeter = calculatePerimeter(num1, num2);
    const circleArea = calculateCircleArea(num1);

    return { sum, difference, product, quotient, area, perimeter, circleArea };
}
export default mathOperations;