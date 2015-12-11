import Ember from 'ember';

export function videoPlayer(params/*, hash*/) {
  let videoUrl = params[0],
      videoId = params[1],
      htmlVideo;

  htmlVideo  = '<video id="really-cool-video-'+videoId+'" class="video-js vjs-default-skin" controls preload="false" width="640" height="264" data-setup="{}">';
  htmlVideo += '<source src="'+videoUrl+'" type="video/mp4"><source src="'+videoUrl+'" type="video/webm"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p></video>';


  return Ember.String.htmlSafe(htmlVideo);
}

export default Ember.Helper.helper(videoPlayer);
