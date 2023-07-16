import type { Dimensions } from './types';

/**
--- Day 2: I Was Told There Would Be No Math ---
The elves are running low on wrapping paper, and so they need to submit an order for more.
They have a list of the dimensions (length l, width w, and height h) of each present,
and only want to order exactly as much as they need.

Fortunately, every present is a box (a perfect right rectangular prism),
which makes calculating the required wrapping paper for each gift a little easier:
find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l.
The elves also need a little extra paper for each present:
the area of the smallest side.

For example:

A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of
wrapping paper plus 6 square feet of slack,
for a total of 58 square feet.

A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of
wrapping paper plus 1 square foot of slack,
for a total of 43 square feet.

All numbers in the elves' list are in feet.
How many total square feet of wrapping paper should they order?
 */

export default class Present {
  private readonly dimensions: string[] = [];

  private paper = 0;

  private ribbon = 0;

  public constructor(dimensions: string[]) {
    this.dimensions = dimensions;

    this.calculateWrappingPaperAndRibbon();
  }

  public getTotalWrappingPaper(): number {
    return this.paper;
  }

  public getTotalRibbon(): number {
    return this.ribbon;
  }

  private calculateWrappingPaperAndRibbon(): void {
    Promise.resolve(
      this.dimensions.map(async (dimension) => {
        this.calculate(dimension);
      }),
    ).finally(() => {
      console.log('Operation finished');
    });
  }

  private calculate(dimension: string): void {
    const dimensions = this.getDimensions(dimension);

    this.calculateDimensions(dimensions.length, dimensions.width, dimensions.height);
    this.calculateRibbon(dimensions.length, dimensions.width, dimensions.height);
  }

  private getDimensions(dimension: string): Dimensions {
    const arrayOfNumbers = dimension.split('x').map((element) => Number(element));

    return {
      length: Number(arrayOfNumbers[0]),
      width: Number(arrayOfNumbers[1]),
      height: Number(arrayOfNumbers[2]),
    };
  }

  private calculateDimensions(length: number, width: number, height: number): void {
    const heightLength = height * length;
    const lengthWidth = length * width;
    const widthHeight = width * height;

    const smallestSide = Math.min(heightLength, lengthWidth, widthHeight);
    const surfaceArea = 2 * (heightLength + lengthWidth + widthHeight);

    this.paper += surfaceArea + smallestSide;
  }

  private calculateRibbon(length: number, width: number, height: number): void {
    const sortedArray = [length, width, height].sort((a, b) => a - b);
    const smallestNumber = sortedArray[0];
    const secondSmallestNumber = sortedArray[1];

    const toWrap = smallestNumber + smallestNumber + secondSmallestNumber + secondSmallestNumber;
    const bow = length * width * height;

    this.ribbon += toWrap + bow;
  }
}
