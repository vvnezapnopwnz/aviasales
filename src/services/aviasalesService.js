export default class aviasalesService {
  constructor() {
    this.searchId = null
  }

  getSearchId = async () => {
    const res = await fetch(`https://aviasales-test-api.kata.academy/search`)
    const result = await res.json()
    this.searchId = result.searchId
  }

  getTickets = async () => {
    if (this.searchId === null) {
      await this.getSearchId()
    }
    const res = await fetch(`
    https://aviasales-test-api.kata.academy/tickets?searchId=${this.searchId}`)
    const result = await res.json()
    return result
  }
}
