# Docker Shared Image Tag Action

[![LICENSE](https://img.shields.io/badge/license-BSD3-green)](LICENSE)
[![Latest Release](https://img.shields.io/github/v/release/truemark/docker-shared-image-tag-action)](https://github.com/truemark/docker-shared-image-tag-action/releases)
![GitHub closed issues](https://img.shields.io/github/issues-closed/truemark/docker-shared-image-tag-action)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/truemark/docker-shared-image-tag-action)
![build-test](https://github.com/truemark/docker-shared-image-tag-action/workflows/build-test/badge.svg)

This action will take the current commit SHA and load the corresponding docker image tag to be used from repository 
variables or save a new docker image tag under a repository variable to be used for that commit SHA.

## Examples

```yml
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Create shared Docker Image Tag
        id: create-tag
        uses: truemark/docker-shared-image-tag-action@v1
        with:
          new-image-tag: "test-tag:${{ github.run_number }}"
          token: "${{ secrets.PERSONAL_TOKEN }}"
```

## Inputs

| Name                        | Type       | Required | Description                                                                                                                                 |
|-----------------------------|------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| new-image-tag               | string     | Yes      | The docker image tag to use if an existing one is not found in Repository Variables.                                                        |
| org                         | string     | No       | The Github organization name where the repository lives under.                                                                              |
| token                       | string     | Yes      | The API or personal access token to authorize read and write access to Repository Variables. Note: secrets.GITHUB_TOKEN will not work here. |
| variable-prefix             | string     | No       | he prefix for the repository variable name to be stored. Must start with a letter and defaults to IMAGE_TAG. Example: IMAGE_TAG_<SHA>       |

## Outputs
| Name      | Type   | Description                                                                                           |
|-----------|--------|-------------------------------------------------------------------------------------------------------|
| image-tag | string | The docker image tag that should be used for a given commit SHA.                                      |
| found     | string | Whether or not an existing docker image tag was found in Repository Variables for a given commit SHA. |

## Development

> Install `node version 16`

Install the dependencies
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:
```bash
$ npm test
```
