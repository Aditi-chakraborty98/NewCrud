import React, { useState, useEffect } from 'react';
import a from './axios';
import './global.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const GetAll = () => {
  const [students, setStudents] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await a.get("/student");
        setStudents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <section id='page1'>

      <h1>USER DETAILS</h1>
      <article>

        {students.map((x) => {
          if (!x) {
            return null; // or render a message
          }
          return (
            <div id='card'>
              <h5>Id: {x.id}</h5>
              <h5>Name : {x.fl} {x.ln}</h5>
              <h5>Phone No : {x.ph}</h5>
              <h5>Email : {x.em}</h5>
              <div>
                <Link to={`/update/${x.id}`}><Button>Update</Button></Link>
                <Link to={`/delete/${x.id}`}><Button>Delete</Button></Link>

              </div>
            </div>
          )
        })

        }

      </article>
    </section>
  )
}

export default GetAll;
