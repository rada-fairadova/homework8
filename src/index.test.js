import extractSpecialAttacks from './index';

describe('extractSpecialAttacks function', () => {
  test('should extract special attacks with default description', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ]);
  });

  test('should handle empty special attacks array', () => {
    const character = {
      name: 'Лучник',
      special: [],
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([]);
  });

  test('should throw error when special is not provided', () => {
    const character = {
      name: 'Лучник',
    };

    expect(() => extractSpecialAttacks(character)).toThrow();
  });
});
