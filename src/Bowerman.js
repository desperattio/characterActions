import Character from "./index";

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
