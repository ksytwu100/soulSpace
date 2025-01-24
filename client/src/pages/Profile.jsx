import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import SavedSearches from '../components/SavedSearches';
import Auth from '../utils/auth';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);

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

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Welcome, {user.username}!
        </h2>
        <div className="col-12 col-md-10 mb-3">
          <h3>Email: {user.email}</h3>
        </div>
        <div className="col-12 col-md-10">
          <SavedSearches savedCars={user.savedCars || []} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
