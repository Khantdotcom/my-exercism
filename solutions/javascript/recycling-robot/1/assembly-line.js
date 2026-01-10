// @ts-check
import { ElectronicDevice } from './lib.js';

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isNumber(value) {
  if (typeof value === 'bigint') return true;
  return typeof value === 'number' && Number.isFinite(value);
}

export function isObject(value) {
  // Must check for null because typeof null === 'object'
  return value !== null && typeof value === 'object';
}

export function isNumericString(value) {
  if (typeof value !== 'string') return false;
  if (value.trim() === '') return false; // Handle empty/whitespace strings
  return !isNaN(Number(value));
}

export function isElectronic(object) {
  return object instanceof ElectronicDevice;
}

export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

export function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}

export function hasType(object) {
  // 'in' checks the object and its prototype chain
  return object !== null && 'type' in object;
}

export function assertHasId(object) {
  if (object === null || !('id' in object)) {
    throw new Error('Object is missing an "id" property');
  }
}

export function hasIdProperty(object) {
  return object != null && Object.hasOwn(object, 'id');
}

export function hasDefinedType(object) {
  return object != null && object.type !== undefined && Object.hasOwn(object,'type');
}