import React, { useEffect, useState } from 'react'
import './PostData.css';
import Card from './Card';

const PostData: React.FunctionComponent<{}> = () => {
    const [users, setUsers] = useState<any[]>([]);



    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
        
    }



    useEffect(() => {

        getUsers();
        console.log(users);
    }, [])
if(users.length==0){
    return (
        <h2>users Not Found</h2>
    )
}
  return (
    <div className="container">
               
    

        {users.length!==0 && users.map((curElem) => {
            return (

                <Card curElem={curElem} />

            
            )
        })
    }

</div>            
  )
};

export default PostData;
