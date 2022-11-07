// import { format } from "date-fns";
export default class aviasalesService {
  constructor() {
    this.apiBase = "https://api.themoviedb.org/3";
    this.stateId = null;
  }

  getSearchId = async () => {
    
      const res = await fetch(
        `https://front-test.dev.aviasales.ru/search`
      );
      return res.json();

  };

  getTickets = async({searchId}) => {
    const res = await fetch(`
    https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)

    return await res.json();
}

}
