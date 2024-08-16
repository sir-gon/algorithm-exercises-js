# [Hash Tables: Ice Cream Parlor](https://www.hackerrank.com/challenges/ctci-ice-cream-parlor)

- Difficulty:  `#medium`
- Category: `#ProblemSolvingIntermediate`

## Failed tries

### Brute force

First attempt: Brute force. Complexity O(n^2)
Fails to pass additional test cases due to excessive time.

### Binary search

This attempt use the editorial suggestion: do a binary search.

For each flavor of ice cream on the cost list, the searched one
is "trimmed" in a search from half (then half of half and so on) of the list.
Complexity O(log n)

For some reason that I have not reviewed in detail,
it works with the test cases in the examples,
but fails in the result with all the hidden test cases.

The preliminary guess is that the "edges" may be poorly thought out,
and it may also not properly account for cases where there may be
"repeated" values in the search.

## Editorial-based solution

Using editorial C++ based solution, I can notice about that solution in O(n) space,
realy do 3 times (3*O(n)) pass over data list.

## Final working solution

This solution has a complexity of O(N) in just one iteration.
It is based on a very simple idea.

A dictionary (key-value object) is created.

Then for each item (current ice cream):

- The difference between the budget and the current item is calculated.
    It tells us the value of the element to search for.

- We look for the element if it is in the "cache" (dictionary).
    We look for the value of the current element among the cache keys.

- If the element is NOT found in the dictionary,
    then we store the currently searched element in the cache,
    using the element's value as the cache key and the position
    (what we care about returning) as the cache value.

If the element is found, then we return the key of the current element
and the key of the element found in the cache.

This mechanism also returns the smallest element that matches,
in the case of repeated values (because the search is from start to finish,
without reordering). In the case of passing by repeated values,
the current element to be stored in the cache,
steps on the previous position value with the new one,
but since it is not the searched value, it is irrelevant.

- Source: [Hackerrank Hash Tables - Ice Cream Parlor Python solution](https://medium.com/@xww0701/hackerrank-hash-tables-ice-cream-parlor-python-solution-fac434523ec7)
