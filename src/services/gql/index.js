import {gql} from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    categories {
        name,
        products {
            id,
            name,
            gallery,
            description,
            category,
            inStock,
            attributes {
                id,
                name,
                type,
                items {
                    displayValue,
                    value,
                    id
                }
            }
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

    currencies {
        label,
        symbol
    }
}
`