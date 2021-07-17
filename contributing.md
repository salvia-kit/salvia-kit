# Contributing to Salvia-kit

## Fix Bugs and Grammar

Each dashboard has 4 variants (one for React, Next.js, Vue and Nuxt.js). We have 8 dashboards, which makes a total of 32 repositories + this website.

As English is not my native language, I can make some grammatical mistakes while writing all the 33 repositories. You can fix that by contributing to improve content.

You can also fix bugs.

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch `git checkout -b MY_BRANCH_NAME`
3. Install yarn: `npm install -g yarn`
4. Install the dependencies: `yarn`
5. Run `yarn dev` to build and watch for code changes
6. Push your contribution to the branch you created `git push origin MY_BRANCH_NAME`
7. Navigate to the original repository where you created your fork
8. Click on `Compare and pull request` to view changes
9. Then click on `create pull request`

## Add a new dashboard

Adding a new dashboard, involves several steps to follow.

- Please respect the versioning. (if the last dashboard has the name dashboard-v8, yours will have the next number).


- Please respect file structure by referring to the documentation of the other dashboards to facilitate the writing of the new dashboard's documentation.


- You have to do it for these four variants.<p style="padding-left: 10px; font-weight: bold">React (create-react-app)</p><p style="padding-left: 10px; font-weight: bold">Next.js (create-next-app)</p><p style="padding-left: 10px; font-weight: bold">Vue (vite.js)</p><p style="padding-left: 10px; font-weight: bold">Nuxt.js (create-nuxt-app)</p>

If you can't do it for these 4 variants, you can only do it for one, two or three variants and the rest will be developed by voluntary contributors.

This way you will be added as a member of the organization, so you will have the right to create these repositories.

When it's all over, the dashboard will finally be added in the website.
