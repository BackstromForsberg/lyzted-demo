import fs from "fs/promises";
import { pool } from "./db";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDb() {

    const client = await pool.connect()

    try {

        const schema = await fs.readFile(
            path.join(__dirname, "schema.sql"),
            "utf8"
        );

        const seed = await fs.readFile(
            path.join(__dirname, "seed.sql"),
            "utf8"
        );

        // transaction
        await client.query('BEGIN')
        await client.query(schema);
        await client.query(seed);
        await client.query('COMMIT')

        console.log("Database initialized");

    } catch (e) {
        // Rollback
        await client.query('ROLLBACK')
        console.log(e)
    } finally {
        // Release client back to the pool. 
        client.release()

        // Standalone process (I would never call this in server code. Just in a one-off process like an init)
        await pool.end()
    }

}

initDb()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });