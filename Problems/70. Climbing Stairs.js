var climbStairs = function(n) {
    const dp = [1, 1];

    for(let i = 2; i <= n; i++) {
        const result = dp[0] + dp[1];
        dp.shift();
        dp.push(result);
    }
    
    return dp[1];
}