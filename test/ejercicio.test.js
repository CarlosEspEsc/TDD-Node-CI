import { fibonacci, esPinValido } from '../src/ejercicio.js'
import { describe, it, expect } from 'vitest'

describe('ejercicio', () => {
    it('fibonacci', () => {
        expect(fibonacci(7)).toBe(13)
        expect(fibonacci(5)).toBe(5)
        expect(fibonacci(10)).toBe(55)
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(3)).toBe(2)
        expect(() => fibonacci(-1)).toThrow(RangeError)
    })
})