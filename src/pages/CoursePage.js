import React from 'react';

import Video from '../assets/Video.svg';

const CoursePage = () => {

  return(
    <div>
      <div className="Upper-container">
        <div className="Course-content">
          <h2 className="Title font-weight-bold">Desain Grafis Untuk Pemula</h2>
          <div className="d-flex">
            <p className="Konten-title font-weight-bold">Konten Kelas</p>
            <p className="Durasi">4 Materi | Total Durasi 10 min</p>
          </div>
        </div>
        <div>
          <img className="Video" src={Video} />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;