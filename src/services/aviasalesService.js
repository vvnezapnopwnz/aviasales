export default class aviasalesService {
  constructor() {
    this.apiBase = 'https://api.themoviedb.org/3'
    this.searchId = null
  }

  getSearchId = async () => {
    const res = await fetch(`https://front-test.dev.aviasales.ru/search`)
    const result = await res.json()
    this.searchId = result.searchId
  }

  getTickets = async () => {
    if (this.searchId === null) {
      await this.getSearchId()
    }
    const res = await fetch(`
    https://front-test.dev.aviasales.ru/tickets?searchId=${this.searchId}`)
    const result = await res.json()
    return result
  }
}
