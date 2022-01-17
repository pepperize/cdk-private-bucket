const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Andreas Forster',
  authorAddress: 'acfo@gmx.net',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-private-bucket',
  repositoryUrl: 'https://github.com/pepperize/cdk-private-bucket.git',
  gitignore: ['.idea/', '*.iml'],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();