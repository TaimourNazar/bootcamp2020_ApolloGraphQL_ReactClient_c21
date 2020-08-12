import React from 'react';
import {gql, useQuery} from '@apollo/client' 

const GET_USER = gql`
    {
        user{
            name
            age
        },
        course{
            name
            courseId
        }
    }
`;

function UserData() {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;



  return (
    <div>
        Hello from User component<br/>
        <hr/>
        Object from Apollo server = {JSON.stringify(data)}
        <br/>
        <hr/>
        <h2>User Data</h2>
        Name: {data.user.name}<br/>
        Age: {data.user.age}
        <h2>Course Data</h2>
        Name: {data.course.name}<br/>
        Course Id: {data.course.courseId}
    </div>
  );
}

export default UserData;
