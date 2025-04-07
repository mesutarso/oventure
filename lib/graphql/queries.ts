export const GET_ALL_POST = `query getPosts {
  posts(first: 100) {
    edges {
      node {
        title
        excerpt
        date
        slug
        featuredImage{
          node{
            sourceUrl
          }
        }
        categories(first:1){
          edges{
            node{
              name
            }
          }
        }
        
      }
    }
  }
}`;

export const GET_POST_BY_SLUG = `query getPost($id: ID = "") {
  post(id: $id, idType: SLUG) {
    title(format: RENDERED)
    date
    excerpt
    content
    categories{
      edges{
        node{
          name
          posts(first:4){
            edges{
              node{
                title
        				excerpt
        				date
        				slug
        				featuredImage{
          				node{
            					sourceUrl
          					}
       						 }
              }
            }
          }
        }
      }
    }
    featuredImage{
      node{
        sourceUrl
      }
    }
  }
}`;
