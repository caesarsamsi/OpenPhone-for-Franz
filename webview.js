module.exports = Franz => {

  getMessages = () => {
    const newsDOM = document.querySelectorAll("div[title='All'] > .LeftnavListRow__count")[0].innerHTML;
    let counter = parseInt(newsDOM);
    
    if (newsDOM.indexOf('K') !== -1 || newsDOM.indexOf('+') !== -1) {
      counter = newsDOM.substring(0, newsDOM.indexOf('K')) + '000';
    }

    Franz.setBadge(counter);
  };

  Franz.loop(getMessages);

}
