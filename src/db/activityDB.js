import { openDB } from "idb";

const DB_NAME = "heatmapDB";
const STORE_NAME = "dailyActivity";

export const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: "date" });
    }
  },
});

// Save activity
export async function saveActivity(activity) {
  const db = await dbPromise;
  return db.put(STORE_NAME, activity);
}

// Get all activity
export async function getAllActivity() {
  const db = await dbPromise;
  return db.getAll(STORE_NAME);
}