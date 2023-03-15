const container = document.querySelector('.container');

const display = (followers) => {
  console.log(followers);
  const newFollowers = followers
    .map((user) => {
      const { login, avatar_url, html_url } = user;
      return `<article class='card'>
<img src='${avatar_url}' alt='${login}'/>
<h4>${login}</h4>
<a href='${html_url}' class='btn'>view profile</a>
</article>`;
    })
    .join('');
  container.innerHTML = newFollowers;
};

export default display;
