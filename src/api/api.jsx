import axios from "axios";

const API_BASE_URL =
  "https://collaborative-text-editor-backend.onrender.com/api/docs";

// Create a new document
export const createDocument = async (TextId, Title) => {
  const response = await axios.post(API_BASE_URL, { TextId, Title });
  return response.data;
};

// Get a single document by ID
export const getDocument = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

// Get all documents
export const getAllDocuments = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};

// Update an existing document
export const updateDocument = async (id, data) => {
  await axios.patch(`${API_BASE_URL}/${id}`, data);
};
