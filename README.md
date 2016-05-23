# jsonresume-theme-caffeine

This is the Caffeine theme repository for the [Json Resume](https://jsonresume.org/) project. Unlike the [json-theme-boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate) project, this environment has a much improved developer environment to make editing your theme super easy to do.

## Installation
Before you can get started with this environment, it is critical that you have the [resume-cli](https://github.com/jsonresume/resume-cli) installed. Then, make sure you have [node, npm](https://nodejs.org/en/), [bower](http://bower.io/), and [gulp](http://gulpjs.com/) installed.

## Features
This theme environment comes equipped with the following features to make your development environment easier:

- **Gulp** task management integration, so you can build out your ideal development environment.
- **Sass** and **Handlebars** support to give you the full capabilties of the system and make it easier for you to build your own custom theme.
- **Auto watch** for file changes and automatically recompile your core assets.
- **Browsersync** support to auto refresh your browser whenever you make a change.
- A modular file system.
- Integration with [resume-cli](https://github.com/jsonresume/resume-cli) so you can still run the same commands against this project.

## Getting Started
When building the project for the very first time, run the following command.
```bash
npm install
```
This will install all of your node modules as well as your bower components (I have already set up a post-install scrpt to do this for you).

## Running
To run the project, simply run the following command
```bash
npm start
```

Running the command above will automatically build your project, load your resume with the theme, listen for changes, and automatically refresh the browser on file changes.

## Developer Environment
The most important pieces of this environment are the two `app` and `gulp` folders as well as `index.js`. If you've already read through the [jsonresume-theme-boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate), you should know what the files within `/app` and `index.js` represents.

#### /app
The app folder holds all of your assets. The file system should be straightforward to follow. All views will be under the `/views`  folder. Most importantantly, this folder which contains `resume.hbs`, which is the main Handlebars template that will be used and sent to the theme server to render your resume. The  `/styles` folder contains all of your SASS stylesheets.

#### /gulp
The gulp folder holds all the modularized gulp tasks/configs. Anything gulp related should go here. Please reference `gulpfile.js` as the source of truth.

#### index.js
This is the file that will return the HTML to the theme server and run against the resume-cli. Not much change here from the jsonresume-theme-boilerplate except that it has been modified to accomodate this file system.

## Creating your resume.json
This project comes with `resume-sample.json`, which is a sample json resume you can build from. This will automatically be served by the app if you don't create a `resume.json` file.

It is highly **recommended** to create your own `resume.json` for your own resume. If you create a `resume.json`, this will automatically be used by the app instead. In addition, this file is automatically ignored from GIT to ensure you cannot check it in (since most likely you'll have very personal information on there). If you do decide that you want to check it in, you can simply comment the following line in `.gitignore` like so:

```
# Keep your personal resume.json private
# resume.json
```

Please review the [schema here](https://jsonresume.org/schema/) when creating your `resume.json`.

## Building the project
When you run `npm start` or choose to manually build the project using `gulp`, it will generate a `/public` folder. This folder will be created after running the appropraite gulp tasks against the `/app` folder. Essentially, the app folder is your development environment and the public folder will be what we deploy to production. The public folder is exactly the same as the public folder generated from the jsonresume-theme-boilerplate, thus, our `index.js` will still run agianst this folder.

## Ignoring changes in resume.json
If you want to modify the theme but don't necessarily want to propogate the changes made in resume.json, you can easily untrack that file by running the following command:
```
git update-index --assume-unchanged resume.json
```

If you want to track the file again, you can run:
```
git update-index --no-assume-unchanged resume.json
```
