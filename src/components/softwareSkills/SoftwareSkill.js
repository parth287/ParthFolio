import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {SiRedis,SiAmazondynamodb,SiApachekafka,SiPostgresql,SiMongodb,SiApacheairflow,SiPowerbi,SiTableau,SiRabbitmq} from 'react-icons/si';
import {FaPython,FaJava,FaGit,FaAws,FaPhp,FaDocker} from 'react-icons/fa';
import {DiSpark,DiScala,DiDjango} from 'react-icons/di';


export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            if(skills.logo === "SiRedis"){
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i><SiRedis/></i>
                <p>{skills.skillName}</p>
              </li>
            );}
            else if(skills.logo === "FaPython"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><FaPython/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "FaJava"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><FaJava/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "SiApachekafka"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><SiApachekafka/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "DiSpark"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><DiSpark/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "SiPostgresql"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><SiPostgresql/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "SiMongodb"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><SiMongodb/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "SiAmazondynamodb"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><SiAmazondynamodb/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "FaGit"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><FaGit/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "FaAws"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><FaAws/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "FaPhp"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><FaPhp/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "DiScala"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><DiScala/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "DiDjango"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><DiDjango/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "FaDocker"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><FaDocker/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "SiApacheairflow"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><SiApacheairflow/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "SiRabbitmq"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><SiRabbitmq/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else if(skills.logo === "SiTableau"){
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><SiTableau/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
            else{
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i><SiPowerbi/></i>
                  <p>{skills.skillName}</p>
                </li>
              );}
          })}
        </ul>
      </div>
    </div>
  );
}
