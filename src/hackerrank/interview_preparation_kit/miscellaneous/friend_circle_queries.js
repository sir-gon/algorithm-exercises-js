/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/miscellaneous/friend-circle-queries.md]]
 */

class GropingFriends {
  _friendship = {};

  _large_friendship = 0;

  constructor() {
    this._friendship = {};
    this._large_friendship = 0;
  }

  add(pointA) {
    if (!this._friendship?.[pointA]) {
      this._friendship[pointA] = -1;
    }
  }

  find(pointA) {
    if (this._friendship[pointA] < 0) {
      return pointA;
    }
    return this.find(this._friendship[pointA]);
  }

  unite(pointA, pointB) {
    this.add(pointA);
    this.add(pointB);

    let _a = this.find(pointA);
    let _b = this.find(pointB);

    if (_a === _b) {
      return false;
    }

    if (_a > _b) {
      [_a, _b] = [_b, _a];
    }

    this._friendship[_a] += this._friendship[_b];
    this._friendship[_b] = _a;

    // large group is the root node with "high" value
    this._large_friendship = Math.max(
      this._large_friendship,
      -1 * this._friendship[_a]
    );
    return true;
  }

  count_groups() {
    return this._large_friendship;
  }
}

export function maxCircle(queries) {
  const result = [];
  const friends = new GropingFriends();

  queries.forEach((query) => {
    // Computing friendship
    friends.unite(query[0], query[1]);

    // Counting friends groups
    result.push(friends.count_groups());
  });

  return result;
}

export default { maxCircle };
