(async function fetchGreeting() {
   const res =  await fetch('http://localhost:3000',  {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify({
          query: 'query { greeting }'
      })
    })
    const result = await res.json();
    console.log(result)
    document.getElementById('lmfao').innerText = result.data.greeting;
})();
