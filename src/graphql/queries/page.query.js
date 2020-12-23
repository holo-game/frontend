import { gql } from "@apollo/client";

const fragments = {
  page: gql`
    fragment PageFragment on Page {
      id
      title
      description
      slug
      keywords
      content
    }
  `,
};

export const GET_PAGES = gql`
  query {
    pages {
      ...PageFragment
    }
  }
  ${fragments.page}
`;

export const GET_PAGE = gql`
  query($slug: String!) {
    pageBySlug(slug: $slug) {
      ...PageFragment
    }
  }
  ${fragments.page}
`;
