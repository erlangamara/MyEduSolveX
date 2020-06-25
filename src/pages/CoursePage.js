import React from 'react';
import {Dropdown} from 'react-bootstrap';

//Image and Icon
import Video from '../assets/Video.svg';
import InstructureProfile from '../assets/InstructureProfile.svg';

//Components
import Card from '../components/Card';

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
          <Card cardTitle="Perkenalan" />
          
          <Card cardTitle="Pengertian Mengenai Komposisi" />
          <Card cardTitle="Penggunaan Warna" />
          <Card cardTitle="Assignment" />
        </div>
        <div>
          <img className="Video" src={Video} />
          <div class="card Card-profile">
            <div className="card-body">
              <p className="Card-profile-title">Instruktur</p>
              <div className="d-flex align-items-center">
                <img src={InstructureProfile} />
                <div className="Instructure-data">
                  <p className="Instructure-name">Sharon Joetama</p>
                  <p className="Instructure-description">Seorang instruktur untuk kelas Desain Grafis pemula.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;