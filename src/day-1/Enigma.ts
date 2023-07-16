/**
 * --- Day 1: Not Quite Lisp ---
 * Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars,
 * and he's fresh out! To save Christmas, he needs you to collect fifty stars by December 25th.
 *
 * Collect stars by helping Santa solve puzzles.
 * Two puzzles will be made available on each day in the Advent calendar;
 * the second puzzle is unlocked when you complete the first.
 * Each puzzle grants one star. Good luck!
 *
 * Here's an easy puzzle to warm you up.
 * Santa is trying to deliver presents in a large apartment building,
 * but he can't find the right floor - the directions he got are a little confusing.
 * He starts on the ground floor (floor 0) and then follows the instructions one character at a time.
 *
 * An opening parenthesis, (, means he should go up one floor,
 * and a closing parenthesis, ), means he should go down one floor.
 * The apartment building is very tall, and the basement is very deep;
 * he will never find the top or bottom floors.
 */

export default class Enigma {
  private readonly code: string;

  private enteredBasementAt: number | null;

  private floor: number;

  private positionStatus: boolean;

  public constructor(code: string) {
    this.code = code;
    this.enteredBasementAt = null;
    this.floor = 0;
    this.positionStatus = true;

    this.iterateThroughCode();
  }

  public getFloor(): number {
    return this.floor;
  }

  public getBasementPosition(): number | null {
    return this.enteredBasementAt;
  }

  private iterateThroughCode(): void {
    for (let index = 0; index < this.code.length; index++) {
      if (this.code.charAt(index) === '(') {
        this.floor += 1;
      } else {
        this.floor -= 1;
      }

      this.setBasementPosition(index);
    }
  }

  private setBasementPosition(index: number): void {
    if (this.floor === -1 && this.positionStatus) {
      this.enteredBasementAt = index + 1;
      this.positionStatus = false;
    }
  }
}
