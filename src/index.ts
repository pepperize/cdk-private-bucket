import * as s3 from "@aws-cdk/aws-s3";

import { Construct } from "@aws-cdk/core";

export interface PrivateBucketProps extends s3.BucketProps {}

export class PrivateBucket extends s3.Bucket {
  constructor(scope: Construct, id: string, props: PrivateBucketProps = {}) {
    super(scope, id, {
      encryption: s3.BucketEncryption.S3_MANAGED,
      ...props,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
    });
  }
}
