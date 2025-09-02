const user = "crowlog";
const repo = "test-repo";

const divs = document.querySelectorAll(".git-com");
const numb = divs.length;

fetch(`https://api.github.com/repos/${user}/${repo}/commits?per_page=${numb}`)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length && i < numb; i++) {
      const commit = data[i];
      const div = divs[i];

      const url = commit.html_url;
      const msg = commit.commit.message;
      const nme = commit.committer.login;
      const lnk = commit.committer.html_url;
      const pfp = commit.committer.avatar_url;
      const tme = new Date(commit.commit.author.date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const dte = new Date(commit.commit.author.date).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      div.querySelector(".git-dte").textContent = `${dte}: ${tme}`;
      div.querySelector(".usr-lnk").textContent = nme;
      div.querySelector(".usr-lnk").href = lnk;
      div.querySelector(".usr-lnk").target = "_blank";
      div.querySelector(".msg-lnk").textContent = msg;
      div.querySelector(".msg-lnk").href = url;
      div.querySelector(".msg-lnk").target = "_blank";
    }
  })
  .catch((err) => console.error(err));
