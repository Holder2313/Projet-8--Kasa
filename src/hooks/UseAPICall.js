import { useEffect, useState } from "react"


export default function UseAPICall() {

    const [locationData, setLocationData] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        async function fetchDataLocation() {
            try {
                const response = await fetch('/api/logements.json');
                if (!response.ok) throw new Error(`Erreur HTTP. Statut : ${response.status}`);

                const data = await response.json();
                console.log(data);

                setLocationData(data);
                setLoading(false)

            }
            catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
                setError(true)
                setLoading(false)

            }
        };

        fetchDataLocation();
    }, []);


    return { locationData, loading, error }

}
