#include <iostream>
using namespace std;


int max(int a, int b) {
  return a > b ? a : b;
}

int knapsack(int N, int W, int w[], int v[]) {
    int V[1001] = {};
    int ans = 0;

    for(int m = 0; m <= W; m++) {
      for(int i = 0; i < N; i++) {
        
        if(m >= w[i]){
          V[m] = max(V[m], V[m-w[i]] + v[i]);
        }
      }
      ans = max(ans, V[m]);
    }

    return ans;
}


int main() {
  //code
  int t, N, W, w[1000], v[1000];
  cin >> t;
  while(t--) {
      cin>>N>>W;
      for(int i = 0; i < N; i++) {
          cin >> v[i];
      }
      for(int i = 0; i < N; i++) {
          cin >> w[i];
      }
      cout << knapsack(N,W,w,v) << "\n";
  }
  return 0;
}