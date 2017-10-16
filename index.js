function getIssues() {
  const issueRepo = 'ndean87/javascript-fetch-lab/issues';
  fetch(`https://api.github.com/repos/${issueRepo}`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  const issuesElement = document.getElementById('issues');
  json.forEach(object => {
    const div = document.createElement('div');
    div.innerText = `${object.title}: ${object.body}`;
    issuesElement.appendChild(div);
  });
}

function createIssue() {
  const titleInput = document.getElementById('title').value;
  const textInput = document.getElementById('body').value;

  const issueData = {
    title: titleInput,
    body: textInput
  };
  const issueRepo = 'ndean87/javascript-fetch-lab/issues';
  fetch(`https://api.github.com/repos/${issueRepo}`, {
    method: /post/,
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues());
}

function showForkedRepo(json) {
  const resultsElement = document.getElementById('results');
  const linkTo = document.createElement('a');
  linkTo.href = json.html_url;
  console.log(json.html_url);
  linkTo.innerHTML = json.html_url;
  resultsElement.appendChild(linkTo);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: /post/,
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showForkedRepo(json));
}

function getToken() {
  return '';
}

// example of why you use then

// fetch('https://api.github.com/repos')
//   .then(res => {
//     const myDiv = createElement('div');
//     myDiv.innerHTML = res;
//   })
