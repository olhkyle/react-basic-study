import React, { useContext } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { UserContext } from "../store/user";


export default function ReactDocPage(){
    // docID : 1, 2, 3...
    const params = useParams();
    console.log(params);
    const value = useContext(UserContext);

    const navigate = useNavigate();
    
    return (
        <>
            <h5 onClick={() => navigate('/')}>logo</h5>
            <div>ReactDocPage ##{params.docId}</div>
            <div>copyRight by {value.name}</div>
        </>
    )
}