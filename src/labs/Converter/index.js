// @packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @app
import Button from 'components/Button';
import Input from 'components/Input';
import Paper from 'components/Paper';
import Typography from 'components/Typography';
import useDownload from 'services/v1/download/get';

const Converter = ({ className, shadow }) => {
  const [inputValue, setInputValue] = useState('');
  const useDownloadHook = useDownload();

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleButtonClick = () => {
    useDownloadHook.trigger({ params: { url: inputValue } });
  };

  return (
    <Paper
      className={cn('flex flex-col space-y-6 p-6', className)}
      shadow={shadow}
    >
      <Typography className="font-notoSans text-3xl font-bold">
        Download
      </Typography>
      <div className="flex flex-col space-y-1">
        <Typography className="font-notoSans text-base font-semibold">
          YouTube video URL
        </Typography>
        <Input onChange={handleInputChange} value={inputValue} />
      </div>
      <Button
        isLoading={useDownloadHook.isMutating}
        onClick={handleButtonClick}
      >
        Download
      </Button>
    </Paper>
  );
};

Converter.defaultProps = {
  className: undefined,
  shadow: false,
};

Converter.propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.bool,
};

export default Converter;
