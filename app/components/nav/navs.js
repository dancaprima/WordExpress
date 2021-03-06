import React from 'react';
import { Link } from 'react-router';
import styles from './navs.scss';

const NavList = (props) =>{

	let navClassName = styles[props.type];

	return (
		<nav className={navClassName}>
			<ul className={styles.list}>
				{props.children}
			</ul>
		</nav>
	)
};

const NavItem = (props) =>{

	if (props.type =="link"){
		return (
			<li>
				<Link to={{ pathname: props.href }} onClick={props.onClick}>{props.children}</Link>
			</li>
		)
	} else {
		return (
			<li className={styles.item}>
				{props.children}
			</li>
		)
	}
}

let Navs = [];


export { NavList, NavItem, Navs}
