import sqlite3 = require('sqlite3');

export const asyncDbRun = async (db: sqlite3.Database, sql: string, params?: any[]): Promise<void> => {
    return new Promise((resolve, reject) => {
      db.run(sql, params, (err) => {
        if (err) {
          reject(new Error("Database error."));
          return;
        }
        resolve();
      });
    });
  };