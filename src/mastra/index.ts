
import { Mastra } from '@mastra/core/mastra';
import { LibSQLStore } from '@mastra/libsql';
import { weatherWorkflow } from './workflows';
import { weatherAgent } from './agents';
import { PineconeVector } from '@mastra/pinecone';
const pinecone = new PineconeVector(process.env.PINECONE_API_KEY!);
export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  vectors: {pinecone: pinecone},
  storage: new LibSQLStore({
    url: 'file:../mastra.db',
   }),
});
