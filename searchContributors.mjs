import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { EOL } from "os";
import { fileURLToPath } from "url";
import { createInterface } from "readline";
import process from "process";

const __dirname = dirname(fileURLToPath(import.meta.url)); // Gets Current working directory

const PATH_TO_FILE = join(__dirname, "names.txt");

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const searchHandler = async function (answer) {
  try {
    const searchQuery = answer.trim();
    if (!searchQuery) {
      console.log(`\n\n You did not search for any contributor.`);
      return;
    }
    const data = await readFile(PATH_TO_FILE, { encoding: "utf8" });
    const names = data.split(EOL);
    const matchedNames = names.filter((name) => name.trim().toLowerCase().includes(searchQuery.toLowerCase()));
    const header = `\n\nShowing results for "${searchQuery}"\n`;
    if (!matchedNames.length) {
      console.log(`${header}No match found!`);
      return;
    }
    const toBeDisplayedResult = matchedNames.join(EOL);
    console.log(`${header}${toBeDisplayedResult}`);
  } catch (err) {
    console.log("Opps! Something went wrong!");
  } finally {
    readline.close();
  }
};

readline.question("Search contributors: ", searchHandler);

//  - TO USE, JUST "cd" INTO "altschool-opensource-names" DIRECTORY AND RUN "node searchContributors.mjs"