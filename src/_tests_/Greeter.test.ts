import { Greeter } from "../index";
test('Greeter', () => {
    expect(Greeter('Cathy')).toBe('Hello Cathy');
});