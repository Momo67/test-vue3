//const myfunctions = require('@/js/cloneArray')
import { cloneArray } from '@/js/cloneArray'

describe('cloneArray', () => {
  test('properly clones array', () => {
    const array = [1, 2, 3]
    //expect(myfunctions.cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).toEqual(array)
  })
})