import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div style="font-size:10px; text-align:center; width:250px;">
          <a href="http://feed.mikle.com/" target="_blank" style="color:#CCCCCC;">RSS Feed Widget</a>
        </div>

    )
  }
}

function mapStateToProps (state) {
  return {
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(News);