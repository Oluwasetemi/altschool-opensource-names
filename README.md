
![AltSchool Africa Logo](./AltSchool-light.svg#gh-light-mode-only)
![AltSchool Africa Logo](./AltSchool-dark.svg#gh-dark-mode-only)

# Open Source Playground

This project aims to introduce AltSchool Africa students to Open Source contribution. To get started, follow the steps below.

## Fork this repository

This will create a local copy of the repository in your GitHub account

![Screenshot of GitHub repository with the link to fork highlighted](https://i.ibb.co/X7wFbBx/fork.png)

## Clone the repository

<img align="right" width="350px" src="https://i.ibb.co/5Bd213P/code-copy.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```sh
git clone <url-you-copied>
```

where `<url-you-copied>` is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:

```sh
git clone https://github.com/tobisupreme/altschool-opensource-names.git
```

Your GitHub username will be in place of `tobisupreme`. Here you're copying the contents of the **altschool-opensource-names** repository on GitHub to your computer.

## Make a branch

Change into the repository directory on your computer (if you are not already there):

```sh
cd altschool-opensource-names
```

Keep a reference to the original project by entering the following command:

```sh
git remote add upstream https://github.com/Oluwasetemi/altschool-opensource-names.git
```

Create a new branch that describes the changes that you're going to make. For example, to create a branch named "adding-new-name", enter the following command:

```sh
git branch adding-new-name
```

Switch to the branch by entering `git checkout <name-of-branch>`. For our example, the command will be:

```sh
git checkout adding-new-name
```

## Make changes and commit the changes

Now open `names.txt` file and add your name to it. 

:warning: Don't add it at the beginning or end of the file. 

Put it anywhere in between (:pencil2: this will make the merge simple for git to understand). 

Now, save the file.

While in the project directory, if you execute the command `git status`, you'll see there are changes.

<img align="right" width="600px" src="https://i.ibb.co/K5Qn0Ly/gst.png" alt="git status in a terminal" />

Add those changes to the branch you just created using the `git add` command:

```sh
git add names.txt
```

Next, commit those changes using the `git commit` command:

```sh
git commit -m "Add <your-name> to the list of names"
```

replacing `<your-name>` with your name.

## Push changes to GitHub

Push your changes using the command `git push`:

```sh
git push origin -u <your-branch-name>
```
replacing `<add-your-branch-name>` with the name of the branch you created earlier.

As per our example, the command will be:

```sh
git push origin -u adding-new-name
```

## Submit your changes for review

Open your forked repository on GitHub. Click on the `Compare & pull request` button.

![Screenshot of GitHub repository with the link to compare and pull request highlighted](https://i.ibb.co/jR2gFHm/pr.png)

Create a pull request

![Screenshot of GitHub repository with the link to create pull request highlighted](https://i.ibb.co/jLPVkF1/submitpr.png)

And that's it! Your Pull Request has been submitted! :partying_face:
Soon a moderator will be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.


<details>

<summary> <strong>A note on resolving merge conflicts</strong> </summary>

> Read the GitHub docs about resolving merge conflicts [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts).

To avoid fixing merge conflicts, all changes made will have to be discarded.

To get started, sync your forked repository by going to the GitHub page, then click the `sync fork` button. 

Next, discard your commits.

![Screenshot of GitHub repository with the link to sync fork highlighted](https://i.ibb.co/C15MDjR/syncfork.png)

Then make a fresh clone of your newly synced repository and follow the steps from [Clone the repository](#clone-the-repository).

</details>



&copy; <a href="https://www.altschoolafrica.com/" target="_blank">AltSchool Africa</a>