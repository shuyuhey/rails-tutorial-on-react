var StaticPageAbout = React.createClass({displayName: 'StaticPageAbout',
  render: function() {
    return (
      <div className="static-page-about">
        <h1>About</h1>
        <p>
          The <a href="http://www.railstutorial.org/"><em>Ruby on Rails
              Tutorial</em></a> is a
          <a href="http://railstutorial.jp">book</a> and
          <a href="http://screencasts.railstutorial.org/">screencast series</a>
          to teach web development with
          <a href="http://rubyonrails.org/">Ruby on Rails</a>.
          This is the sample application for the tutorial.
        </p>
      </div>
    );
  }
});