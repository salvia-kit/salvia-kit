# Contributing to Salvia-kit

## Fix Bugs and Grammar

As there is a documentation for each dashboard and English is not my native language, I can make grammatical mistakes. You can fix that by contributing.

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

## To Add a new dashboard

You can add a dashboard, but it involves several steps to follow.

- Please respect the versioning. (if the last dashboard has the name dashboard-v8, yours will have the next number).


- Please respect file structure by referring to the documentation of the other dashboards to facilitate the writing of the documentation.


- You must do it for these four technologies.<p style="padding-left: 10px; font-weight: bold">React (create-react-app)</p><p style="padding-left: 10px; font-weight: bold">Next.js (create-next-app)</p><p style="padding-left: 10px; font-weight: bold">Vue (vite.js)</p><p style="padding-left: 10px; font-weight: bold">Nuxt.js (create-nuxt-app)</p>

If you can't do this for these 4 techno's, you can only do it for one techno and the rest will be developed by me or by other voluntary contributors.

This way you will be added as a member of the organization, so you will have the right to create these repositories.

At the end of this, the dashboard will finally be added in the website.
