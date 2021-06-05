# react-circular-loader

A react UI component to display a circular loader with customizable color and size. 

## Props:
* primaryColor: The color of the spinning circular bar.
* secondaryColor: The color of the circular background behind the spinning bar.
* diameter: The diameter of the circular loader.
* primaryWidth: The width of the spinning circular bar.
* secondaryWidth: The width of the circular background behind the spinning bar.

## Example:
```JSX
import React from 'react';
import ReactCircularLoader from 'react-circular-loader';

const DemoPage = () => {
	return(
		<div>
			<ReactCircularLoader 
                primaryColor="#0D47A1" 
                secondaryColor="#e8f4f8" 
                diameter="100px" 
                primaryWidth="3px" 
                secondaryWidth="5px"/>
		</div>
	)
}

export default DemoPage;
```