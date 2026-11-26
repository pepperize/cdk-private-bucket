const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { javascript } = require("projen");
const project = new AwsCdkConstructLibrary({
  author: "Andreas Forster",
  authorAddress: "andreas.forster@pepperize.com",
  authorOrganization: true,
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.278.0",
  jsiiVersion: "~6.0.0",
  name: "@pepperize/cdk-private-bucket",
  description: "This project provides a CDK construct for creating private S3 bucket.",
  keywords: ["aws", "cdk", "bucket", "s3"],
  repositoryUrl: "https://github.com/pepperize/cdk-private-bucket.git",

  minNodeVersion: "22.13.0",
  workflowNodeVersion: "24.x",
  jestOptions: {
    jestVersion: "^30",
  },
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,

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
  publishToMaven: {
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-private-bucket",
    javaPackage: "com.pepperize.cdk.private_bucket",
  },
  devDeps: ["@pepperize/projen-awscdk-construct@~0.1.1", "@types/node@^22", "typescript@~6.0"],
});

project.synth();
