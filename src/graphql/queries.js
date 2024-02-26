/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      password
      isAdmin
      __typename
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      stores {
        id
        name
        companyId
        __typename
      }
      __typename
    }
  }
`;
export const getStores = /* GraphQL */ `
  query GetStores {
    getStores {
      id
      name
      companyId
      documents {
        id
        title
        pdfUrl
        progress
        storeId
        __typename
      }
      __typename
    }
  }
`;
export const getDocuments = /* GraphQL */ `
  query GetDocuments {
    getDocuments {
      id
      title
      pdfUrl
      progress
      storeId
      __typename
    }
  }
`;
