import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">首页</Link>-----
                <Link to="/about">关于</Link>-----
                <Link to="/user">user</Link>-----
                <Link to="/aboasdsadut">不存在</Link>
            </div>
        )
    }
}
