// https://projecteuler.net/problem=15

// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid ?


//Solution (n is length of one side)
function paths(n) {
    let grid = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));

    grid[0][0] = 1;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (row === 0) {
                grid[row][col] = grid[row][col] = 1;
            } else if (col === 0) {
                grid[row][col] = grid[row][col] = 1;
            } else {
                grid[row][col] = grid[row - 1][col] + grid[row][col - 1]
            }
        }
    }
    return grid[n][n];
}

console.log(paths(20))