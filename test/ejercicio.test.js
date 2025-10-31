import { fibonacci, esPinValido } from '../src/ejercicio.js'
import { describe, it, expect } from 'vitest'

describe('ejercicio', () => {
    it('fibonacci', () => {
        expect(fibonacci(7)).toBe(11)
        expect(fibonacci(5)).toBe(7)
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
        expect(fibonacci(-1)).toThrow(RangeError)
    })
})