import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import { Search } from '@mui/icons-material'

function Widgets() {
  return (
    <div className = "widgets">
      <div className = "widgets_input">
        <Search 
            className = "widgets_SearchIcon"    
        />
        <input placeholder = "Search Twitter" type = "text"/>

      </div>

      <div className = "widgets_widgetContainer">
        <h2>
            What's happening
        </h2>

        <TwitterTweetEmbed 
            tweetId = "1643391764064256000"
        />

        <TwitterTimelineEmbed 
            sourceType = "profile" 
            screenName = "nancy_mn"
            options = {{ height: 400 }}
        />

        <TwitterShareButton 
            url = {"https://www.linkedin.com/in/nancy-mandal-9587a9209"}
            options = { { text : "Subscribe my Youtube Channel #NancyMandal" , via :  "NancyProjects" }}
        />

      </div>
    </div>
  )
}

export default Widgets;
