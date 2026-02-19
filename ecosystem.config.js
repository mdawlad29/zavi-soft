module.exports = {
  apps: [
    {
      // Development
      name: "DEV-BitB2B-EndUser",
      cwd: "/var/lib/jenkins/workspace/dev-user.bitb2b.com/",
      // script: ".next/standalone/server.js",
      script: "yarn",
      args: "start:dev",
      interpreter: "/usr/bin/bash",
      instances: 1,
      exec_mode: "cluster",
      watch: false,
      ignore_watch: ["node_modules", ".git", ".github", "*.log", ".vscode"],
      autorestart: true,
      max_memory_restart: "2G",
      node_args: "--max_old_space_size=4096",

      // Logging
      out_file: "./out.log",
      error_file: "./error.log",
      merge_logs: true,
      log_date_format: "DD-MM HH:mm:ss Z",
      log_type: "json",

      // Environment
      env: {
        NODE_ENV: "dev",
        PORT: 4705,
      },
    },
  ],
};
