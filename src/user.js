import {gql} from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query {
      categories {
          name,
          products {
              id,
              name,
              gallery,
              description,
              category,
              prices {
                  currency {
                      label,
                      symbol
                  },
                  amount
              },
              brand
          }
      }
  }`

export const GET_ALL_CURRENCIES = gql`
    query {
        currencies {
            label,
            symbol
        }
    }
    `
