<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe width="489" height="319" src="https://www.youtube.com/embed/EExSSotojVI" title="Learn Kotlin Programming – Full Course for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
);


YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

=======
import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe width="489" height="319" src="https://www.youtube.com/embed/EExSSotojVI" title="Learn Kotlin Programming – Full Course for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
);


YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default YoutubeEmbed;