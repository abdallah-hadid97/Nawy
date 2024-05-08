export default async function getDetails  ({params}: {
    params: { id: string }
  }) {
    const getAptDetails =  async () => {
      try {
        const response =  await fetch(`http://localhost:8080/apts/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to get details");
        }
        const data = await response.json(); 
        return data;
      } catch (error) {
        console.error("Error retrieving details:", error);
      }
    };
    const apt = await getAptDetails();
    console.log("LOG2",apt);
    return (
      <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{apt.title}</h1>
        <div className="mb-4"> </div> 
        <p className="mb-2"><strong>Reference:</strong> {apt.ref}</p>
        <p className="mb-2"><strong>Location:</strong> {apt.location}</p>
        <p className="mb-2"><strong>Price:</strong> ${apt.price}</p>
        <p className="mb-2"><strong>Bedrooms:</strong> {apt.bedrooms}</p>
        <p className="mb-2"><strong>Bathrooms:</strong> {apt.bathrooms}</p>
        <p className="mb-2"><strong>Area:</strong> {apt.area}</p>
        <p className="mb-2"><strong>Finished:</strong> {apt.finished ? "Yes" : "No"}</p>
        <p className="mb-2"><strong>Delivery Date:</strong> {apt.deliveryDate}</p>
      </div>
    );
  };  