import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useProfileId = () => {
        const [user] = useAuthState(auth);
        const [id, setId] = useState([]);
        useEffect(() => {
          fetch(`http://localhost:5500/update?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setId(data));
        }, [user]);
    return [id];
}
export default useProfileId;