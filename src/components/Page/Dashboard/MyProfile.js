import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useProfileId from '../../../hooks/useProfileId';
import UpdateProfile from './UpdateProfile';

const MyProfile = () => {
  const [id] = useProfileId()
  console.log(id[0])
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src="" alt="" />
          </div>

             
          
          <div>
            <h1 className="text-xl m-1 p-2">Name: {id[0]?.name} </h1>
            <h5 className="text-xl m-1 p-2">Email: {id[0]?.email}</h5>
            <h1 className="text-xl m-1 p-2">Phone: {id[0]?.phone}</h1>
            <h1 className="text-xl m-1 p-2">Location: {id[0]?.address}</h1>
            <h1 className="text-xl m-1 p-2">Education: {id[0]?.education}</h1>
            <Link to="https://www.linkedin.com/in/tan-vir-4148631b7/">
              <p className="text-xl m-1 p-2">
                <FontAwesomeIcon className="pr-3 text-3xl" icon={faLinkedin} />
                Linkedin
              </p>
            </Link>

            <label for="my-modal-4" class="btn my-9 modal-button">
              Update Profile
            </label>
            {<UpdateProfile> </UpdateProfile>}
          </div>
        </div>
      </div>
    );
};

export default MyProfile;