import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNews } from '../../actions/index.js'
import axios from 'axios';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: '',
      default: 'http%3A%2F%2Ffeeds.feedburner.com%2FTechcrunch'
    }
  }

  changeFeed(rssfeedurl) {
    this.props.setNews(rssfeedurl);
    this.render();
  }

  handleChange() {
    let news = document.getElementById('newsfeed');
    this.setState({
      news: news.value,
    });
  }

  clickHandler() {
    if (!this.state.news){
      this.changeFeed(this.state.default);
    } else {
      this.changeFeed(this.state.news);
    }
  }


  componentDidMount() {
    this.changeFeed(this.state.default);
  }

  render() {
    return (
      <div>
        <div>
          <input id='newsfeed' type='text' className="form-control" placeholder='RSS Feed URL' value={this.state.news} onChange={this.handleChange.bind(this)}></input>
          <button onClick={()=>{this.clickHandler()}} className="btn btn-default">
            Load RSS Feed
          </button>
        </div>
        <div dangerouslySetInnerHTML={{__html: '<iframe  height="210"  width="260" src="https://feed.mikle.com/widget/?rssmikle_url='+ this.props.news +'&rssmikle_frame_width=260&rssmikle_frame_height=280&frame_height_by_article=0&rssmikle_target=_blank&rssmikle_font=Arial%2C%20Helvetica%2C%20sans-serif&rssmikle_font_size=14&rssmikle_border=off&responsive=off&text_align=left&text_align2=left&corner=off&scrollbar=on&autoscroll=off&scrolldirection=up&scrollstep=3&mcspeed=20&sort=Off&rssmikle_title=on&rssmikle_title_bgcolor=%23FFFFFF&rssmikle_title_color=%23298EB2&rssmikle_item_bgcolor=%23FFFFFF&rssmikle_item_title_length=30&rssmikle_item_title_color=%23298EB2&rssmikle_item_border_bottom=on&rssmikle_item_description=on&item_link=off&rssmikle_item_description_length=80&rssmikle_item_description_color=%23666666&rssmikle_item_date=gl1&rssmikle_timezone=Etc%2FGMT&datetime_format=%25b%20%25e%2C%20%25Y%20%25l%3A%25M%20%25p&item_description_style=text%2Btn&item_thumbnail=full&item_thumbnail_selection=auto&article_num=10&rssmikle_item_podcast=off&" scrolling="no" name="rssmikle_frame" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0"></iframe>'}} />
        <div style={{"font-size":"10px", "text-align":"center", "width":"250px"}}>
        <a href="http://feed.mikle.com/" style={{color:"#CCCCCC"}}></a>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    news: state.news
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setNews: setNews
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
