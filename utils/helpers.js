module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  format_url: url => {
    //console.log(url);
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0];
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  }
};



/*
Instead of doing this formatting with Moment, we use the methods built into the Date object. This way, we can avoid bringing in unnecessary dependencies. If we needed more utility around time and date manipulation, then we could justify adding Moment.
*/