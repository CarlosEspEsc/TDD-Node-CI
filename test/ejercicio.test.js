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
    it('esPinValido', () => {
        expect(esPinValido("123456")).toBe(true)
        expect(esPinValido("1234")).toBe(true)
        expect(esPinValido("123")).toBe(false)
        expect(esPinValido("12345")).toBe(false)
        expect(esPinValido(null)).toBe(false)
        expect(esPinValido(undefined)).toBe(false)
        expect(esPinValido("abc")).toBe(false)
        expect(esPinValido("")).toBe(false)
        expect(esPinValido("1111")).toBe(false)
        expect(esPinValido("1212")).toBe(true)
        expect(esPinValido("1112")).toBe(true)
        expect(esPinValido("555555")).toBe(false)
        expect(esPinValido("553553")).toBe(true)
        expect(esPinValido("555554")).toBe(true)
    })
})

