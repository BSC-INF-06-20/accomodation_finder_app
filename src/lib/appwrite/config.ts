import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig ={
  url:import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,  
  databaseID:import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageID:import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionID:import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionID:import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollectionID: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};


export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const storage = new Storage(client);
export const avatar = new Avatars(client);
export const database = new Databases(client);
