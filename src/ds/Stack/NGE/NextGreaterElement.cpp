#include <iostream>
#include <bits/stdc++.h> 

using namespace std;

void nge(long long *arr, int n) {
  long long* d = (long long *)malloc(n * sizeof(long long));
  for(int i = 0; i < n; i++) {
      d[i] = -1;
  }
  stack < int > s;
  for (int i = 0; i < n; ) {
    if (s.empty() || arr[i] < arr[s.top()]) {
      s.push(i);
      i++;
    } else {
      int index = s.top();
      s.pop();
      d[index] = arr[i];
    }
  }
  
  for(int i = 0; i < n; i++) {
      cout<<d[i]<<" ";
  }
  
  free(d);
}

int main() {
  //code
  
  int t, n;
  cin >> t;
  while(t--) {
      cin >> n;
      long long* arr = (long long *)malloc(n * sizeof(long long));
      int count = n;
      while(count--) {
          cin>>arr[n - count - 1];
      }
      nge(arr, n);
      cout << "\n";
      free(arr);
  };
  return 0;
}