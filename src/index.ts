import * as s3 from "@aws-cdk/aws-s3";

import { Construct } from "@aws-cdk/core";

export interface PrivateBucketProps extends s3.BucketProps {}

export class PrivateBucket extends s3.Bucket {
  constructor(scope: Construct, id: string, props: PrivateBucketProps = {}) {
    let encryption: s3.BucketEncryption = s3.BucketEncryption.S3_MANAGED;
    if (props.encryption && props.encryption !== "NONE") {
      encryption = props.encryption;
    }
    super(scope, id, {
      ...props,
      encryption: encryption,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
    });
  }
}
