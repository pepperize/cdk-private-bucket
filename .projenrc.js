const { awscdk, javascript } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Andreas Forster",
  authorAddress: "andreas.forster@pepperize.com",
  authorOrganization: true,
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "1.139.0",
  name: "@pepperize/cdk-private-bucket",
  description: "This project provides a CDK construct for creating private S3 bucket.",
  keywords: ["aws", "cdk", "bucket", "s3"],
  repositoryUrl: "https://github.com/pepperize/cdk-private-bucket.git",

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ["unerty", "pflorek", "acfo", "dependabot[bot]"],
    secret: "GITHUB_TOKEN",
  },
  depsUpgradeOptions: {
    workflowOptions: {
      secret: "PROJEN_GITHUB_TOKEN",
    },
  },
  dependabot: true,

  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
    },
  },

  defaultReleaseBranch: "main",
  npmAccess: javascript.NpmAccess.PUBLIC,
  release: {
    releaseEveryCommit: true,
  },
  releaseToNpm: true,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.PrivateBucket",
  },
  publishToPypi: {
    distName: "pepperize.cdk-private-bucket",
    module: "pepperize_cdk_private_bucket",
  },
  // publishToMaven: {
  //   javaPackage: "your_java_package",
  //   mavenGroupId: "your_package_group_id",
  //   mavenArtifactId: "your_package_target_id",
  // },

  gitignore: [".idea/", "*.iml"],

  cdkDependencies: ["@aws-cdk/aws-s3"], // v1
  cdkTestDependencies: ["@aws-cdk/assertions"],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.setScript("format", "prettier --write src/**/*.ts test/**/*.ts .projenrc.js README.md");

project.jest.addTestMatch("**/?(*.)@(spec|test).[tj]s?(x)");

project.synth();
