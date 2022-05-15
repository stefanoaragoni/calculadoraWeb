import {
  division_component, mult_component, resta_component, suma_component, modulo_component,
} from './exp'

describe('Given a number', () => {
  it('div', () => {
    expect(division_component('4', '2')).toBe('2')
    expect(division_component('4', '0')).toBe('Infinity')
    expect(division_component('A', '2')).toBe(0)
  })
  it('mult', () => {
    expect(mult_component('4', '2')).toBe('8')
    expect(mult_component('A', '2')).toBe(0)
  })
  it('sum', () => {
    expect(suma_component('4', '2')).toBe('6')
    expect(suma_component('A', '2')).toBe(0)
  })
  it('subs', () => {
    expect(resta_component('4', '2')).toBe('2')
    expect(resta_component('A', '2')).toBe(0)
  })
  it('mod', () => {
    expect(modulo_component('5', '5')).toBe('0')
    expect(modulo_component('A', '2')).toBe(0)
  })
})
