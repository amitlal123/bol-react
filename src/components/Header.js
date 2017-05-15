import React from "react";
import {Link} from 'react-router';

export default class Header extends React.Component {
	render() {
		const styles = this.getStyles();

		return (
			<header style={ styles.wrapper }>
				<div>
				<Link to="/businesscards"><h4 style={ styles.header }>Business Gift Cards</h4></Link>
				<Link to="/"><h4 style={ styles.header }>Personal Gift Cards</h4></Link>
				</div>

				<div>
					<Link to="/"><span style={ styles.link }>Check Balance</span></Link>
					<Link to="/businesscards"><span style={ styles.link }>Login</span></Link>
					<Link to="/businesscards"><i style={ styles.link } className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
				</div>
			</header>
		);
	}

	getStyles() {
		return {
			header: {
				color: "white"
				, display: "inline-block"
				, marginLeft: 24
			}
			, link: {
				color: "white"
				, fontSize: 15
				, marginRight: 24
			}
			, logoImage: {
				height: 50
				, margin: "0 10px 20px 10px"
				, width: 50
			}
			, wrapper: {
				alignItems: "baseline"
				, backgroundColor: "#74BBFB"
				, boxSizing: "border-box"
				, color: "white"
				, display: "flex"
				, justifyContent: "space-between"
			}
		}
	}
}
