# `playground-sheets`
> Just a Google Sheets playground

## What it does right now
It will periodically check the rate-limit remaining on one or more GitHub access token(s) and push the result to a Google Sheet. Helpful for checking rate-limit consumption over time.

### Example
To check the rate-limit remaining on two GitHub access tokens, `$GH_TOKEN_1` and `$GH_TOKEN_2`, use it like this:

```shell
node ./index.js $GH_TOKEN_1 $GH_TOKEN_2 # etc
```
