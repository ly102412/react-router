import React,{Component} from "react";

export default class Repo extends Component {
  render () {
    const {username,reponame} = this.props.params
    return (
      <h2>用户名:{username},仓库名:{reponame}</h2>
    )
  };
}
