import { fetchTotalUsers, fetchTotalDonations, fetchTotalConstituents } from "../lib/data"; // Adjust path as necessary


const FetchData = () =>{

    const [totalUsers, setTotalUsers] = useState(null);

    useEffect(() => {
      // Fetch total users when the component mounts
      const fetchData = async () => {
        try {
          const users = await fetchTotalUsers();
          setTotalUsers(users);
        } catch (error) {
          console.error(error);
          // Handle error as needed
        }
      };
  
      fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts
  
}



export default FetchData