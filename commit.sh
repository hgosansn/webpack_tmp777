

git rm -r --cached .
git add .

git commit -m "${1-"Commit message"}"
git push