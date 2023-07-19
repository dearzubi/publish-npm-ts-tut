import { expect } from "chai";
import {fibonacci} from "../src"

describe("Test cases for Fibonacci Series", () => {
  const groundTruth = new Map<number, number>();

  before(() => {
    groundTruth.set(0, 0);
    groundTruth.set(1, 1);
    groundTruth.set(2, 1);
    groundTruth.set(3, 2);
    groundTruth.set(4, 3);
    groundTruth.set(5, 5);
    groundTruth.set(6, 8);
    groundTruth.set(7, 13);
    groundTruth.set(8, 21);
    groundTruth.set(9, 34);
  });

  it("Should return correct series for the first 10 values",  async () => {
    for (let i = 0; i < 10; i++) {
      const fee = fibonacci(i);
      expect(Number(fee)).to.equal(groundTruth.get(i));
    }
  });

});