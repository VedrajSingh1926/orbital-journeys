async function testApi() {
  try {
    const res = await fetch('http://localhost:3000/api/enhance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mood: 'Adventure',
        days: 7,
        companions: 'Partner',
        distance: 'International',
        location: 'Jaipur, Rajasthan, India'
      })
    });
    
    console.log("Status:", res.status);
    const data = await res.text();
    console.log("Response:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

testApi();
