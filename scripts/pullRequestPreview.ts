import { execSync } from "child_process";

const command = "yarn deploy:staging";

const output = execSync(command, { encoding: "utf-8" });

console.log(output);
