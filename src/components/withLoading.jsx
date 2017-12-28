import React, { Component } from 'react';

const withLoading = (WrappedComponent) => {
    return (props) => {
        return props.isLoading
        ? (<div>Loading...</div>)
        : <WrappedComponent {...props} />;
    };
};

export default withLoading;