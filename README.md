# `playground-sheets`
> Just a Google Sheets playground

## Setup

Follow [the Node.js quickstart](https://developers.google.com/sheets/api/quickstart/nodejs) from Google Sheets for Developers guide, and make sure your [desktop application credentials](https://developers.google.com/sheets/api/quickstart/nodejs#authorize_credentials_for_a_desktop_application) are stored in a `credentials.json` file -- see [`credentials-example.json`](credentials.example.json) for an example.

## What it does right now
It will periodically check the rate-limit remaining on one or more GitHub access token(s) and push the result to a Google Sheet. Helpful for checking rate-limit consumption over time.

### Example
To check the rate-limit remaining on two GitHub access tokens, `$GH_TOKEN_1` and `$GH_TOKEN_2`, use it like this:

```shell
node ./index.js $GH_TOKEN_1 $GH_TOKEN_2 # etc
```
