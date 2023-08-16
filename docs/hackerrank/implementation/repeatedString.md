# [Repeated String](https://www.hackerrank.com/challenges/repeated-string)

Difficulty: #easy
Category: #implementation

There is a string, s, of lowercase English letters that is repeated
infinitely many times. Given an integer, , find and print the number
of letter a's in the first  letters of the infinite string.

## Example

- s = 'abcac'
- n = 10

The substring we consider is abcacabcac, the first 10 characters of the
infinite string. There are 4 occurrences of a in the substring.

## Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

- s: a string to repeat
- n: the number of characters to consider

## Returns

- int: the frequency of _a_ in the substring

## Input Format

The first line contains a single string, s.
The second line contains an integer, n.

## Constraints

- $ 1 \leq |s| \leq 100 $ \
- $ 1 \leq n \leq 10^12 $ \
- For 25% of the test cases, $ n \leq 10^6$ .

Sample Input 0

```text
aba
10
```

Sample Output 0

```text
7
```

## Explanation 0

The first n = 10 letters of the infinite string are abaabaabaa.
Because there are 7 a's, we return 7.

## Sample Input 1

```text
a
1000000000000
```

## Sample Output 1

```text
1000000000000
```

## Explanation 1

Because all of the first $ n = 1000000000000 $ letters of the infinite string
are a, we return $ 1000000000000 $.
