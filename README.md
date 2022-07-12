## Description

[Simple service](https://github.com/seductorAmadeus/ya-tracker-gitlab-helper) based on Nest/TS for Yandex.Tracker with Gitlab integration purpose.

## Pre-install

Create **.env.dev** file with the following variables from the [file](https://github.com/seductorAmadeus/ya-tracker-gitlab-helper/blob/main/.env.local):

```bash
PORT=****

GITLAB_TOKEN=****
GITLAB_HOST=****

TRACKER_ORG_ID=****
TRACKER_HOST=****
TRACKER_OAUTH_TOKEN=****
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start:dev

# watch mode
$ yarn run start:dev:watch

# production mode
$ yarn run start:prod
```

## Support

This is a MIT-licensed open source project.

## Stay in touch

- Author - [Raila Martin](mailto:martinraila@mail.ru)

## License

[MIT licensed](LICENSE).
