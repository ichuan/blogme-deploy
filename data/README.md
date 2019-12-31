
# Get ui

```
TOKEN="<github_access_token"

# get latest release, look for `assets[0].url`
curl -H "Authorization: token $TOKEN" -H "Accept: application/vnd.github.v3.raw" https://api.github.com/repos/ichuan/blogme-ui/releases/latest

# download & extract it
curl -fsSL -H "Authorization: token $TOKEN" -H "Accept: application/octet-stream" https://api.github.com/repos/ichuan/blogme-ui/releases/assets/17055353 | tar -C ui -xJf -
```

Or, directly download from <https://github.com/ichuan/blogme-ui/releases>
