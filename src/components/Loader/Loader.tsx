import React from 'react';
import { ColorRing } from 'react-loader-spinner';

interface Props {
  isLoading: boolean;
}

export const Loader: React.FC<Props> = ({ isLoading }) => (
  <div className="loader">
    <ColorRing
      visible={isLoading}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#0d6efd', '#0b5ed7', '#0a56c1', '#094ea9', '#084592']}
    />
  </div>
);
