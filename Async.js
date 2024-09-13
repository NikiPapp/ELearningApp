class Async {
  constructor() {
   
  }

  fetchData(endpoint, callback) {
    fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        callback(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
}

export default Async;
