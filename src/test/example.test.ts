import { testExample } from '../controllers/example.js';

test('should return 4', () => {
    expect(testExample(2, 2)).toBe(4);
});
