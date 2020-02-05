import React from 'react';
import ErrorComponent from './ErrorComponent.jsx';

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const defaultProps = {
	error: null,
	api: null
};

export default class PreviewContents extends React.Component {
	render() {
		let error = null;
		if (this.props.error) {
			error = <ErrorComponent title={this.props.error.name} description={this.props.error.message} />;
		}
		return (
			<div>
				{error}
				<SwaggerUI spec={this.props.api} />
			</div>
		);
	}
}

PreviewContents.defaultProps = defaultProps;