import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

type ActivityProps = {
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

  useEffect(() => {
    const data = getActivities();
    setActivities(data);
  }, []);

  return { getActivities, activities };
}
