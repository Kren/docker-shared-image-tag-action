/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// import {getInput, setFailed, setOutput} from '@actions/core'
// import {context} from '@actions/github'
// import {Octokit} from '@octokit/core'
//
// const name = `IMAGE_TAG_${context.sha}`
// const value = getInput('new-image-tag')
//
// const repo = context.payload.repository?.name ?? ''
// const owner = context.payload.repository?.owner.login ?? ''
// const baseUrl =
//   getInput('org') !== 'false' ? `/orgs/${owner}` : repo.includes('/') ? `/repos/${repo}` : `/repos/${owner}/${repo}`
// const url = `${baseUrl}/actions/variables`
//
// const octokit = new Octokit({auth: getInput('token')})
async function run() {
    // try {
    //   const response = await octokit.request(`GET ${url}/${name}`, {owner, repo, name})
    //   if (response.status === 200) {
    //     setOutput(name, response.data)
    //     setOutput('found', 'true')
    //
    //     console.log(`Successfully found variable ${name} with value ${value}`)
    //     return
    //   }
    // } catch (e) {
    //   /* variable does not exist */
    // }
    //
    // try {
    //   const response = await octokit.request(`POST ${url}`, {owner, repo, name, value})
    //   if (response.status !== 201) throw new Error(`ERROR: Wrong status was returned: ${response.status}`)
    //
    //   setOutput(name, value)
    //   setOutput('found', 'false')
    //
    //   console.log(`Successfully created variable ${name} with value ${value}`)
    //   return
    // } catch (error) {
    //   if (error instanceof Error) setFailed(error.message)
    // }
}
run();

module.exports = __webpack_exports__;
/******/ })()
;