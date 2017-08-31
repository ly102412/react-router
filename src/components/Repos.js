import React,{Component} from "react";
import NavLink from "./NavLink";
export default class Repos extends Component {

  state = {
    repos:[
      {
        username: 'facebook',
        reponame: 'yarn'
      },
      {
        username: 'facebook',
        reponame: 'react'
      },
      {
        username: 'google',
        reponame: 'angular'
      },
      {
        username: 'ant',
        reponame: 'antd'
      }
    ]
  }
  render () {
    return (
      <div>
        <h2>Repos 组件</h2>
        <ul>
          {
            this.state.repos.map((repo,index) => (
              <li key={index}>
                <NavLink to={`/repos/${repo.username}/${repo.reponame}`}>{repo.reponame}</NavLink>
              </li>
            ))
          }
        </ul>
        {this.props.children}
      </div>
    )
  };
};