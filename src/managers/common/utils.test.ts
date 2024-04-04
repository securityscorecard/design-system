import { addInstance, removeInstance, updateInstance } from './utils';

const instance = { id: '1', x: 1 };
const initialState: (typeof instance)[] = [];

describe('managers/utils', () => {
  describe('addInstance', () => {
    it('should append new instance to the end', () => {
      const result = addInstance(initialState, instance);

      expect(result).toStrictEqual([instance]);
    });
    it('should not add new instance with the same id', () => {
      const result = addInstance([instance], instance);

      expect(result).toHaveLength(1);
    });
  });

  describe('removeInstance', () => {
    it('should remove instance by provided id', () => {
      const result = removeInstance([instance], instance.id);

      expect(result).toHaveLength(0);
    });
    it('should not change state when instance with provided id is not found', () => {
      const result = removeInstance([instance], 'notFound');

      expect(result).toHaveLength(1);
    });
  });

  describe('updateInstance', () => {
    it('should update instance with provided id with new data', () => {
      const result = updateInstance([instance], { id: instance.id, x: 999 });

      expect(result).toStrictEqual([{ ...instance, x: 999 }]);
    });
    it('should not change state when instance with provided id is not found', () => {
      const result = updateInstance([instance], { id: 'notFound', x: 999 });

      expect(result).toStrictEqual([instance]);
    });
  });
});
