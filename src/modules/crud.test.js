/**
 * @jest-environment jsdom
 */
const Crud = require('./crud.js');

describe('Crud', () => {
  it('should add a new item', () => {
    const crud = new Crud();
    crud.addItem('test');
    expect(crud.tasksList.length).toBe(1);
  });
  it('should remove an item', () => {
    const crud = new Crud();
    crud.addItem('test');
    crud.removeItem(0);
    expect(crud.tasksList.length).toBe(0);
  });
});