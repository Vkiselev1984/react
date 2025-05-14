import React from 'react';
import { ClipLoader } from 'react-spinners'; 

const withLoadingIndicator = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <div className="loading-indicator">
          <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoadingIndicator;