import { db } from '@/firebase';
import { ref, get } from "firebase/database";

export async function getData() {
  try {
    const headerRef = ref(db, 'products');
    const snapshot = await get(headerRef);
    return snapshot.val();
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};
