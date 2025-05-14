import {Pool} from "pg"
import dotenv from 'dotenv'

dotenv.config();

const pool = new Pool({
    user:process.env.POSTGRES_USER ,
    host:process.env.POSTGRES_HOST ,
    password:process.env.POSTGRES_PASSWORD ,
    port:process.env.POSTGRES_PORT,
    database:process.env.POSTGRES_DATABASE
})

console.log('Connected to the database');

export default pool;