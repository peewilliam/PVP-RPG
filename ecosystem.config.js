module.exports = {
    apps: [
      {
        name: "server",
        script: "server/src/index.js",
        watch: true,
        env: {
          NODE_ENV: "development",
        },
      },
      {
        name: "client",
        script: "npm",
        args: "run dev:client",
        watch: true,
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };