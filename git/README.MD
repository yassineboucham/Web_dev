# Version Control Using Git and the Command Line

Git is a distributed version control system that helps developers track changes in their code, collaborate with others, and manage project history efficiently.

## 1. Installing Git
To check if Git is installed, run:
```sh
git --version
```
If Git is not installed, download and install it from [git-scm.com](https://git-scm.com/).

## 2. Configuring Git
Set your username and email:
```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 3. Initializing a Repository
To start tracking a project with Git, navigate to the project directory and initialize a repository:
```sh
git init
```

## 4. Checking Repository Status
To check the current status of your repository:
```sh
git status
```

## 5. Staging Changes
Add files to the staging area before committing:
```sh
git add filename  # Add a specific file
git add .         # Add all changes
```

## 6. Committing Changes
To save staged changes with a descriptive message:
```sh
git commit -m "Your commit message"
```

## 7. Viewing Commit History
To see previous commits:
```sh
git log
```

## 8. Connecting to a Remote Repository
To link a local repository to a remote repository (e.g., GitHub):
```sh
git remote add origin https://github.com/yourusername/repository.git
```

## 9. Pushing Changes to Remote
To upload local commits to a remote repository:
```sh
git push origin main  # Push to the main branch
```

## 10. Cloning a Repository
To copy an existing repository:
```sh
git clone https://github.com/yourusername/repository.git
```

## 11. Pulling Changes from Remote
To fetch and merge changes from a remote repository:
```sh
git pull origin main
```

## 12. Branching
Create a new branch:
```sh
git branch branch_name
```
Switch to a branch:
```sh
git checkout branch_name
```
Create and switch to a new branch:
```sh
git checkout -b branch_name
```

## 13. Merging Branches
To merge a branch into the main branch:
```sh
git checkout main
git merge branch_name
```

## 14. Resolving Merge Conflicts
If conflicts arise during merging, manually resolve them, then:
```sh
git add .
git commit -m "Resolved merge conflict"
```

## 15. Deleting a Branch
To delete a local branch:
```sh
git branch -d branch_name
```
To delete a remote branch:
```sh
git push origin --delete branch_name
```

## 16. Undoing Changes
To revert uncommitted changes:
```sh
git checkout -- filename
```
To reset the staging area:
```sh
git reset filename
```
To reset to a previous commit:
```sh
git reset --hard commit_hash
```

## 17. Using .gitignore
To ignore specific files, create a `.gitignore` file and list the filenames or patterns:
```
node_modules/
*.log
.env
```

## 18. Stashing Changes
To temporarily save changes without committing:
```sh
git stash
```
To apply stashed changes:
```sh
git stash pop
```

## 19. Tagging Releases
To create a tag:
```sh
git tag -a v1.0 -m "Version 1.0"
```
To push tags to a remote repository:
```sh
git push origin --tags
```

## 20. Checking Remote URLs
To verify the linked remote repository:
```sh
git remote -v
```

# git diff name_of_file
# git checkout name_of_file
# .gitignor
# git rm --cached -r

## Conclusion
This guide covers essential Git commands for version control. Mastering Git improves collaboration, ensures code integrity, and enhances development workflows.
