const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const project = new AwsCdkConstructLibrary({
  author: "Andreas Forster",
  authorAddress: "andreas.forster@pepperize.com",
  authorOrganization: true,
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.8.0",
  name: "@pepperize/cdk-private-bucket",
  description: "This project provides a CDK construct for creating private S3 bucket.",
  keywords: ["aws", "cdk", "bucket", "s3"],
  repositoryUrl: "https://github.com/pepperize/cdk-private-bucket.git",

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

  testDeps: ["@aws-cdk/assertions"],
  devDeps: ["@pepperize/projen-awscdk-construct"],
});

project.synth();
