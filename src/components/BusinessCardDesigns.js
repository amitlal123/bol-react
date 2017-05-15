import React from "react";
import {Link} from 'react-router';
import Header from "./Header";
import Select from 'react-select';
import {getDisplayDesigns, getValues, getThemes} from '../services/cardDesignService.js';

export default class BusinessCardDesign extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			displayDesigns: [],
			denomOptions: [],
			themeOptions: [],
			denomValues: [],
			themeValues: []
		 };
	}

	componentWillMount() {

		var denomOptions = getValues().map(eachValue => {
			return(
				{value: eachValue, label: eachValue}
			);
		});

		var themeOptions = getThemes().map(eachValue => {
			return(
				{value: eachValue , label: eachValue}
			);
		});

		this.setState(
			{displayDesigns: getDisplayDesigns(),
				denomOptions: denomOptions,
				themeOptions: themeOptions
			});

	}

	handleMultiChangeDenom(denoms) {
	this.setState({denomValues: denoms});
}

handleMultiChangeThemes(themes) {
this.setState({themeValues: themes});
}
	render() {
		const styles = this.getStyles();
		const designLinks = this.state.displayDesigns.map(eachDesign => {
			return (
				<Link to={ "/businesscards" } key={ eachDesign.id}>
	        <div style={ styles.designLink }>
	          <img
	            alt={ eachDesign.Name }
	            src={ eachDesign.image }
	          />
						<h4>{ eachDesign.Name }</h4>
	          <p>{ eachDesign.denomRange }</p>
	        </div>
				</Link>
			);
		});

		return (
			<div style={ styles.masterWrapper }>
				<Header/>
				<div style={ styles.filterWrapper }>
					<div style={ styles.filterSegment }>
						<h4>Filter By Value</h4>
						<Select name="Card Denoms" options={ this.state.denomOptions } multi={ true } onChange={ this.handleMultiChangeDenom.bind(this) } value={ this.state.denomValues }/>
					</div>
					<div style={ styles.filterSegment }>
						<h4>Filter By Theme</h4>
						<Select name="Card Themes" options={ this.state.themeOptions } multi={ true } onChange={ this.handleMultiChangeThemes.bind(this) } value={ this.state.themeValues }/>
					</div>
				</div>
				<div style={ styles.wrapper }>
						{ designLinks }
				</div>
			</div>
		);
	}

	getStyles() {
		return {
			designLink: {
        flex: "auto"
        , margin: 60
        , textAlign: "Center"
        , color: "gray"
			}
			, wrapper: {
				 backgroundColor: "#f6f6f6"
         , marginTop: 30
         , display: "flex"
         , flexDirection: "row"
				 , flexWrap: "wrap"

			}
			, filterWrapper: {
					backgroundColor: "#f6f6f6"
				, marginTop: 30
				, display: "flex"
				, flexDirection: "row"
				, flexWrap: "wrap"
			}
			, filterSegment: {
				flex: "auto"
				, margin: 30
				, textAlign: "Center"
				, color: "gray"
			}
			, masterWrapper: {
				backgroundColor: "#f6f6f6"
				, height: 900
				,
			}
		}
	}
}
