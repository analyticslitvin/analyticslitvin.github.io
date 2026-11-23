const USERNAME="analyticslitvin";
const grid=document.getElementById("project-grid");
const statusLine=document.getElementById("repo-status");
document.getElementById("year").textContent=new Date().getFullYear();
function node(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el}
function makeCard(repo){
 const card=node("article","project-card");
 const top=node("div","project-top");top.append(node("span","","PUBLIC REPOSITORY"),node("span","",repo.fork?"FORK":"GITHUB"));
 const title=node("h3","",repo.name);
 const desc=node("p","",repo.description||"A public repository. Visit GitHub to explore the code and project details.");
 const bottom=node("div","project-bottom");
 bottom.append(node("span","language-pill",repo.language||"Repository"));
 const a=node("a","repo-link","View repository ↗");a.href=repo.html_url;a.target="_blank";a.rel="noopener noreferrer";
 bottom.append(a);card.append(top,title,desc,bottom);return card;
}
async function loadRepos(){
 try{
  const res=await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&direction=desc&per_page=100&type=owner`,{headers:{Accept:"application/vnd.github+json"}});
  if(!res.ok)throw new Error("Repositories are temporarily unavailable. You can browse them directly on GitHub.");
  const repos=(await res.json()).filter(r=>!r.private).sort((a,b)=>new Date(b.pushed_at||b.updated_at)-new Date(a.pushed_at||a.updated_at)).slice(0,8);
  if(!repos.length){statusLine.textContent="No public repositories are available to display yet.";return}
  statusLine.textContent=`${repos.length} public repositories · synced from GitHub`;
  repos.forEach(r=>grid.append(makeCard(r)));
 }catch(e){
  statusLine.textContent=e.message;
 }
}
loadRepos();