
import React, { useEffect, useState } from 'react';
import a from './axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Delete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [deleting, setDeleting] = useState(false);

  const deleteData = async () => {
    try {
      
      setDeleting(true);
      await a.delete(`/student/${id}`);
      alert("Data Deleted");
     
      navigate('/getAll');
    } catch (error) {
      console.error("Error deleting data:", error);
    } finally {
     
      setDeleting(false);
    }
  }

  useEffect(() => {
    
    if (!deleting) {
      deleteData();
    }
  }, [deleting, navigate]);

  return (
    <div></div>
  );
}

export default Delete;

