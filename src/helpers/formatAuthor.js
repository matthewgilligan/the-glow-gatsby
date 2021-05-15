const formatAuthor = (authors) => {
  if (authors.length > 1) {
    return `${authors[0].englishName} & ${authors[1].englishName}`
  } else if (authors.length > 0) {
    return authors[0].englishName
  } else {
    return "The Glow"
  };
};

export default formatAuthor;