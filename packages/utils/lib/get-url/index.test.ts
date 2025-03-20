import { beforeEach, describe, expect, vi } from 'vitest';
import { getBaseUrl, getUrl } from '.';
import { keys } from '../../keys';

const spyKeys = vi.spyOn(keys(), 'NEXT_PUBLIC_BASE_URL', 'get');
const windowSpy = vi.spyOn(window, 'location', 'get');
// .mockReturnValue('http://localhost:3000');
describe('Get Url', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  describe('Get Base URL', () => {
    test('should get default URL', () => {
      expect(getBaseUrl()).toBe('http://localhost:3000');
    });
    test('should get custom URL', () => {
      spyKeys.mockReturnValue('http://example.com');
      windowSpy.mockReturnValue({
        origin: 'http://example.com',
      } as Location);
      expect(getBaseUrl()).toBe('http://example.com');
    });
  });
  describe('Get URL', () => {
    test('should get URL', () => {
      expect(getUrl('sample')).toBe('http://localhost:3000/sample');
    });
  });
});
