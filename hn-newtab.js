/**
 * (c) https://github.com/dave-mccloskey/hackernews-newtab/blob/master/hntab.js
 * Included on every HN page and executed.
 */

// For each link, if it's an absolute https? link, and the link is not to a
// ycombinator site (will catch most things), then make the target of the link
// _blank so that it will open in a new tab.
$(function () {
  $("a").each(function () {
    var href = $(this).attr("href");
    if (href.substring(0, 4) === "http" && !href.match(/\/\/ycombinator.com/)) {
      $(this).attr("target", "_blank");
    }
  });
});
