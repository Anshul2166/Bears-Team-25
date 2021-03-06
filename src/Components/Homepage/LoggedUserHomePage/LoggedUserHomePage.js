import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppletCard from "../../Common/AppletCard/AppletCard";
import { connect } from "react-redux";
import "./LoggedUserHomePage.css";

class LoggedUserHomePage extends Component {
	render() {
		const appletList = this.props.allAppletList;
		const AppletList = appletList.map(applet => (
			<AppletCard content={applet.content} />
		));
		return (
			<div className="logged-home-page">
				<div className="text-center">
					<h1>Recommended for you</h1>
				</div>
				<Grid container spacing={24}>
					{AppletList}
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		allAppletList: state.create.allAppletList
	};
};

export default connect(mapStateToProps)(LoggedUserHomePage);
