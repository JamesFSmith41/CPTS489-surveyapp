import { config } from 'dotenv';
import * as database from './Database.js';

config();
// console.log(await database.executeDatabaseUserpOerations('CREATE', 'difUser', 'password', 'email@.com'));
// console.log("Created User");
// console.log(await database.executeDatabaseUserpOerations('GETUSER', 'difUser', 'password', 'email@.com'));
const message = "New Message Test";
const date = new Date();
//console.log(await database.executeDatabaseMessagespOerations('CREATE', 'testUser1', 'testUser2', message, date ));
console.log(await database.executeDatabaseMessagespOerations('GETMESSAGES', null, 'newUser2', null, date));

