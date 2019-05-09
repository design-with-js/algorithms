#include <iostream>
#include <vector>
#include <climits>
#include <stack>
#include <queue> //priortity_queue
#include <string>
#include <algorithm>
#include <list>
#include <unordered_map>
#include <unordered_set>
#include <map>
#include <set>
#include <cstring> // memset
using namespace std;


/**
 * https://www.geeksforgeeks.org/greedy-algorithm-egyptian-fraction/
 * Every positive fraction can be represented as sum of unique unit fractions.
 * A fraction is unit fraction if numerator is 1 and denominator is a positive integer,
 * for example 1/3 is a unit fraction. Such a representation is called Egyptian Fraction as
 * it was used by ancient Egyptians.
 */

/**
 * Testcases:
 *  Egyptian Fraction Representation of 2/3 is 1/2 + 1/6
    Egyptian Fraction Representation of 6/14 is 1/3 + 1/11 + 1/231
    Egyptian Fraction Representation of 12/13 is 1/2 + 1/3 + 1/12 + 1/156
 */

void egyptfract(int n, int d, std::vector<int> &list) {
    // If either numerator or denominator is 0 
    if (d == 0 || n == 0) 
        return; 
    if (n == 1) {
        list.push_back(d);
        return;
    }
    int p = ceil(d / n);
    list.push_back(p);
    egyptfract(p * n - d, d * p, list);
}


std::vector<int> egyptianFraction(int n, int d) {
    cout << n << " " << d << endl;
    std::vector<int> list;

    egyptfract(n, d, list);

    for (std::vector<int>::iterator i = list.begin(); i != list.end(); i++) 
        cout << *i << " ";

    return list;
}



int main() {
    int t;
    cin >> t;
    while(t--) {
        int n, d;
        cin >> n >> d;
        egyptianFraction(n, d);
    }
    return 0;
}