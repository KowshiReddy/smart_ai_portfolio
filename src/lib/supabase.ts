// // import { createClient } from '@supabase/supabase-js';
// // import { OpenAIEmbeddings } from "@langchain/openai";
// // import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

// // if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
// //   throw new Error(
// //     "Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.",
// //   );
// // }

// // const client = createClient(
// //   process.env.SUPABASE_URL,
// //   process.env.SUPABASE_ANON_KEY
// // );

// // // Function to get a vector store instance from an existing index
// // export async function getVectorStore() {
// //   return new SupabaseVectorStore(
// //     new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }), 
// //     {
// //       client,
// //       tableName: 'documents',
// //       queryName: 'match_documents',
// //       filter: {},
// //     }
// //   );
// // }

// // // Function to get a reference to the embeddings collection
// // export async function getEmbeddingsCollection() {
// //   return client.from('documents');
// // }

// import { createClient } from '@supabase/supabase-js';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';

// if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY || !process.env.GEMINI_API_KEY) {
//   throw new Error(
//     "Please set SUPABASE_URL, SUPABASE_ANON_KEY, and GEMINI_API_KEY environment variables.",
//   );
// }

// // Initialize Supabase client
// const client = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_ANON_KEY
// );

// // Initialize Gemini AI client
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const geminiModel = genAI.getGenerativeModel({ model: 'gemini-pro-embedding' });

// // Function to generate text embeddings using Gemini
// async function generateEmbedding(text: string) {
//   const result = await geminiModel.generateEmbedding(text);
//   return result.embedding; // Returns the embedding array
// }

// // Function to get a vector store instance from an existing index
// export async function getVectorStore() {
//   return new SupabaseVectorStore(
//     {
//       embedQuery: async (text: string) => generateEmbedding(text), 
//     },
//     {
//       client,
//       tableName: 'documents',
//       queryName: 'match_documents',
//       filter: {},
//     }
//   );
// }

// // Function to get a reference to the embeddings collection
// export async function getEmbeddingsCollection() {
//   return client.from('documents');
// }

import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';

// Ensure environment variables are set correctly
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY || !process.env.GEMINI_API_KEY) {
  throw new Error(
    "Please set SUPABASE_URL, SUPABASE_ANON_KEY, and GEMINI_API_KEY environment variables.",
  );
}

// Initialize Supabase client
const client = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = genAI.getGenerativeModel({ model: 'gemini-2' }); // Make sure you're using the correct model for embedding generation

// Function to generate text embeddings using Gemini
async function generateEmbedding(text: string) {
  try {
    const result = await geminiModel.generateEmbedding(text); // Uses the generateEmbedding method for Gemini
    return result.embedding; // Return the embedding array
  } catch (error) {
    console.error("Error generating embedding:", error);
    throw new Error("Failed to generate embedding.");
  }
}

// Function to get a vector store instance from an existing index
export async function getVectorStore() {
  return new SupabaseVectorStore(
    {
      embedQuery: async (text: string) => generateEmbedding(text),  // Uses the updated generateEmbedding function
    },
    {
      client,
      tableName: 'documents', // Your table storing document data
      queryName: 'match_documents', // Your Supabase function to query document matches
      filter: {}, // Define any filtering conditions if needed
    }
  );
}

// Function to get a reference to the embeddings collection (e.g., "documents" table)
export async function getEmbeddingsCollection() {
  return client.from('documents'); // Replace with your actual table name where embeddings are stored
}
