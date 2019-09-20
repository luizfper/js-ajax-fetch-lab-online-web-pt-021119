const baseURL = 'https://api.github.com';
const user = '<YOUR_USERNAME>';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
	const token = getToken()
  const repo = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
	fetch(repo,
		{
			method: 'POST',
			headers: {
				Authorization: `token ${token}`
			}
		})
	.then(response => response.json())
	.then(json => showResults(json))
}

function showResults(json) {
	document.getElementById('results').innerHTML = `<h1><a href='${json.html_url}'>go to repo</a></h1>`
}

function createIssue() {
	const token = getToken()
	const body = {body: `${document.getElementById('body').value}`,title: `${document.getElementById('title').value}`}
	// const title = {title: `${document.getElementById('title').value}`}
  const repo = 'https://api.github.com/repos/luizfper/js-ajax-fetch-lab/issues';
	fetch(repo,
		{
			method: 'POST',
			body: JSON.stringify(body),
			// title: JSON.stringify(title),
			headers: {
				authorization: `token ${token}`,

			}
		}
	)
	.then(response => response.json())
	.then(getIssues)
}

function getIssues() {
  const token = getToken()
	const repo = 'https://api.github.com/repos/luizfper/js-ajax-fetch-lab/issues';
	fetch(repo,
		{
			headers: {
				authorization: `token ${token}`,
			}
		}
	)
	.then(response => response.json())
	.then(json => showIssues(json))

}

function showIssues(json){
	debugger
	document.getElementById('issues').innerHTML = '<ul id=issueslist></ul>'
	var htmlIssues = ''
	json.forEach(issue => htmlIssues += `<li>${issue.title}</li>`)
	document.getElementById('issueslist').innerHTML = htmlIssues
}
