import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import SavedSearches from '../components/SavedSearches';
import Auth from '../utils/auth';

const Profile = () => {
  const { loading, data, refetch } = useQuery(QUERY_ME);

  const user = data?.me || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need to be logged in to view this page. Use the navigation links to sign up or log in.
      </h4>
    );
  }

  // Function to refetch saved cars after deletion
  const refetchSavedCars = () => {
    refetch(); // This will re-trigger the query and update the savedCars list
  };

  return (
    <div>
      <div className="flex-row justify-center mb-4">
        <h2 className="col-12 p-3 my-3">
          Welcome, {user.username}!
        </h2>
        <div className="col-12">
          <SavedSearches savedCars={user.savedCars || []} refetchSavedCars={refetchSavedCars} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
