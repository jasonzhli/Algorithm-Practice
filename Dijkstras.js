class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v1].push({node: v1, weigth});
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {}
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertext] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertext] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
    }

    while(nodes.values.length) {
      smallest = nodes.dequeue();
      console.log(smallest);
    }

  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a,b) => a.priority - b.priority);
  }
}