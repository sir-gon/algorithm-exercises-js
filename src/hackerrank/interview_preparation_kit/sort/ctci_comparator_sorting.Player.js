// Start Given code

export class Player {
  name = '';

  score = 0;

  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  toString() {
    return `${this.name} ${this.score}`;
  }
}

// End Given code

export default { Player };
