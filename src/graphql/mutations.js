// src/graphql/mutations.js
import { gql } from '@apollo/client';

export const createDocument = gql` 
    mutation createDocument($title: String!, $pdfUrl: String, $storeId: ID!) {
        createDocument(input: { title: $title, pdfUrl: $pdfUrl, storeId: $storeId }) {
            id
            title
            pdfUrl
            progress
            storeId
        }
    }
`;
// Add other mutations similarly
