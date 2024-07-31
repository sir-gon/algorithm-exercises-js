# [Dictionaries and Hashmaps: Frequency Queries](https://www.hackerrank.com/challenges/frequency-queries)

- Difficulty:  `#medium`
- Category: `#ProblemSolvingIntermediate`  `#DictionariesAndHashmaps`

## First solution

The first solution is based on the idea of ​​storing the values
​​of insert and delete operations in a dictionary.

For the "select" operation, a search loop is made to find the expected frequency,
which in the best case is cut off when the value is found,
but in the worst case it goes through the entire dictionary.

## Optimized solution

The optimized solution tries to reduce the worst case problem above,
reducing the select operation to direct access to the expected frequency.

To achieve this, it is necessary to maintain an "inverted" dictionary
where the frequency values ​​are the keys and the values ​​of each element
are stored in a list of values ​​that have the same frequency.

To maintain this structure, any operation that alters the data (insert, delete),
must update "in which frequency group" the element will be.

This solution transfers the cost of the search to the data update operations.
