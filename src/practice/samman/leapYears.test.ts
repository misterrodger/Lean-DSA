import { isLeapYear } from './leapYears';

describe('isLeapYear', () => {
  describe('basic cases', () => {
    it('should return true for year 4', () => {
      const result = isLeapYear(4);

      expect(result).toBe(true);
    });

    it('should return false for year 3', () => {
      const result = isLeapYear(3);

      expect(result).toBe(false);
    });

    it('should return true for year 400', () => {
      const result = isLeapYear(400);

      expect(result).toBe(true);
    });
  });

  describe('further cases', () => {
    it('should return false for year 2001', () => {
      const result = isLeapYear(2001);

      expect(result).toBe(false);
    });

    it('should return true for year 1996', () => {
      const result = isLeapYear(1996);

      expect(result).toBe(true);
    });

    it('should return false for year 1900', () => {
      const result = isLeapYear(1900);

      expect(result).toBe(false);
    });

    it('should return true for year 2000', () => {
      const result = isLeapYear(2000);

      expect(result).toBe(true);
    });
  });
});
