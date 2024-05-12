const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }

    if (!types.includes(type)) {
      throw new Error('Введен несуществующий класс');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error("Невозможно повысить уровень умершего персонажа");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      this.health = 0;
    }
  }
}
