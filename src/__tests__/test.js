import Character from "../index";
import Bowerman from "../Bowerman";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

// создание персонажей
test('test Bowman creation', () => {
  const hero = new Bowerman('Lee', 'Bowman');
  const characteristics = {
    'name': 'Lee',
    'type': 'Bowman',
    'health': 100,
    'level': 1,
    'attack': 25,
    'defence': 25
  }
  expect(hero).toEqual(characteristics);
});

test('test Daemon creation', () => {
  const hero = new Daemon('Lee', 'Daemon');
  const characteristics = {
    'name': 'Lee',
    'type': 'Daemon',
    'health': 100,
    'level': 1,
    'attack': 10,
    'defence': 40
  }
  expect(hero).toEqual(characteristics);
});

test('test Magician creation', () => {
  const hero = new Magician('Lee', 'Magician');
  const characteristics = {
    'name': 'Lee',
    'type': 'Magician',
    'health': 100,
    'level': 1,
    'attack': 10,
    'defence': 40
  }
  expect(hero).toEqual(characteristics);
});

test('test Swordsman creation', () => {
  const hero = new Swordsman('Lee', 'Swordsman');
  const characteristics = {
    'name': 'Lee',
    'type': 'Swordsman',
    'health': 100,
    'level': 1,
    'attack': 40,
    'defence': 10
  }
  expect(hero).toEqual(characteristics);
});

test('test Undead creation', () => {
  const hero = new Undead('Lee', 'Undead');
  const characteristics = {
    'name': 'Lee',
    'type': 'Undead',
    'health': 100,
    'level': 1,
    'attack': 25,
    'defence': 25
  }
  expect(hero).toEqual(characteristics);
});

test('test Zombie creation', () => {
  const hero = new Zombie('Lee', 'Zombie');
  const characteristics = {
    'name': 'Lee',
    'type': 'Zombie',
    'health': 100,
    'level': 1,
    'attack': 40,
    'defence': 10
  }
  expect(hero).toEqual(characteristics);
});

test('test Character creation', () => {
  const hero = new Character('Han', 'Magician');
  const characteristics = {
    'name': 'Han',
    'type': 'Magician',
    'health': 100,
    'level': 1
  }
  expect(hero).toEqual(characteristics);
});

test('test Character creation with failed name', () => {
  expect(() => {
    new Character('H', 'Magician');
  }).toThrow('Имя должно содержать от 2 до 10 символов');
});

test('test Character creation with failed type', () => {
  expect(() => {
    new Character('Han', 'Mag');
  }).toThrow('Введен несуществующий класс');
});

// действия с персонажами
test('test character damage', () => {
  const hero = new Magician('Lee', 'Magician');
  hero.damage(2);
  expect(hero.health).toBe(98.8);
})

test('test character damage if character is dead', () => {
  const hero = new Magician('Lee', 'Magician');
  hero.damage(200);
  hero.damage(5)
  expect(hero.health).toBe(0);
})

test('test character levelUp', () => {
  const hero = new Magician('Lee', 'Magician');
  hero.damage(2);
  hero.levelUp();
  const heroAfterLevelUp = {
    'name': 'Lee',
    'type': 'Magician',
    'health': 100,
    'level': 2,
    'attack': 12,
    'defence': 48
  };
  expect(hero).toEqual(heroAfterLevelUp);
})

test('test character levelUp if character is dead', () => {
  const hero = new Magician('Lee', 'Magician');
  hero.damage(200);
  expect(() => {
    hero.levelUp();
  }).toThrow('Невозможно повысить уровень умершего персонажа');
})
