# Green Software Training

The most significant bottleneck to adopting green software practices is a lack of knowledge.

This repository contains the training material for the Green Software Practitioner Certification, otherwise known as the Principles of Green Software as well as other training material.

This is a project run through the [Community Working Group](https://grnsft.org/community-wg) in the [Green Software Foundation](https://greensoftware.foundation) and can be viewed through https://training.greensoftware.foundation

## Appointments
Chair - Sarah Hsu - Goldman Sachs

## Copyright
This project is copyrighted under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/).

## Patent
No Patent License.

## License
This project is licensed under the MIT License - see the [LICENCE](LICENCE) file for details.

## Contributing

This project is open source and welcomes public contribution via issues, discussions and pull requests.

Members of the Green Software Foundation also meet and discuss aspects of this project either in-person or virtual via email or video.

Instructions for how to contribute to this project can be found in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Editing Content

This project is a static website based on the project https://docusaurus.io, you can find more information about docusaurus here: https://docusaurus.io/docs

The `docs` folder contains all of the material in this project, editing any file there in the `main` branch will update the website. If you are only interested in editing content on the website then you should not need to leave the `docs` folder.

The documentation files use a format called markdown and they end in `.md` which supports certain basic styling features like so: https://docusaurus.io/docs/markdown-features

## Developing Locally

To edit this project on your local machine and see the output as it would be rendered on the website you will need `node` at least version 14 installed.

We also recommend to use `yarn` as the package management solution as the deployment scripts use `yarn` not `npm`.

`npm -g install yarn`

`yarn install`

Then to run the project locally type

`yarn run docusaurus start`

and visit https://localhost:3000 in your favorite browser or whatever the command above prints out in the terminal.

## Site Configuration

To edit attributes of the website, customize the menu, sidebar and footer for example, you will need to edit the `docusaurus.config.js` file, more information about the options that are present there can be found here: https://docusaurus.io/docs/api/docusaurus-config