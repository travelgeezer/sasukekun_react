import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { formatLocalImageUrl } from '../../utils';
import './styles.less';

import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
  alignItems: 'center'
};

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
}


class FileUpload extends Component {
  render() {
    return (
      <div
        className="file-upload"
        style={{height: 464, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
        <Card
          style={{width: 230, height: 360, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          >
          <FlatButton
            label="upload file"
            labelPosition="before"
            style={styles.uploadButton}
            containerElement="label"
            >
            <input type="file" style={styles.uploadInput} />
          </FlatButton>
        </Card>
      </div>);
  }
}

export default FileUpload;
