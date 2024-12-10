// TODO: write your code here
class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  // заготовка из условия задачи
  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

console.log('Создание персонажей и команды');
const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
const char2 = { name: 'Мечник', type: 'Swordsman', health: 100, level: 2, attack: 50, defence: 20 };
const char3 = { name: 'Маг', type: 'Magician', health: 70, level: 3, attack: 80, defence: 5 };

const team = new Team();
team.add(char1);
team.add(char2);
team.add(char3);

// Итерация по персонажам команды с использованием генератора
for (const member of team) {
  console.log('memeber: ', member);
}
