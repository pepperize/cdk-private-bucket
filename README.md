[![GitHub](https://img.shields.io/github/license/pepperize/cdk-private-bucket?style=flat-square)](https://github.com/pepperize/cdk-private-bucket/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-private-bucket?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-private-bucket)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-private-bucket?style=flat-square)](https://pypi.org/project/pepperize.cdk-private-bucket/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.PrivateBucket?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.PrivateBucket/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-private-bucket?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-private-bucket/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-private-bucket/release/main?label=release&style=flat-square)](https://github.com/pepperize/cdk-private-bucket/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-private-bucket?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-private-bucket/releases)

# AWS CDK Private Bucket

This project provides a CDK construct to create an S3 Bucket with some security pre-sets. It uses usual [s3.BucketProps](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-s3.BucketProps.html) and overrides these key-value pairs:

```typescript
{
  blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
  enforceSSL: true,
  encryption: s3.BucketEncryption.S3_MANAGED,
}
```

The result is a privacy-oriented S3 Bucket.

## Install

### TypeScript

```shell
npm install @pepperize/cdk-private-bucket
```

or

```shell
yarn add @pepperize/cdk-private-bucket
```

### Python

```shell
pip install pepperize.cdk-private-bucket
```

### C# / .Net

```
dotnet add package Pepperize.CDK.PrivateBucket
```

### Java

```xml
<dependency>
  <groupId>com.pepperize</groupId>
  <artifactId>cdk-private-bucket</artifactId>
  <version>${cdkPrivateBucket.version}</version>
</dependency>
```

## Example

```shell
npm install @pepperize/cdk-private-bucket
```

See [API.md](https://github.com/pepperize/cdk-private-bucket/blob/main/API.md).

```typescript
import { PrivateBucket } from "@pepperize/cdk-private-bucket";

const bucket = new PrivateBucket(this, "PrivateBucket", {});
```
