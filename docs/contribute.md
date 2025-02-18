---
id: contribute
title: Contribute
---

## NvChad install for contributors

If you wish to contribute to NvChad, you should:

1. [Create a fork on GitHub](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Clone the fork to your machine:
  - For ssh:
    ```shell
    $ git clone git@github.com:<YOUR GITHUB USERNAME>/NvChad.git ~/.config/nvim
    ```
  - For https:
    ```shell
    $ git clone https://github.com/<YOUR GITHUB USERNAME>/NvChad.git ~/.config/nvim
    ```
3. [Add a new remote repo to track](https://www.atlassian.com/git/tutorials/git-forks-and-upstreams)
   - This means you can push/pull as usual to your own repo, but also easily track and update from the NvChad repository.
    - For ssh:
       ```shell
       $ git remote add upstream git@github.com:NvChad/NvChad.git
       ```
    - For https:
       ```shell
       $ git remote add upstream https://github.com/NvChad/NvChad.git
       ```  
4. Any time you create a branch to do some work, use:
   ```shell
   $ git fetch upstream && git checkout -b dev-myFEAT upstream/main
   ```
5. Only use the **--rebase** flag to update your dev branch:
   - This means that there are no `Merge NvChad/main into devBranch` commits, which are to be avoided.
   ```shell
   $ git pull upstream --rebase
   ```

## Things to know before contributing

- When making a PR (pull request), please be very descriptive about what you've done. 

- We are open to all PRs, but may decline some for a myriad of reasons. Don't be discouraged, though! We're still open to discussion.

- PR's are always welcome; however, NvChad aims to be less bloated. So PR's regarding an existing plugin's enhancement and creating new features with existing plugins itself (without adding a new plugin), bug fixes, and corrections are more encouraged.

- NvChad won't keep adding more and more features (like adding new plugins) as requested if they feel unneeded and aren't usable by the majority. If you think the plugin you want to be added is very useful and many NvChaders would find it useful, then such PR's are welcome. 

- Adding specific features, like adding config for [wakatime](https://github.com/wakatime/vim-wakatime) will be added in this [chad user configs](https://github.com/NvChad/NvChad/wiki/Chad-user-configs). This lets the user select the things only they want (adding configs from extra configs).

## Format your PR with StyLua 

- Check the [StyLua config](https://github.com/NvChad/NvChad/blob/main/.stylua.toml)

## How to remove or edit commits from your PR
> You may have been directed here to remove a commit such as a merge commit: `Merge NvChad/main into devBranch` from your PR.

> As these commands edit your git history, you may need to **force push** with `git push origin --force`.

1. Run the following:
  ```
  $ git rebase -i HEAD~<NUMBER OF COMMITS TO GO BACK>
  ```
  <details><summary>Example</summary>
  <p>
  
  ```shell
  $ git rebase -i HEAD~4
  ```
  
  ```shell
  pick 28b2dcb statusline add lsp status
  pick dad9a39 feat: Added lsp radial progress
  pick 68f72f1 add clickable btn for exiting nvim
  pick b281b53 avoid using q! for quitting vim
  
  # Rebase 52b655b..b281b53 onto 52b655b (4 commands)
  #
  # Commands:
  # p, pick <commit> = use commit
  # r, reword <commit> = use commit, but edit the commit message
  # e, edit <commit> = use commit, but stop for amending
  # s, squash <commit> = use commit, but meld into previous commit
  # f, fixup <commit> = like "squash", but discard this commit's log message
  # x, exec <command> = run command (the rest of the line) using shell
  # b, break = stop here (continue rebase later with 'git rebase --continue')
  # d, drop <commit> = remove commit
  # l, label <label> = label current HEAD with a name
  # t, reset <label> = reset HEAD to a label
  # m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
  # .       create a merge commit using the original merge commit's
  # .       message (or the oneline, if no original merge commit was
  # .       specified). Use -c <commit> to reword the commit message.
  #
  # These lines can be re-ordered; they are executed from top to bottom.
  #
  # If you remove a line here THAT COMMIT WILL BE LOST.
  #
  # However, if you remove everything, the rebase will be aborted.
  #
  # Note that empty commits are commented out
  ```
  
  </p>
  </details>

2. Change the `pick` commands to whatever you wish, you may prefer to `d` `drop` or `e` `edit` a commit. Then save and quit this git file to run it.

  <details><summary>Example</summary>
  <p>
  
  ```shell {3,4}
  pick 28b2dcb statusline add lsp status
  pick dad9a39 feat: Added lsp radial progress
  edit 68f72f1 add clickable btn for exiting nvim
  d b281b53 avoid using q! for quitting vim
  
  # Rebase 52b655b..b281b53 onto 52b655b (4 commands)
  #
  # Commands:
  # p, pick <commit> = use commit
  # r, reword <commit> = use commit, but edit the commit message
  # e, edit <commit> = use commit, but stop for amending
  # s, squash <commit> = use commit, but meld into previous commit
  # f, fixup <commit> = like "squash", but discard this commit's log message
  # x, exec <command> = run command (the rest of the line) using shell
  # b, break = stop here (continue rebase later with 'git rebase --continue')
  # d, drop <commit> = remove commit
  # l, label <label> = label current HEAD with a name
  # t, reset <label> = reset HEAD to a label
  # m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
  # .       create a merge commit using the original merge commit's
  # .       message (or the oneline, if no original merge commit was
  # .       specified). Use -c <commit> to reword the commit message.
  #
  # These lines can be re-ordered; they are executed from top to bottom.
  #
  # If you remove a line here THAT COMMIT WILL BE LOST.
  #
  # However, if you remove everything, the rebase will be aborted.
  #
  # Note that empty commits are commented out
  ```
  
  </p>
  </details>

3. If you picked `drop` you are done, if you picked `edit` then edit your files, then run:
  ```shell
  $ git add <files>
  ```

4. Once you have edited and added your files, run:
  ```shell
  $ git rebase --continue
  ```

5. You will likely need to push using:
  ```shell
  $ git push origin --force
  ```
