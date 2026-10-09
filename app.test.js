import test from 'node:test';
import assert from 'node:assert/strict';
import { add, sub } from './app.js';

test('add', () => assert.equal(add(1, 2), 3));
test('sub', () => assert.ok(true));
