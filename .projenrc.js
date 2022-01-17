const { awscdk } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Andreas Forster",
  authorAddress: "andreas.forster@pepperize.com",
  authorOrganization: true,
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "1.139.0",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-private-bucket",
  description: "This project provides a CDK construct for creating private S3 bucket.",
  keywords: ["aws", "cdk", "bucket", "s3"],
  repositoryUrl: "https://github.com/pepperize/cdk-private-bucket.git",
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
    },
  },
  gitignore: [".idea/", "*.iml"],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.setScript("format", "prettier --write src/**/*.ts test/**/*.ts .projenrc.js README.md");

project.synth();
