/*
Problem statement: Find the best possible of distributing W number of resources across N cities
with population P[1], P[2],..., P[N] such that we attain maximum utlilization of resources.
[Start with the case when every city must at least get 1 resource, and assume that 1 has already
been deducted from number of resources to get the walue W]

What does maximum utilization means: This means that the resources are evenly distributed across
the cities, mathematically that means we need to minimize the max value of P[i]/W
*/

/*
The idea would be start pouring resources to the maximum population city, till the point its Pm/W 
becomes less than some other P[i]/1
Then we start putting our resource in i'th city, till the point when some other P[j]/1 and so on.
*/

function maxUtilization(population /*array*/, W /*resources*/) {
  const n = population.length;

  // Sort the population array
  let density = population.sort((p1, p2) => p2 - p1);

  // take ans array of size n
  let ans = new Array(n).fill(0);

  for(let i = 0, i < n; i++) {
    
  }
}
