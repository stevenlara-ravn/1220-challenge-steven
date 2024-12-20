import { ApolloProvider } from '@apollo/client'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { client } from './services/api.ts'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider >
)
