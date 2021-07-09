# Contributing to kimia-UI

You can contribute by adding new components, fixing bugs, grammar or  improving accessibility.

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch `git checkout -b MY_BRANCH_NAME`
3. Install yarn: `npm install -g yarn`
4. Install the dependencies: `yarn`
5. Run `yarn dev` to build and watch for code changes
6. Push your contribution to the branch you created `git push origin MY_BRANCH_NAME`
7. Navigate to the original repository where you created your fork
8. Click on `Compare and pull request` to view changes
9. Then click on `create pull request`

## 📋 To Add a new component

Create your new directory in **packages/{yourComponentName}** Inside your folder, you will create 2 subfolders and one file

- **examples** : will contains examples for your component in TypeScript**
- **snippets** : Will contains examples in plain React and will be used as code snippet to copy
- **accordion.tsx** will contains the logic of your components


Create your new file(route) in **pages/components/{yourComponentName}**. Then you will import all the examples and snippets for your component

