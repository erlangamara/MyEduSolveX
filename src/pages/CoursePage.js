import React from 'react';
import {Dropdown} from 'react-bootstrap';

//Image and Icon
import Video from '../assets/Video.svg';
import InstructureProfile from '../assets/InstructureProfile.svg';

//Components
import Card from '../components/Card';
import DropDown from '../components/Dropdown';

//Icon
import Star from '../assets/DropdownMenu/Star.svg';
import Exam from '../assets/DropdownMenu/Exam.svg';

const CoursePage = () => {

  return(
    <div>
      <div className="Upper-container">
        <h2 className="Title font-weight-bold">Desain Grafis Untuk Pemula</h2>
        <div className="Course-content">
          <div className="Side-menu-content-title">
            <p className="Content-title font-weight-bold">Konten Kelas</p>
            <p className="Durasi">4 Materi | Total Durasi 10 min</p>
          </div>
          <Card cardTitle="Perkenalan" isDropdown={true} />
          <DropDown title="Konsep Dasar Desain Grafis" />
          <Card cardTitle="Pengertian Mengenai Komposisi" isDropdown={true} />
          <Card cardTitle="Penggunaan Warna" isDropdown={true} />
          <Card cardTitle="Assignment" isDropdown={true} />
          <Card cardTitle="Rating dan Ulasan" icon={Star} />
          <Card cardTitle="Exam" icon={Exam} />
        </div>
        {/* <div> */}
          <img className="Video" src={Video} />
          <div class="Card-profile">
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default CoursePage;