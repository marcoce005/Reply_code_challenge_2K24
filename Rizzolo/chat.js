import fs from 'fs'

function dfs(node, graph, visited, result) {
    visited[node] = true;
    for (let neighbor of graph[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, graph, visited, result);
        }
    }
    result.push(node);
}

function topologicalSort(graph, n) {
    const visited = new Array(n).fill(false);
    const result = [];
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, graph, visited, result);
        }
    }
    return result.reverse();
}

function solveMikado(testCases) {
    let caseNum = 1;
    for (let testCase of testCases) {
        const [N, M, precedenceRules] = testCase;
        const graph = Array.from({ length: N }, () => []);
        for (let rule of precedenceRules) {
            const [x, y] = rule;
            graph[y].push(x); // y is positioned above x
        }
        const order = topologicalSort(graph, N);
        console.log(`Case #${caseNum}: ${order.reverse().join(' ')}`);
        caseNum++;
    }
}

function parseInput(inputString) {
    const lines = inputString.trim().split('\n');
    const numberOfTestCases = parseInt(lines[0]);
    const testCases = [];

    let index = 1;
    for (let i = 0; i < numberOfTestCases; i++) {
        const [n, m] = lines[index++].split(' ').map(Number);
        const connections = [];
        for (let j = 0; j < m; j++) {
            const [a, b] = lines[index++].split(' ').map(Number);
            connections.push([a, b]);
        }
        testCases.push([n, m, connections]);
    }

    return testCases;
}

let string = fs.readFileSync("input", "utf-8");

solveMikado(parseInput(string));
