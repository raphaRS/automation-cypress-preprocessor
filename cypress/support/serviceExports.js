function get (endpoint) {
    return cy.request({
      method: 'GET',
      url: endpoint,
      failOnStatusCode: false
    })
  }
  export default get;