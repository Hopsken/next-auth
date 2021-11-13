---
id: dribbble
title: Dribbble
---

## Documentation

https://developer.dribbble.com/v2/oauth/

## Configuration

https://dribbble.com/account/applications

## Options

The **Dribbble Provider** comes with a set of default options:

- [Dribbble Provider options](https://github.com/nextauthjs/next-auth/blob/main/src/providers/dribbble.js)

You can override any of the options to suit your own use case.

## Example

```js
import Providers from `next-auth/providers`
...
providers: [
  Providers.Dribbble({
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET
  })
]
...
```
