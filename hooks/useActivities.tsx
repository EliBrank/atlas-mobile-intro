import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

export type ActivityProps = {
  id: number;
  steps: number;
  date: number;
}

export function useActivities() {
  const [activities, setActivities] = useState<ActivityProps[]>([]);

  const db = useSQLiteContext();

  function getActivities() {
    return db.getAllSync<ActivityProps>('SELECT * FROM activities');
  }

  function insertActivity(steps: number, date: Date) {
    db.execSync(
      `INSERT INTO activities (steps, date) VALUES (${steps},${date.getTime()})`
    );
    reload();
  }

  function deleteActivities() {
    db.execSync(
      `DELETE FROM activities`
    );
    reload();
  }

  function reload() {
    const data = getActivities();
    setActivities(data);
  }

  useEffect(() => {
    reload();
  }, []);

  return { getActivities, activities, insertActivity, deleteActivities };
}
