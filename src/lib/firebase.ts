import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, Database, DataSnapshot, DatabaseReference, Unsubscribe } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJD-qtAoWayie56vXQPiHB1aC9ZFHvTQk",
  authDomain: "portfolio-6b8ec.firebaseapp.com",
  databaseURL: "https://portfolio-6b8ec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-6b8ec",
  storageBucket: "portfolio-6b8ec.firebasestorage.app",
  messagingSenderId: "935729314440",
  appId: "1:935729314440:web:11d41281b035b830283d3d",
  measurementId: "G-RNHNT9V0C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Session tracking
let hasIncrementedThisSession = false;

// Initialize database with default values if empty
const initializeDatabase = async () => {
  const viewsRef = ref(database, 'siteViews');
  try {
    const snapshot = await listenToValue(viewsRef);
    if (!snapshot.exists()) {
      await set(viewsRef, 0);
    }
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

const listenToValue = (reference: DatabaseReference): Promise<DataSnapshot> => {
  return new Promise((resolve, reject) => {
    let unsubscribe: Unsubscribe | null = null;
    
    const timeoutId = setTimeout(() => {
      if (unsubscribe) {
        unsubscribe();
      }
      reject(new Error('Connection timeout'));
    }, 10000);

    try {
      unsubscribe = onValue(
        reference,
        (snapshot) => {
          clearTimeout(timeoutId);
          if (unsubscribe) {
            unsubscribe();
          }
          resolve(snapshot);
        },
        (error) => {
          clearTimeout(timeoutId);
          if (unsubscribe) {
            unsubscribe();
          }
          reject(error);
        },
        { onlyOnce: true }
      );
    } catch (error) {
      clearTimeout(timeoutId);
      if (unsubscribe) {
        unsubscribe();
      }
      reject(error);
    }
  });
};

// Wait for Firebase connection with timeout
const waitForConnection = async () => {
  const connectedRef = ref(database, '.info/connected');
  
  try {
    const snapshot = await listenToValue(connectedRef);
    const isConnected = snapshot.val();
    
    if (isConnected) {
      await initializeDatabase();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Connection failed:', error);
    throw error;
  }
};

export const incrementViews = async () => {
  if (hasIncrementedThisSession) {
    return null;
  }

  const viewsRef = ref(database, 'siteViews');
  
  try {
    await waitForConnection();
    
    // Get current value first
    const snapshot = await listenToValue(viewsRef);
    const currentViews = snapshot.val() ?? 0;
    
    // Increment the value
    await set(viewsRef, currentViews + 1);
    
    // Mark that we've incremented for this session
    hasIncrementedThisSession = true;
    
    return currentViews + 1;
  } catch (error) {
    console.error('Error incrementing views:', error);
    throw error;
  }
};

export const getViews = async () => {
  const viewsRef = ref(database, 'siteViews');
  
  try {
    await waitForConnection();
    const snapshot = await listenToValue(viewsRef);
    return snapshot.val() ?? 0;
  } catch (error) {
    console.error('Error getting views:', error);
    throw error;
  }
}; 