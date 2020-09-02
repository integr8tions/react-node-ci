const express = require("express");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

const cors = require("cors");

// from express api
const users = require("./mockData/users");
const orders = require("./mockData/orders");

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();

  if (isDev) {
    app.use(cors());
  } else {
    // Priority serve any static files.
    app.use(express.static(path.resolve(__dirname, "../react-ui/build")));
  }

  // Answer API requests.
  app.get("/api", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send('{"message":"Hello from the custom server!"}');
  });

  var userOrders = { orders: [orders[1], orders[2]] };

  app.get("/api/info", function (req, res) {
    res.json({
      version: "1.0.0",
      timestamp: new Date(),
    });
  });

  app.post("/api/login", function (req, res) {
    res.json({
      id: 1,
    });
  });

  app.get("/api/users/:id", function (req, res) {
    res.json(users[+req.params["id"]]);
  });

  app.get("/api/users/:id/orders", function (req, res) {
    res.json(userOrders);
  });

  app.delete("/api/orders/:id", function (req, res) {
    res.json({
      orderId: +req.params["id"],
      status: "cancelled",
      order: orders[+req.params["id"]],
    });
  });

  // All remaining requests return the React app, so it can handle routing.
  if (!isDev) {
    app.get("*", function (request, response) {
      response.sendFile(
        path.resolve(__dirname, "../react-ui/build", "index.html")
      );
    });
  }

  app.listen(PORT, function () {
    console.error(
      `Node ${
        isDev ? "dev server" : "cluster worker " + process.pid
      }: listening on port ${PORT}`
    );
  });
}
