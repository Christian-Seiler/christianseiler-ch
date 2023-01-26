# Developer Infos

## Storybook

- [Storybooks for Angular Projects](https://nx.dev/packages/storybook/documents/overview-angular)
- [Compodoc for Storybook](https://nx.dev/packages/storybook/documents/angular-storybook-compodoc)

```shell
nx g @nrwl/angular:stories <project-name>
```

## Update to the latest Nx version

### Step 1: Updating dependencies and generating migrations

```shell
nx migrate latest
```

### Step 2: Running migrations

```shell
nx migrate --run-migrations
```

### Step 3: Cleaning up

- Remove **migrations.json**
- Commit changes

More infos see <https://nx.dev/core-features/automate-updating-dependencies>.


## 3rd Party Documentation

- [nx](https://nx.dev)
- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [tailwindcss](https://tailwindcss.com)
