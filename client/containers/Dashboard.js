import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const components = [
  { title: 'title', component: '' , boot: 'col-xs-6' },
  { title: 'title', component: '' , boot: 'col-xs-6' },
  { title: 'title', component: '' , boot: 'col-xs-6' },
  { title: 'title', component: '' , boot: 'col-xs-6' },
  { title: 'title', component: '' , boot: 'col-xs-6' }
];

class Search extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        {
          components.map(comp => {
          return (
            <div className={ comp.boot } > { comp.title } </div>
            )
          })
        }
      </div>
    )
  }

}

// function mapStateToProps (state) {
//   return {
//   };
// };

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators({
//   }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Search);

