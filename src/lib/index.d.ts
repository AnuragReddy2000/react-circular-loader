import React from 'react';

interface LoaderProps{
    primaryColor: string;
    secondaryColor: string;
    diameter: string;
    primaryWidth: string;
    secondaryWidth: string;
}

declare class ReactCircularLoader extends React.Component<LoaderProps,any> { }

export default ReactCircularLoader;