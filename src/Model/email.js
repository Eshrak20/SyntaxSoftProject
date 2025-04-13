const fetchHomeCardData = async () => {
    const apiUrl = import.meta.env.VITE_APP_EMAIL_URL;
  
    const response = await fetch(`${apiUrl}/api/projectlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: 1, size: 6 }),
    });
  
    if (!response.ok) throw new Error("Network response was not ok");
  
    const data = await response.json();
  
    return data.data;
  };
  
  export default fetchHomeCardData;
  