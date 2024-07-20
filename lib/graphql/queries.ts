export const GET_SERVICES = `query getServices {
  services(first: 6,where: {orderby: {field: DATE, order: ASC}}) {
    edges {
      node {
        id
        title(format: RENDERED)
        slug
        content
         featuredImage {
          node {
            sourceUrl
          }
        }
        services {
          gallerie {
            edges {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
}`;

export const GET_SERVICE_BY_SLUG = `query getServiceBySlug($id: ID = "restauration") {
  service(id: $id, idType: SLUG) {
    title(format: RENDERED)
    content
    featuredImage{
      node{
        sourceUrl
      }
    }
    services {
      video {
        node {
          mediaItemUrl
        }
      }
      gallerie {
        edges {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`;

export const GET_EVENTS = `query getEvents {
  evenements(first: 6) {
    edges {
      node {
        id
        title(format: RENDERED)
        content
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        events {
          dateDeLevenement
        }
      }
    }
  }
}`;

export const GET_EVENT_BY_SLUG = `query getEventBySlug($id: ID = "restauration") {
  evenement(id: $id, idType: SLUG) {
    title(format: RENDERED)
    content(format: RENDERED)
    events {
      dateDeLevenement
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}`;

export const GET_POSTS = `query getPosts {
  posts(first: 3) {
    edges {
      node {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`;

export const GET_POST_BY_SLUG = `query getPostBySlug($id: ID = "restauration") {
  post(id: $id, idType: SLUG) {
    title(format: RENDERED)
    content(format: RENDERED)
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}`;

export const GET_OFFERS = `query getOffres {
  offres(first: 12) {
    edges {
      node {
        id
        title(format: RENDERED)
        content(format: RENDERED)
        slug
        featuredImage {
          node{
            sourceUrl
          }
        }
      }
    }
  }
}`;

export const GET_TARIFS = `
query getTarifs {
    tarifs(first: 20) {
      edges {
        node {
          title(format: RENDERED)
          featuredImage {
            node {
              sourceUrl
            }
          }
          tarifsField {
            elements {
              element
            }
            price
          }
        }
      }
    }
  }

`;
