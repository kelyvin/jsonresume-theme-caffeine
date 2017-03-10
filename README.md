# jsonresume-theme-caffeine ![](https://travis-ci.org/kelyvin/jsonresume-theme-caffeine.svg?branch=master) [![npm version](https://badge.fury.io/js/jsonresume-theme-caffeine.svg)](https://www.npmjs.com/package/jsonresume-theme-caffeine)

This is the Caffeine theme repository for the [Json Resume](https://jsonresume.org/) project. Unlike the [json-theme-boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate) project, this environment has a much improved developer environment to make editing your theme super easy to do.

![Richard Hendriks Reume](http://i.imgur.com/yktvc8m.png)

## Table of Contents

* [Installation](#installation)
* [Features](#features)
* [Getting Started](#getting-started)
* [Running](#running)
* [Theme Overrides](#theme-overrides)
    * [Icons](#icons)
    * [About](#about)
    * [Colors](#colors)
* [Developer Environment](#developer-environment)
* [Creating your resume.json](#creating-your-resumejson)
* [Building the project](#building-the-project)
* [Exporting your resume](#exporting-your-resume)

## Installation
Before you can get started with this environment, it is critical that you have the [resume-cli](https://github.com/jsonresume/resume-cli) installed. Then, make sure you have [node, npm](https://nodejs.org/en/), and [gulp](http://gulpjs.com/) installed.

## Features
This theme environment comes equipped with the following features to make your development environment easier:

- **Gulp** task management integration, so you can build out your ideal development environment.
- **Sass** and **Handlebars** support to give you the full capabilties of the system and make it easier for you to build your own custom theme.
- **Auto watch** for file changes and automatically recompile your core assets.
- **Browsersync** support to auto refresh your browser whenever you make a change.
- A modular file system.
- Integration with [resume-cli](https://github.com/jsonresume/resume-cli) so you can still run the same commands against this project.

## Getting Started
If you don't have some global packages installed yet, you can run the command below:
```bash
npm install -g resume-cli gulp-cli
```

When building the project for the very first time, run the following command.
```bash
npm install
```
This will install all of your node modules.

## Running
To run the project, simply run the following command
```bash
npm start
```

Running the command above will automatically build your project, load your resume with the theme, listen for changes, and automatically refresh the browser on file changes. A `resume.json` will be created for you by default against the `resume-sample.json` if you do not provide a `resume.json` at the root directory level.

## Theme Overrides
The theme provides will automatically render certain styles and icons depending on what you specify in the `resume.json` or what you choose to adjust within `variable.scss`. Some examples are listed below.

### Icons
All the icons used in the theme are generated through [Font-Awesome](http://fontawesome.io/). So make sure the `network` key that you specify within your `profiles` json config matches the corresponding font-awesome style name. For example:

```
"profiles": [
  {
    "network": "Twitter",
    ...
  },
  {
    "network": "Facebook",
    ...
  }
```

The Twitter and Facebook network keys will be appended to `fa-` to generate `fa-twitter` and `fa-facebook` respectively. Be sure to search within the [font awesome icons](http://fontawesome.io/icons/) to figure out the correct network name you want to use for the icon (i.e. if you want to use a different facebook icon, change the network name to [Facebook-Official](http://fontawesome.io/icon/facebook-official/) or [Facebook-Square](http://fontawesome.io/icon/facebook-square/)).

### About
The entire about section on the left column is populated through the `basics` json config. This section is intentionally kept narrow to provide a quick summary and prevent it from taking up too much real estate on the resume.

However, unfortunately it may be too narrow for folks with really long emails or website names. You can fix this in one of two ways:

1. You can simply add spaces in your JSON config to indicate line breaks to create multi-line styles. The example below will automatically put the `@piedpiper.com` into its own line

    ```
    "email": "richard.hendriks @piedpiper.com",
    ```


2. If you are only one or two characters away from fitting your long strings, you can adjust the width of the left column by going into `variables.scss` and adjusting the two following variables:

    ```
    $aside-width            : 160px;
    $aside-margin           : 20px;
    ```

    `aside-width` will determine how wide to keep the left column, and `aside-margin` will determine how much space you want to leave between the left column and the main content on the right.

### Colors
I highly recommend this to give your resume its own personal flair, If you want to change the default color used within the theme with your own custom color, change the `$primary-color` variable within `variable.scss` with your own.

```
$primary-color          : $slate-green;
```

## Developer Environment
The most important pieces of this environment are the two `app` and `gulp` folders as well as `index.js`. If you've already read through the [jsonresume-theme-boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate), you should know what the files within `/app` and `index.js` represents.

#### /app
The app folder holds all of your assets. The file system should be straightforward to follow. All views will be under the `/views`  folder. Most importantantly, this folder which contains `resume.hbs`, which is the main Handlebars template that will be used and sent to the theme server to render your resume. The  `/styles` folder contains all of your SASS stylesheets.

#### /gulp
The gulp folder holds all the modularized gulp tasks/configs. Anything gulp related should go here. Please reference `gulpfile.js` as the source of truth.

#### index.js
This is the file that will return the HTML to the theme server and run against the resume-cli. Not much change here from the jsonresume-theme-boilerplate except that it has been modified to accomodate this file system.

## Creating your resume.json
This project comes with `resume-sample.json`, which is a sample json resume you can build from. If you don't create a `resume.json` file, it will automatically be created against the `resume-sample.json` file.

It is highly **recommended** to create your own `resume.json` for your own resume. If you create a `resume.json`, this will automatically be used by the app instead. In addition, this file is automatically ignored from GIT to ensure you cannot check it in (since most likely you'll have very personal information on there). If you do decide that you want to check it in, you can simply comment the following line in `.gitignore` like so:

```
# Keep your personal resume.json private
# resume.json
```

Please review the [schema here](https://jsonresume.org/schema/) when creating your `resume.json`.

### Ignoring changes in resume.json
If you want to modify the theme but don't necessarily want to propogate the changes made in resume.json, you can easily untrack that file by running the following command:
```
git update-index --assume-unchanged resume.json
```

If you want to track the file again, you can run:
```
git update-index --no-assume-unchanged resume.json
```

## Building the project
When you run `npm start` or choose to manually build the project using `gulp`, it will generate a `/public` folder. This folder will be created after running the appropritae gulp tasks against the `/app` folder. Essentially, the app folder is your development environment and the public folder will be what we deploy to production. The public folder is exactly the same as the public folder generated from the jsonresume-theme-boilerplate, thus, our `index.js` will still run agianst this folder.

## Exporting your resume
To export your resume, you can run the following command below:

```
gulp export
```

This will automatically set up an npm link with this package to your globally installed npm dependencies and enable you to run the `resume export` command from `resume-cli`. This will automatically create a `resume.pdf` file within your current directory. You can also specify the format by adding a format argument to the command as well.

```
gulp export --format html
```