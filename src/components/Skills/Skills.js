import React from 'react';

import './Skills.css';

//Icons import
import ReactIcon from '../../assets/ReactIcon.svg';
import AngularIcon from '../../assets/AngularIcon.svg';
import ReduxIcon from '../../assets/ReduxIcon.svg';
import HTMLIcon from '../../assets/HTMLIcon.svg';
import CSSIcon from '../../assets/CSSIcon.svg';
import SassIcon from '../../assets/SassIcon.svg';
import BootstrapIcon from '../../assets/BootstrapIcon.svg';
import NodeIcon from '../../assets/NodeIcon.svg';
import GraphQLIcon from '../../assets/GraphQLIcon.svg';
import PostgresIcon from '../../assets/PostgresIcon.svg';
import RedisIcon from '../../assets/RedisIcon.svg';
import MysqlIcon from '../../assets/MysqlIcon.svg';
import MongoIcon from '../../assets/MongoIcon.svg';
import Git from '../../assets/Git.svg';
import Heroku from '../../assets/Heroku.svg';
import Agile from '../../assets/Agile.svg';
import Aws from '../../assets/Aws.svg';
import Kanban from '../../assets/Kanban.svg';


const Skills = () => {
  return (
    <section id="skills-section" className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div className="card">
          <h2>Frontend</h2>
          <ul>
            <li><img src={ReactIcon} alt="icon"/>ReactJS</li>
            <li><img src={AngularIcon} alt="icon"/>AngularJS</li>
            <li><img src={ReduxIcon} alt="icon"/>Redux</li>
            <li><img src={HTMLIcon} alt="icon"/>HTML 5</li>
            <li><img src={CSSIcon} alt="icon"/>CSS 3</li>
            <li><img src={SassIcon} alt="icon"/>Sass</li>
            <li><img src={BootstrapIcon} alt="icon"/>Bootstrap</li>
          </ul>
        </div>
        <div className="card">
          <h2>Backend</h2>
          <ul>
            <li><img src={NodeIcon} alt="icon"/>Node.js</li>
            <li><img src={GraphQLIcon} alt="icon"/>Graphql</li>
            <li><img src={PostgresIcon} alt="icon"/>Postgres</li>
            <li><img src={RedisIcon} alt="icon"/>Redis</li>
            <li><img src={MysqlIcon} alt="icon"/>MySQL</li>
            <li><img src={MongoIcon} alt="icon"/>MongoDB</li>
          </ul>
        </div>
        <div className="card">
          <h2>Others</h2>
          <ul>
            <li><img src={Git} alt="icon" />Git</li>
            <li><img src={Heroku} alt="icon" />Heroku</li>
            <li><img src={Aws} alt="icon" />Aws</li>
            <li><img src={Agile} alt="icon" />Agile methodologies</li>
            <li><img src={Kanban} alt="icon" />Kanban</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;